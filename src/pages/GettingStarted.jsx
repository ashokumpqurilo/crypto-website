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
import Header from "../home/Header";

const GettingStarted = () => {
  return (
    <>
    {/* <Headerdocument /> */}
    <div className="w-full flex h-full">
    <Header/>

      <GettingStartedSidebar />
      <main className="flex-1 ml-64 mr-64">
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
