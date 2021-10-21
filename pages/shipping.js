import { useRouter } from "next/router";
import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";

function Shipping(props) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  if (!userInfo) {
     router.push("/login?redirect=/shipping");
  }
  return <Layout title="shipping"> Shipping</Layout>;
}

export default Shipping;