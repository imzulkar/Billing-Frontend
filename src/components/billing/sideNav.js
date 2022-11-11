import React from "react";
import { Link } from "react-router-dom";
const SideNav = () => {
  return (
    <>
      <div className="w-[320px] ">
        <div className="navbar-container">
          <div className="header-content text-center py-4 text-white">
            <h3 className="text-3xl  font-semibold ">Invoice Referencing</h3>
            <p>Project Research Consultency</p>
          </div>
          <div className="">
            <div className="drawer drawer-mobile ">
              <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content flex flex-col items-center justify-center">
                <label
                  for="my-drawer-2"
                  className="btn btn-primary drawer-button lg:hidden"
                >
                  Open drawer
                </label>
              </div>
              <div className="drawer-side ">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-gray-600 text-gray-200 ">
                  <li>
                    <Link to="/invoices">View Invoices</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Billing Form</Link>
                  </li>
                  <li>
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link to="/add-project">Add Project</Link>
                  </li>
                  {/* <li>
                    <Link to="">Debit Voucher</Link>
                  </li>
                  <li>
                    <Link to="">Credit Voucher</Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
