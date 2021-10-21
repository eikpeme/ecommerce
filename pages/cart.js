import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import Image from "next/image";
import dynamic from "next/dynamic";
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

function CartScreen(props) {
  const { state } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  return (
    <Layout title="shopping cart">
      <Typography component="h1" variant="h1">
        Shopping Cart
        {!cartItems.length ? (
          <div>
            {" "}
            cart is empty
            <NextLink href="/"> Go Shopping </NextLink>
          </div>
        ) : (
          <Grid container spacing={1}>
            <Grid item md={9} xs={12}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Image</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">Action</TableCell>
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
                          <Select value={item.quantity}>
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <MenuItem key={x + 1} value={x + 1}>
                                {x + 1}
                              </MenuItem>
                            ))}
                          </Select>
                        </TableCell>
                        <TableCell align="right">${item.price}</TableCell>
                        <TableCell align="right">
                          <Button variant="contained" color="secondary">
                            x
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item md={3} xs={12}>
              <Card>
                <List>
                  <ListItem>
                    <Typography variant="h2">
                      {" "}
                      Subtotal (
                      {cartItems.reduce(
                        (total, value) => total + value.quantity,
                        0
                      )}{" "}
                      items) : $
                      {cartItems.reduce(
                        (total, value) => total + value.price,
                        0
                      )}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Button variant="contained" color="primary" fullWidth>
                      {" "}
                      Check Out
                    </Button>
                  </ListItem>
                </List>
              </Card>
            </Grid>
          </Grid>
        )}
      </Typography>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(CartScreen),{ssr: false});
