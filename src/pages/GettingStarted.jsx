import React from "react";
import GettingStartedSidebar from "../components/Layout/GettingStartedSidebar";
import GettingStartedRightSidebar from "../components/Layout/GettingStartedRightSidebar";
import IntroSection from "../components/getStart/GettiingStarted/IntroSection";
import Script from "../components/getStart/GettiingStarted/Script";
import Requirements from "../components/getStart/GettiingStarted/Requirements";
import EnvironmentVariables from "../components/getStart/GettiingStarted/EnvironmentVariables";
import ExecuteAnAgent from "../components/getStart/GettiingStarted/ExecuteAnAgent";
import Scheduled from "../components/getStart/GettiingStarted/Scheduled";
import Manual from "../components/getStart/GettiingStarted/Manual";
import Request from "../components/getStart/GettiingStarted/Request";
import Payload from "../components/getStart/GettiingStarted/Payload";
import Logging from "../components/getStart/GettiingStarted/Logging";
import ReturnValueSection from "../components/getStart/GettiingStarted/ReturnValueSection";
import Headerdocument from "../common/Headerdocument";
import Header from "../components/Layout/Header";

const GettingStarted = () => {
  return (
    <>
    {/* <Headerdocument /> */}
      <Header/>
    <div className="w-full flex h-full">
      <GettingStartedSidebar />
      <main className="flex-1 lg:ml-64 lg:mr-64 w-full  lg:w-auto">
        <IntroSection />
        <Script />
        <Requirements />
        <EnvironmentVariables />
        <ExecuteAnAgent />
        <Scheduled />
        <Manual />
        <Request />
        <Payload />
        <Logging />
        <ReturnValueSection />
      </main>
      <GettingStartedRightSidebar />
    </div>
    </>
  );
};

export default GettingStarted;
