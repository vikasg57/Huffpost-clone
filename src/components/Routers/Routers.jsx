import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { ProfilePage } from "../ProfilePage/ProfilePage";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { useState } from "react";

import {Login} from "../Login/Login"


import {MasterComponent} from "../MasterComponent/MasterComponent"

export const Routers = () => {

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={  <MasterComponent><Home/></MasterComponent>  }
        />

        <Route
          path="*"
          element={<MasterComponent><PageNotFound/></MasterComponent>}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
