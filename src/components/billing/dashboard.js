import React from "react";
import BillingForm from "./billing";
import SideNav from "./sideNav";
const Dashboard = () => {
  return (
    <>
      <div className="flex flex-row h-screen">
        <div className=" fixed top-0 left-0 bg-gray-700">
          <SideNav />
        </div>
        <div className="w-full bg-red-50 ml-[320px]">
          <BillingForm />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
