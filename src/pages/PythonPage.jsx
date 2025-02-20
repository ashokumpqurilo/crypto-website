import React from "react";
import { useLocation } from "react-router-dom";
import Introduction from "../pythonsdk/Introduction/introduction";
import Authentication from "../pythonsdk/Authentication/authentication";
import Pagination from "../pythonsdk/Pagination/Pagination";
import LeftSidebar from "../components/Layout/Python/LeftSidebar";
import Header from "../components/Layout/Header";

const PythonPage = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="">
      <Header />
      <div className="flex ">
        <LeftSidebar />
        <main className="flex-1  mr-64">
          {(path === "/python-sdk/" || path === "/python-sdk") && (
            <Introduction />
          )}
          {(path === "/python-sdk/authentication" ||
            path === "/python-sdk/authentication/") && <Authentication />}
          {(path === "/python-sdk/pagination" ||
            path === "/python-sdk/pagination/") && <Pagination />}
        </main>
        {/* <RightSidebar /> */}
      </div>
    </div>
  );
};

export default PythonPage;
