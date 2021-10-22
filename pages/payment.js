import { useRouter } from "next/router";
import React, { useContext, useState, useEffect } from "react";
import { Store } from "../utils/Store";
import Cookies from "js-cookie";
import Layout from "../components/Layout";
import CheckoutWizard from "../components/CheckoutWizard";
import {
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Typography,
  Button,
} from "@material-ui/core";
import useStyles from "../utils/styles";
import { useSnackbar } from "notistack";
import { route } from "next/dist/server/router";

function Payment(props) {
  const router = useRouter();
  const classes = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [paymentMethod, setPaymentMethod] = useState("");
  const { state, dispatch } = useContext(Store);
  const {
    cart: { shippingAddress },
  } = state;

  useEffect(() => {
    if (!shippingAddress.address) {
      router.push("/shipping");
    } else {
      setPaymentMethod(Cookies.get("paymentMethod") || "");
    }
  }, []);

  const submitHandler = (e) => {
    closeSnackbar();
    e.preventDefault();
    if (!paymentMethod) {
      enqueueSnackbar("Payment method is required", { variant: "error" });
    } else {
      dispatch({ type: "SAVE_PAYMENT_METHOD", payload: paymentMethod });
      Cookies.set("paymentMethod", paymentMethod);
      router.push("/placeOrder");
    }
  };
  return (
    <Layout title="Payment Method">
      <CheckoutWizard activeStep={2}></CheckoutWizard>

      <form className={classes.form} onSubmit={submitHandler}>
        <Typography component="h1" variant="h1">
          Payment Method
        </Typography>
        <List>
          <ListItem>
            <FormControl component="fieldset">
              {/* <FormLabel component="legend">Gender</FormLabel> */}
              <RadioGroup
                aria-label="Payment Method"
                value={paymentMethod}
                name="paymentMethod"
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <FormControlLabel
                  value="payPal"
                  label="PayPal"
                  control={<Radio />}
                />
                <FormControlLabel
                  value="stripe"
                  label="Stripe"
                  control={<Radio />}
                />
                <FormControlLabel
                  value="cash"
                  label="Cash"
                  control={<Radio />}
                />
              </RadioGroup>
            </FormControl>
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Continue
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="contained"
              fullWidth
              color="secondary"
              onClick={() => {
                router.push("/shipping");
              }}
            >
              Back
            </Button>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}

export default Payment;
