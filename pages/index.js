import Layout from "../components/Layout";
import data from "../utils/data";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import NextLink from "next/link";
import db from "../utils/db";
import Product from "../models/Product";
import { useRouter } from "next/router";
import { Store } from "../utils/Store";
import React, { useContext } from "react";
import axios from "axios";

export default function Home({ products }) {
  const { dispatch, state } = useContext(Store);
  const router = useRouter();

  const addToCartHandler = async (product) => {
    const { data } = await axios.get(`/api/products/${product._id}`);
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (data.countInStock < quantity) {
      window.alert("Sorry, Products is Out of Stock");
      return;
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
  };

  return (
    <Layout>
      <div>
        <h1> Products</h1>
        <Grid container spacing={3}>
          {!products
            ? "no product"
            : products.map((product) => {
                return (
                  <Grid item md={4} key={product.name}>
                    <Card>
                      <NextLink href={`/product/${product.slug}`} passHref>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            image={product.image}
                            title={product.name}
                          ></CardMedia>
                          <CardContent>
                            <Typography>{product.name}</Typography>
                          </CardContent>
                        </CardActionArea>
                      </NextLink>
                      <CardActions>
                        <Typography>${product.price}</Typography>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() => addToCartHandler(product)}
                        >
                          Add to cart
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
        </Grid>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const props = {};

  try {
    await db.connect();
    const products = await Product.find({}).lean();
    props.products = products.map(db.convertDocToObj);
    await db.disconnect();
  } catch (error) {
    throw error;
  }

  console.log("hello", props);
  return {
    props,
  };
};
