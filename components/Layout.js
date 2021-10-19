import React from "react";
import Head from "next/head";
import useStyles from "../utils/styles"
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

const Layout = ({ children }) => {
    const classes = useStyles()
  return (
    <div>
      <Head>
        <title> Next Ecommerce</title>
      </Head>
      <AppBar className={classes.navbar}position="static">
        <Toolbar>
          <Typography> Ecommerce </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
          <Typography>
              All rights reserved, Next Amazona.
          </Typography>
      </footer>
    </div>
  );
};

export default Layout;
