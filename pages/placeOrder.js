import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import Image from "next/image";
import dynamic from "next/dynamic";
import axios from "axios";
import {
  Grid,
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Typography,
  Select,
  MenuItem,
  Button,
  Link,
  ListItem,
  List,
  Card,
} from "@material-ui/core";
import NextLink from "next/link";
import { Router, useRouter } from "next/router";
import useStyles from "../utils/styles";
import CheckoutWizard from "../components/CheckoutWizard";
import { useSnackbar } from "notistack";

function PlaceOrder() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const classes = useStyles();
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const {
    cart: { cartItems },
    cart: { shippingAddress },
    cart: { paymentMethod },
  } = state;

  const { fullName, address, city, postalCode, country } = shippingAddress;

  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100; //123.456 => 123.46
  const itemsPrice = cartItems.reduce(
    (total, value) => total + value.price * value.quantity,
    0
  );

  const ShippingPrice = itemsPrice > 200 ? 0 : 15;

  const taxPrice = round2(itemsPrice * 0.15);
  const totalPrice = round2(itemsPrice + ShippingPrice + taxPrice);

  useEffect(() => {
    if (!paymentMethod) {
      router.push("//payment");
    }
  }, []);

  const placeOrderHandler = () => {
    closeSnackbar();
    try {
      setLoading(true);
    } catch (error) {
      setLoading(false);
      enqueueSnackbar(getError(error), { variant: "error" });
    }
    router.push("/confirmationPage");
  };

  return (
    <Layout title="Place Order">
      <CheckoutWizard activeStep={3}></CheckoutWizard>
      <Typography component="h1" variant="h1">
        Place Order
      </Typography>
      <Grid container spacing={1}>
        <Grid item md={9} xs={12}>
          <Card className={classes.section}>
            <List>
              <ListItem>
                <Typography component="h2" variant="h2">
                  Shipping Address
                </Typography>
              </ListItem>
              <ListItem>
                {fullName}, {address}, {city}, {postalCode}, {country}
              </ListItem>
            </List>
          </Card>
          <Card className={classes.section}>
            <List>
              <ListItem>
                <Typography component="h2" variant="h2">
                  Payment Method
                </Typography>
              </ListItem>
              <ListItem>{paymentMethod}</ListItem>
            </List>
          </Card>
          <Card className={classes.section}>
            <List>
              <ListItem>
                <Typography component="h2" variant="h2">
                  Order Items
                </Typography>
              </ListItem>
              <ListItem>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Price</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cartItems.map((item) => (
                        <TableRow key={item._id}>
                          <TableCell>
                            <NextLink passHref href={`/product/${item.slug}`}>
                              <Link>
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  width={50}
                                  height={50}
                                />
                              </Link>
                            </NextLink>
                          </TableCell>
                          <TableCell>
                            <NextLink passHref href={`/product/${item.slug}`}>
                              <Link>
                                <Typography>{item.name}</Typography>
                              </Link>
                            </NextLink>
                          </TableCell>
                          <TableCell align="right">
                            <Typography>{item.quantity}</Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography>${item.price}</Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </ListItem>
            </List>
          </Card>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card className={classes.section}>
            <List>
              <ListItem>
                <Typography variant="h2">Order Summary</Typography>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography> Items:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right">{itemsPrice}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography> Tax:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right">{taxPrice}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography> shipping:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right">{ShippingPrice}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>
                      <strong>Total: </strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right">
                      <strong>${totalPrice}</strong>
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
      <List>
        <ListItem>
          <Button
            variant="contained"
            fullWidth
            color="secondary"
            onClick={() => {
              router.push("/payment");
            }}
          >
            Back
          </Button>
        </ListItem>
      </List>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(PlaceOrder), { ssr: false });
