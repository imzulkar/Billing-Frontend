import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import myAxios from "../utils/myAxios";

const BillingForm = () => {
  //form data subission
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customer, setCustomer] = useState("");
  const [project, setProject] = useState("");
  const [projectName, setProjectName] = useState("");
  const [paymentPhase, setPaymentPhase] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [chequeNo, setChequeNo] = useState("");
  const [bankDetails, setBankDetails] = useState("");
  const [routeingNo, setRouteingNo] = useState("");
  const [serviceDes, setServiceDes] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [additionalExpense, setAdditionalExpense] = useState("");
  const [totalExpense, setTotalExpense] = useState("");

  const [projectOption, setProjectOption] = useState();

  const [invDate, setInvDate] = useState();
  const navigate = useNavigate();
  const addZero = (val) => {
    // var val = 0;
    if (val < 10) {
      // console.log(typeof val);
      return 0 + "" + val;
    }
    return val;
  };
  const getDate = () => {
    var today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();
    let date = `${year}-${addZero(month + 1)}-${addZero(day)}`;
    // console.log(date);

    return date;
  };

  const [formValues, setFormValues] = useState([
    { description: "", price: "", additional_expense: "", total: "" },
  ]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
    // console.log(formValues);
  };

  let addFormFields = () => {
    setFormValues([
      ...formValues,
      { description: "", price: "", additional_expense: "", total: "" },
    ]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  const Projects = (i, e) => {
    myAxios.get("bill/projects/").then((res) => {
      // console.log(res.data);
      setProjectOption(res.data);
    });
  };

  useEffect(() => {
    Projects();
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    const payload = {
      invoices: formValues,
      cus_name: customerName,
      inv_date: invDate,
      cus_address: customerAddress,
      payment_type: paymentType,
      payment_phase: paymentPhase,
      account_name: accountName,
      account_number: accountNo,
      check_number: chequeNo,
      bank_details: bankDetails,
      routing_number: routeingNo,
      project: project,
      project_name: projectName,
    };
    console.log(payload);
    // console.log(payload);
    myAxios
      .post("bill/invoices/", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        // console.log(res);
        Swal.fire(
          "success",
          "You have genereted Invoice successfully",
          "success"
        );
        navigate("/dashboard");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data,
        });
        console.log(err.response.data);
      });
  };

  return (
    <>
      <div className="m-3">
        <div className="billing-form-header w-max m-6 mx-auto">
          <h3 className="text-4xl font-bold capitalize underline">
            Invoicing Form
          </h3>
        </div>

        <div className="billing-form ">
          <form onSubmit={onSubmit}>
            <div className="customer-info">
              <div className="flex flex-row justify-evenly  mx-auto">
                <div className="w-[45%] ">
                  {/* customer information section */}

                  <div className="form-control mb-2">
                    {/* invoice date */}
                    <label className="input-group ">
                      <span
                        style={{
                          width: "25%",
                          textAlign: "center",
                        }}
                      >
                        Invoice Date
                      </span>
                      <input
                        type="date"
                        defaultValue={invDate}
                        onClick={(e) => {
                          if (e.target.value === "") {
                            e.target.value = getDate();
                          }
                        }}
                        onChange={(e) => {
                          console.log(e.target.value);
                          setInvDate(e.target.value);
                        }}
                        className="input input-bordered"
                        style={{
                          width: "75%",
                        }}
                      />
                    </label>
                  </div>

                  <div className="form-control mb-2">
                    {/* customer name */}
                    <label className="input-group">
                      <span
                        style={{
                          width: "25%",
                          textAlign: "center",
                        }}
                      >
                        Customer Name
                      </span>
                      <input
                        type="text"
                        placeholder="Customer Name"
                        className="input input-bordered"
                        onChange={(e) => setCustomerName(e.target.value)}
                        style={{
                          width: "75%",
                        }}
                      />
                    </label>
                  </div>
                  <div className="form-control  mb-2">
                    {/* customer Addresss */}
                    <label className="input-group">
                      <span
                        style={{
                          width: "25%",
                          textAlign: "center",
                        }}
                      >
                        Customer Addresss
                      </span>
                      <textarea
                        className="textarea textarea-bordered text-[16px]"
                        placeholder="Customer Address"
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        style={{
                          width: "75%",
                        }}
                      ></textarea>
                    </label>
                  </div>

                  <div className="form-control  mb-2">
                    {/* Account Number */}
                    <label className="input-group">
                      <span
                        style={{
                          width: "25%",
                          textAlign: "center",
                        }}
                      >
                        Project
                      </span>
                      <select
                        className="select select-bordered"
                        onChange={(e) => {
                          setProject(e.target.value);
                        }}
                        style={{
                          width: "75%",
                        }}
                      >
                        <option disabled selected>
                          Select Project
                        </option>
                        {projectOption?.map((e, key) => {
                          return <option value={e.id}>{e.project_name}</option>;
                        })}
                      </select>
                    </label>
                  </div>

                  <div className="form-control mb-2">
                    {/* project name */}
                    <label className="input-group">
                      <span
                        style={{
                          width: "25%",
                          textAlign: "center",
                        }}
                      >
                        Project Name
                      </span>
                      <input
                        type="text"
                        placeholder="Project Name"
                        className="input input-bordered"
                        onChange={(e) => setProjectName(e.target.value)}
                        style={{
                          width: "75%",
                        }}
                      />
                    </label>
                  </div>

                  <div className="form-control mb-2">
                    {/* project Phase */}
                    <label className="input-group">
                      <span
                        style={{
                          width: "25%",
                          textAlign: "center",
                        }}
                      >
                        Payment Phase
                      </span>
                      <input
                        type="text"
                        placeholder="Payment Phase"
                        className="input input-bordered"
                        onChange={(e) => setPaymentPhase(e.target.value)}
                        style={{
                          width: "75%",
                        }}
                      />
                    </label>
                  </div>
                </div>
                <div className="w-[45%]">
                  {/* payment method */}

                  <div className="form-control  mb-2">
                    {/* Account Number */}
                    <label className="input-group">
                      <span
                        style={{
                          width: "25%",
                          textAlign: "center",
                        }}
                      >
                        Payment Type
                      </span>
                      <select
                        className="select select-bordered"
                        onChange={(e) => {
                          setPaymentType(e.target.value);
                        }}
                        style={{
                          width: "75%",
                        }}
                      >
                        <option disabled selected>
                          Payment Type
                        </option>
                        <option value={"cash"}>Cash</option>
                        <option value={"cheque"}>Cheque</option>
                        <option value={"bank"}>Bank</option>
                      </select>
                    </label>
                  </div>

                  <div className="form-control mb-2">
                    {/* Account Name */}
                    <label className="input-group">
                      <span
                        style={{
                          width: "25%",
                          textAlign: "center",
                        }}
                      >
                        Account Name
                      </span>
                      <input
                        type="text"
                        placeholder="Account Name"
                        className="input input-bordered"
                        onChange={(e) => setAccountName(e.target.value)}
                        style={{
                          width: "75%",
                        }}
                      />
                    </label>
                  </div>
                  <div className="form-control mb-2">
                    {/* Account Number */}
                    <label className="input-group">
                      <span
                        style={{
                          width: "25%",
                          textAlign: "center",
                        }}
                      >
                        Account Number
                      </span>
                      <input
                        type="text"
                        placeholder="Account Number"
                        className="input input-bordered"
                        onChange={(e) => setAccountNo(e.target.value)}
                        style={{
                          width: "75%",
                        }}
                      />
                    </label>
                  </div>

                  <div className="form-control mb-2">
                    {/* Check Number */}
                    <label className="input-group">
                      <span
                        style={{
                          width: "25%",
                          textAlign: "center",
                        }}
                      >
                        Cheque Number
                      </span>
                      <input
                        type="text"
                        placeholder="Cheque Number"
                        className="input input-bordered"
                        onChange={(e) => setChequeNo(e.target.value)}
                        style={{
                          width: "75%",
                        }}
                      />
                    </label>
                  </div>

                  <div className="form-control mb-2">
                    {/* Bank Details */}
                    <label className="input-group">
                      <span
                        style={{
                          width: "25%",
                          textAlign: "center",
                        }}
                      >
                        {" "}
                        Bank Details
                      </span>
                      <input
                        type="text"
                        placeholder=" Bank Details"
                        className="input input-bordered"
                        onChange={(e) => setBankDetails(e.target.value)}
                        style={{
                          width: "75%",
                        }}
                      />
                    </label>
                  </div>
                  <div className="form-control mb-2">
                    {/* Routing Number */}
                    <label className="input-group">
                      <span
                        style={{
                          width: "25%",
                          textAlign: "center",
                        }}
                      >
                        Routing Number
                      </span>
                      <input
                        type="text"
                        placeholder=" Routing Number"
                        className="input input-bordered"
                        onChange={(e) => setRouteingNo(e.target.value)}
                        style={{
                          width: "75%",
                        }}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {/* <AddRemoveInputField /> */}
              {/* <AddRemoveInputField /> */}
              {formValues.map((element, index) => (
                <div className="form-inline" key={index}>
                  <div className="grid grid-cols-12 gap-3 my-2">
                    <div className="form-control col-span-5">
                      <label className="input-group input-group-vertical">
                        <span>Description</span>
                        <input
                          type="text"
                          placeholder="Description Of the service"
                          className="input input-bordered"
                          onChange={(evnt) => handleChange(index, evnt)}
                          value={element.description || ""}
                          name="description"
                        />
                      </label>
                    </div>

                    <div className="form-control col-span-2">
                      <label className="input-group input-group-vertical">
                        <span>Price</span>
                        <input
                          type="number"
                          placeholder="Price"
                          className="input input-bordered"
                          onChange={(evnt) => handleChange(index, evnt)}
                          value={element.price || ""}
                          name="price"
                        />
                      </label>
                    </div>
                    <div className="form-control col-span-2">
                      <label className="input-group input-group-vertical">
                        <span>Additional Price</span>
                        <input
                          type="number"
                          placeholder="Additional Price"
                          className="input input-bordered"
                          onChange={(evnt) => handleChange(index, evnt)}
                          value={element.additional_expense || ""}
                          name="additional_expense"
                        />
                      </label>
                    </div>
                    <div className="form-control col-span-2">
                      <label className="input-group input-group-vertical">
                        <span>Total</span>
                        <input
                          type="number"
                          placeholder="Total"
                          className="input input-bordered"
                          onChange={(evnt) => handleChange(index, evnt)}
                          value={element.total || ""}
                          name="total"
                        />
                      </label>
                    </div>

                    {index ? (
                      <div className="w-max h-max m-auto">
                        {/* <button
                  type="button"
                  className="btn btn-danger "
                  onClick={() => removeFormFields(index)}
                >
                  Remove
                </button> */}

                        <button
                          class="btn btn-outline btn-error"
                          type="button"
                          onClick={() => removeFormFields(index)}
                        >
                          Remove
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
              <div className="button-section flex justify-end mr-[8%]">
                <div>
                  <button
                    class="btn btn-outline btn-primary"
                    type="button"
                    onClick={() => addFormFields()}
                  >
                    Add New
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="btn btn-primary px-8" id="invoice_btn">
                  Generate Invoice
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BillingForm;
