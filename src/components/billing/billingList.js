import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../../resources/logo.png";
import inWords from "../utils/helper";
import myAxios from "../utils/myAxios";
import SideNav from "./sideNav";

const BillingList = () => {
  const params = useParams();
  const [invId, setInvId] = useState(0);
  const [data, setData] = useState([]);
  const [invoice, setInvoice] = useState();
  const [isSet, setIsSet] = useState(false);
  const [isOpen, setisOpen] = useState(false);

  const getData = () => {
    myAxios
      .get("bill/invoices/")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        if (isSet === false) {
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

  // const getInvoiceData = (inv) => {
  //   myAxios.get(`bill/invoices/${inv}/`).then((res) => {
  //     // console.log(res);
  //     setInvoice(res.data);
  //   });
  // };
  useEffect(() => {
    myAxios.get(`bill/invoices/${invId}/`).then((res) => {
      // console.log(res);
      setInvoice(res.data);
    });
  }, [invId]);

  useEffect(() => {
    if (isOpen === true) {
      let area = document.getElementById("remove-area");
      area.classList.add("flex");
      area.classList.remove("hidden");
    } else {
      let area = document.getElementById("remove-area");
      area.classList.remove("flex");
      area.classList.add("hidden");
    }
  }, [isOpen]);
  window.onbeforeunload = () => {
    let area = document.getElementById("remove-area");
    area.classList.add("flex");
    area.classList.remove("hidden");
    // window.print();
  };
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
                        <td data-id={item.id}>
                          <label
                            htmlFor="my-modal-3"
                            className="btn"
                            id="invoiceId"
                            onClick={(e) => {
                              setisOpen(true);
                              setInvId(
                                e.target.parentElement.getAttribute("data-id")
                              );
                            }}
                          >
                            {/* <FontAwesomeIcon icon={faFile} /> */}
                            details
                          </label>
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
            onClick={() => {
              setisOpen(false);
            }}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="w-[764px] border-b ">
            {/* All info */}
            <div className="header-section flex min-h-[150px] overflow-hidden">
              <div className="px-4 w-1/2 flex flex-col">
                <img src={logo} alt="" width={"200px"} height={"100px"} />
                <div className="overflow-x-auto ">
                  <table className="table-fixed border">
                    <thead className="text-left ">
                      <tr>
                        <th className="bg-base-dark-color text-white px-3 py-0">
                          Invoice No:
                        </th>
                        <th className="px-2 ">{invoice?.inv_no}</th>
                      </tr>
                      <tr>
                        <th className="bg-base-dark-color text-white  px-3 py-0">
                          Date:
                        </th>
                        <th className="px-2 py-0">{invoice?.inv_date}</th>
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
                      <th className="px-4 py-1 w-[20%] ">Invoice To</th>
                      <th className="px-4 py-1 w-[35%]"></th>
                      <th className="px-4 py-1 w-[25%]">Payment Details</th>
                      <th className="px-4 py-1 w-[20%]"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td className="border  px-4 py-0  font-medium">Name</td>
                      <td className="border  px-4 py-0  font-medium">
                        {invoice?.cus_name}
                      </td>
                      <td className="border  px-4 py-0  font-medium">
                        Payment Type
                      </td>
                      <td className="border  px-4 py-0  font-medium">
                        {invoice?.payment_type}
                      </td>
                    </tr>
                    <tr className="">
                      <td className="border  px-4 py-0  font-medium">
                        Project Name
                      </td>
                      <td className="border  px-4 py-0  font-medium">
                        {invoice?.project_name}
                      </td>
                      <td className="border  px-4 py-0  font-medium">
                        Bank Details
                      </td>
                      <td className="border  px-4 py-0  font-medium">
                        {invoice?.bank_details}
                      </td>
                    </tr>
                    <tr className="">
                      <td className="border  px-4 py-0  font-medium">
                        Project Id
                      </td>
                      <td className="border  px-4 py-0  font-medium">
                        {invoice?.project}
                      </td>
                      <td className="border  px-4 py-0  font-medium">
                        Account/Cheque Number
                      </td>
                      <td className="border  px-4 py-0  font-medium">
                        {invoice?.check_number}
                      </td>
                    </tr>
                    <tr className="">
                      <td className="border  px-4 py-0  font-medium">
                        Payment Phase
                      </td>
                      <td className="border  px-4 py-0  font-medium">
                        {invoice?.payment_phase}
                      </td>
                      <td className="border  px-4 py-0  font-medium">
                        Routing/Swif No
                      </td>
                      <td className="border  px-4 py-0  font-medium">
                        {invoice?.routing_number}
                      </td>
                    </tr>
                    <tr className="">
                      <td className="border  px-4 py-0  font-medium">
                        Address
                      </td>
                      <td className="border  px-4 py-0  font-medium">
                        {invoice?.cus_name}
                      </td>
                      <td className="border  px-4 py-0  font-medium"></td>
                      <td className="border  px-4 py-0  font-medium"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="form-item-section min-h-[150px] my-4 mx-2">
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead className="text-white">
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
                          <td className="py-0">{e?.description}</td>
                          <td className="py-0">{e?.price}</td>
                          <td className="py-0">{e?.additional_expense}</td>
                          <td className="py-0">{e?.total}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className="w-full">
              <div className="overflow-x-auto">
                <table className="table w-full ">
                  <thead>
                    <tr className="text-white">
                      <th className="text-center bg-base-dark-color w-1/2 py-0">
                        Notes
                      </th>
                      <th className="bg-gray-700 w-1/2 py-3 "></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td>
                        <table className="w-full">
                          <tr>
                            <th className="p-0 m-0">Sub Total</th>
                            <td className="p-0 m-0">1200</td>
                          </tr>
                          <tr>
                            <th className="p-0 m-0">Vat</th>
                            <td className="p-0 m-0">10</td>
                          </tr>
                          <tr>
                            <th className="p-0 m-0">Grand Total</th>
                            <td className="p-0 m-0">{invoice?.total_amount}</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <p>
                  <strong>In Words: </strong>
                  {inWords(invoice ? invoice.total_amount : "0")}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-14 text-center mx-10">
            <div className="authorization1 w-max ">
              <hr />
              <p>Anik Tapader</p>
              <p>Associate (Accounts)</p>
            </div>
            <div className="authorization2">
              <hr />
              <p>Md. Zakaria Hassan</p>
              <p>Director (Finance)</p>
            </div>
          </div>

          <div className="flex w-[764px] mt-5">
            <div className="w-1/2">
              <p>
                <strong>Office Address:</strong>
                1st Floor, Building No- 02, 15, New Baily Road, 05, Siddheswari
                Circular Road (Present), Dhaka- 1217
              </p>
            </div>
            <div className="w-1/2">
              <p>
                <strong>Contact Details:</strong>
                Email: business@prc-bd.com
              </p>
            </div>
          </div>

          <div className="flex justify-center my-4 " id="remove-area">
            <button
              className="btn btn-warning"
              onClick={() => {
                let area = document.getElementById("remove-area");
                area.classList.remove("flex");
                area.classList.add("hidden");
                window.print();
              }}
            >
              Print
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingList;
