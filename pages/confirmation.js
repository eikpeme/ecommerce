import React, { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import NextLink from "next/link";
import Image from "next/image";
import {
  Grid,
  TableContainer,
  Table,
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Link,
  CircularProgress,
  Button,
  Card,
  List,
  ListItem,
} from "@material-ui/core";
import axios from "axios";
import { useRouter } from "next/router";
import useStyles from "../utils/styles";
import CheckoutWizard from "../components/CheckoutWizard";
import { useSnackbar } from "notistack";
import { getError } from "../utils/error";
import Cookies from "js-cookie";

function PlaceOrder() {
  const classes = useStyles();
  const router = useRouter();

  // useEffect(() => {
  //   if (!paymentMethod) {
  //     router.push("/payment");
  //   }
  // }, []);

  return (
    <Layout title="Order Confirmation">
      <CheckoutWizard activeStep={4}></CheckoutWizard>

      <Typography component="h1" variant="h1">
        Order Confirmation
      </Typography>

      <Grid container spacing={1}>
        <Grid item md={12} xs={12}>
          <Typography
            className={classes.confirmation}
            component="h1"
            variant="h1"
          >
            Your Order Has Been Placed!
          </Typography>
        </Grid>
        <Grid item md={12} xs={12}>
          <NextLink href={`/`} passHref>
            <Link>
              <Typography className={classes.cont}>
                Continue Shopping
              </Typography>
            </Link>
          </NextLink>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(PlaceOrder), { ssr: false });
