import React, { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../../components/Layout";
import NextLink from "next/link";
import {
  Link,
  Grid,
  List,
  ListItem,
  Typography,
  Card,
  Button,
} from "@material-ui/core";
import useStyles from "../../utils/styles";
import db from "../../utils/db";
import Product from "../../models/Product";
import axios from "axios";
import { Store } from "../../utils/Store";

const ProductScreen = ({ product }) => {
  const { dispatch, state } = useContext(Store);
  const router = useRouter();
  const classes = useStyles();

  const { slugs } = state;
  const slugNum = slugs.indexOf(product.slug);

  if (!product) return <div> Product Not Found</div>;

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      window.alert("Sorry, Products is Out of Stock");
      return;
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });

    router.push("/cart");
  };

  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>Back to products</Typography>
          </Link>
        </NextLink>
      </div>
      <div className={classes.context}>
        {slugs[slugNum - 1] && (
          <NextLink href={`/product/${slugs[slugNum - 1]}`} passHref>
            <Link>
              <Button className={classes.navButton}>Prev</Button>
            </Link>
          </NextLink>
        )}
        <Grid container item spacing={1}>
          <Grid item md={6} xs={12}>
            <Image
              src={product.image}
              alt={product.name}
              width={610}
              height={640}
              layout="responsive"
            ></Image>
          </Grid>
          <Grid item md={3} xs={12}>
            <List>
              <ListItem>
                <Typography component="h1" variant="h1">
                  {product.name}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography> Category: {product.category}</Typography>
              </ListItem>
              <ListItem>
                <Typography> Brand: {product.brand} </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Rating: {product.rating} stars ({product.numReviews} reviews)
                </Typography>
              </ListItem>
              <ListItem>
                <Typography> Description: {product.description}</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography> Price</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography> ${product.price}</Typography>{" "}
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography> Status</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>
                        {product.countInStock > 0 ? "In stock" : "Unavailable"}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
        {slugs[slugNum + 1] && (
          <NextLink href={`/product/${slugs[slugNum + 1]}`} passHref>
            <Link>
              <Button className={classes.navButton}>Next</Button>
            </Link>
          </NextLink>
        )}
      </div>
    </Layout>
  );
};

export default ProductScreen;

export const getServerSideProps = async (context) => {
  const props = {};
  const { params } = context;
  const { slug } = params;

  await db.connect();
  //returns a mongoose doc
  const product = await Product.findOne({ slug }).lean();
  props.product = db.convertDocToObj(product);
  await db.disconnect();

  return {
    props,
  };
};
