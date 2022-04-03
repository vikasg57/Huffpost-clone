import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { ProfilePage } from "../ProfilePage/ProfilePage";
import { PageNotFound } from "../PageNotFound/PageNotFound";

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
          path="/entry/:id"
          element={  <MasterComponent><Home/></MasterComponent>  }
        />

        <Route
          path="/member"
          element={  <MasterComponent><ProfilePage/></MasterComponent>  }
        />

        <Route path="/login" element={<Login />} />

        <Route
          path="*"
          element={<MasterComponent><PageNotFound/></MasterComponent>}
        />
        
      </Routes>
    </>
  );
};
