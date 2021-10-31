import Layout from "../components/Layout";
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
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import useStyles from "../utils/styles";
import Cookies from "js-cookie";

export default function Home({ products }) {
  const { dispatch, state } = useContext(Store);
  const router = useRouter();

  const { slugs } = state;
  const classes = useStyles();
  const [displayedProducts, setdisplayedProducts] = useState(products);
  const [productSlugs, setProductSlugs] = useState(slugs);

  useEffect(() => {
    // if (!paymentMethod) {
    //   router.push("/payment");
    // }

    dispatch({ type: "PRODUCT_SLUGS", payload: productSlugs });
    Cookies.set("slugs", JSON.stringify(productSlugs));

    if (!productSlugs.length) {
      setProductSlugs(displayedProducts.map((product) => product.slug));
    }
  }, [productSlugs]);

  const addToCartHandler = async (product) => {
    const { data } = await axios.get(`/api/products/${product._id}`);
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (data.countInStock < quantity) {
      window.alert("Products is out of Stock!");
      return;
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
  };

  const filterProducts = (e) => {
    e.preventDefault;
    const filter = e.currentTarget.value;
    if (filter === "All") {
      setdisplayedProducts(products);
      setProductSlugs(products.map((product) => product.slug));

      return;
    }
    const filteredProducts = products.filter((product) => {
      return product.category.split(" ").slice(-1)[0] === filter;
    });

    setdisplayedProducts(filteredProducts);
    if (filteredProducts.length) {
      setProductSlugs(filteredProducts.map((product) => product.slug));
    }
  };

  return (
    <Layout>
      <div>
        <h1> Products</h1>
        <div className={classes.filterButtonContainer}>
          <Button
            onClick={(e) => filterProducts(e)}
            value="All"
            className={classes.filterButton}
          >
            All
          </Button>
          <Button
            onClick={(e) => filterProducts(e)}
            value="Gem"
            className={classes.filterButton}
          >
            Precious Gems
          </Button>
          <Button
            onClick={(e) => filterProducts(e)}
            value="Stone"
            className={classes.filterButton}
          >
            Precious Stones
          </Button>
          <Button
            onClick={(e) => filterProducts(e)}
            value="Rock"
            className={classes.filterButton}
          >
            Precious Rocks
          </Button>
        </div>
        <Grid container spacing={3}>
          {!displayedProducts
            ? "no product"
            : displayedProducts.map((product) => {
                return (
                  <Grid item md={3} key={product.name}>
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

  //await axios.get('api/')

  await db.connect();
  const products = await Product.find({}).lean();
  props.products = products.map(db.convertDocToObj);
  await db.disconnect();

  return {
    props,
  };
};
