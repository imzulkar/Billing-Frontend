import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../../resources/logo.png";
import myAxios from "../utils/myAxios";
import SideNav from "./sideNav";

const BillingList = () => {
  const params = useParams();
  const [invId, setInvId] = useState(0);
  const [data, setData] = useState([]);
  const [invoice, setInvoice] = useState();
  const [isSet, setIsSet] = useState(false);
  const getData = () => {
    myAxios
      .get("bill/invoices/")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        if (isSet) {
          setInvId(res.data.id);
          setIsSet(true);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    myAxios.get(`bill/invoices/${invId}/`).then((res) => {
      // console.log(res);
      setInvoice(res.data);
    });
  }, [invId]);

  const PrintArea = () => {
    //console.log('print');
    let printContents = document.getElementById("printArea").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };
  return (
    <>
      <div className="flex flex-row h-screen">
        <div className=" fixed top-0 left-0 bg-gray-700">
          <SideNav />
        </div>
        <div className="w-full bg-red-50 ml-[320px]">
          <div className="overflow-x-auto m-4">
            <table className="table w-full">
              <thead>
                <tr className="text-left">
                  <th>Invoices No</th>
                  <th>Customer Name</th>
                  <th>Project Name</th>
                  <th>Payment Type</th>
                  <th className="text-center">view Details</th>
                </tr>
              </thead>
              <tbody>
                {data.length &&
                  data.map((item) => {
                    return (
                      <tr className="hover">
                        <th>{item.id}</th>
                        <td>{item.cus_name}</td>
                        <td>{item.project_name}</td>
                        <td>{item.payment_type}</td>
                        <td className="text-center">
                          {/* <link> */}
                          {/* <Link to={"/peram/" + item.id}> */}
                          {/* <FontAwesomeIcon icon={faFile} /> */}
                          <label
                            htmlFor="my-modal-3"
                            className="btn"
                            id={item.id}
                            onClick={(e) => {
                              // console.log(e.target.id);
                              setInvId(e.target.id);
                            }}
                          >
                            <FontAwesomeIcon icon={faFile} />
                          </label>
                          {/* </Link> */}

                          {/* </link> */}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* modal section for the inv info */}

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal overflow-y-scroll  ">
        <div className="modal-box max-w-none w-max bg-white relative rounded-xl">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="w-[764px] border-b ">
            {/* All info */}
            <div className="header-section flex">
              <div className="px-4 w-1/2 flex flex-col">
                <img src={logo} alt="" />
                <div className="overflow-x-auto ">
                  <table className="table-fixed border">
                    <thead className="text-left ">
                      <tr>
                        <th className="bg-base-dark-color text-white px-3 py-1">
                          Invoice No:
                        </th>
                        <th className="px-2">{invoice?.inv_no}</th>
                      </tr>
                      <tr>
                        <th className="bg-base-dark-color text-white  px-3 py-1">
                          Date:
                        </th>
                        <th className="px-2">{invoice?.inv_date}</th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
              <div className="text-center w-1/2 flex justify-center items-center">
                <h2 className="font-bold text-5xl">Billing Form</h2>
              </div>
            </div>

            <div className="form-info-section">
              <div className="rounded-t-xl overflow-hidden m-2">
                <table className="table-fixed">
                  <thead>
                    <tr className="bg-base-dark-color text-white text-left">
                      <th className="px-4 py-2 w-[20%] ">Invoice To</th>
                      <th className="px-4 py-2 w-[35%]"></th>
                      <th className="px-4 py-2 w-[25%]">Payment Details</th>
                      <th className="px-4 py-2 w-[20%]"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td className="border  px-4 py-2  font-medium">Name</td>
                      <td className="border  px-4 py-2  font-medium">
                        {invoice?.cus_name}
                      </td>
                      <td className="border  px-4 py-2  font-medium">
                        Payment Type
                      </td>
                      <td className="border  px-4 py-2  font-medium">
                        {invoice?.payment_type}
                      </td>
                    </tr>
                    <tr className="">
                      <td className="border  px-4 py-2  font-medium">
                        Project Name
                      </td>
                      <td className="border  px-4 py-2  font-medium">
                        {invoice?.project_name}
                      </td>
                      <td className="border  px-4 py-2  font-medium">
                        Bank Details
                      </td>
                      <td className="border  px-4 py-2  font-medium">
                        {invoice?.bank_details}
                      </td>
                    </tr>
                    <tr className="">
                      <td className="border  px-4 py-2  font-medium">
                        Project Id
                      </td>
                      <td className="border  px-4 py-2  font-medium">
                        {invoice?.project}
                      </td>
                      <td className="border  px-4 py-2  font-medium">
                        Account/Cheque Number
                      </td>
                      <td className="border  px-4 py-2  font-medium">
                        {invoice?.check_number}
                      </td>
                    </tr>
                    <tr className="">
                      <td className="border  px-4 py-2  font-medium">
                        Payment Phase
                      </td>
                      <td className="border  px-4 py-2  font-medium">
                        {invoice?.payment_phase}
                      </td>
                      <td className="border  px-4 py-2  font-medium">
                        Routing/Swif No
                      </td>
                      <td className="border  px-4 py-2  font-medium">
                        {invoice?.routing_number}
                      </td>
                    </tr>
                    <tr className="">
                      <td className="border  px-4 py-2  font-medium">
                        Address
                      </td>
                      <td className="border  px-4 py-2  font-medium">
                        {invoice?.cus_name}
                      </td>
                      <td className="border  px-4 py-2  font-medium"></td>
                      <td className="border  px-4 py-2  font-medium"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="form-item-section min-h-[300px] my-4 mx-2">
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr className="">
                      <th className="bg-base-dark-color w-3/6">
                        Description of the Services
                      </th>
                      <th className="bg-base-dark-color w-1/6"> Price</th>
                      <th className="bg-base-dark-color w-1/6">
                        Additional Expenses
                      </th>
                      <th className="bg-base-dark-color w-1/6">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoice?.invoices?.map((e, i) => {
                      return (
                        <tr>
                          <td>{e?.description}</td>
                          <td>{e?.price}</td>
                          <td>{e?.additional_expense}</td>
                          <td>{e?.total}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <button className="btn btn-warning">Print</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingList;
