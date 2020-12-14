/*
 * Copyright (c) 2020. Space Traders
 * Authors: Mikael Lazarev, Ivan Fedorov
 */

import React, {PropsWithChildren} from "react";
import AppBar from "../components/AppBar/AppBar";
import {Footer} from "../components/Footer/Footer";

export function Layout({children}: PropsWithChildren<any>) : React.ReactElement {
  return (
    <>
      <AppBar />
      {children}
      <Footer />
    </>
  );
}
