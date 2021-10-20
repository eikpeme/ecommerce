import React from "react";
import Head from "next/head";
import useStyles from "../utils/styles";
import NextLink from "next/link";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link,
} from "@material-ui/core";

const Layout = ({ title, children, description }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>
          {title ? `${title} -  Next Ecommerce` : "Next Ecommerce "}
        </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}> Ecommerce </Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login </Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved, Next Amazona.</Typography>
      </footer>
    </div>
  );
};

export default Layout;
