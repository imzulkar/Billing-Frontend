import { useState } from "react";
import AddRemoveInputField from "./billingItem";

const BillingForm = () => {
  const [date, setDate] = useState();

  const getDate = () => {
    var today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();
    let date = `${year}-${month + 1}-${day}`;
    console.log(date);
    setDate(date);
    return date;
  };

  const HandelBill = (event) => {
    event.preventDefault();
    alert(JSON.stringify(this.state.formValues));
  };
  return (
    <>
      <div className="m-3">
        <div className="billing-form-header w-max m-6 mx-auto">
          <h3 className="text-4xl font-bold capitalize underline">
            Billing Form
          </h3>
        </div>

        <div className="billing-form ">
          <form onSubmit={() => HandelBill}>
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
                        defaultValue={date}
                        onClick={(e) => {
                          if (e.target.value === "") {
                            e.target.value = getDate();
                          }
                        }}
                        onChange={(e) => {
                          setDate(e.target.value);
                          console.log(date);
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
                        style={{
                          width: "75%",
                        }}
                      ></textarea>
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
                        Project Phase
                      </span>
                      <input
                        type="text"
                        placeholder="Project Phase"
                        className="input input-bordered"
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
                        style={{
                          width: "75%",
                        }}
                      >
                        <option disabled selected>
                          Payment Type
                        </option>
                        <option>Cash</option>
                        <option>Cheque</option>
                        <option>Bank</option>
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
                        Check Number
                      </span>
                      <input
                        type="text"
                        placeholder="Cheque Number"
                        className="input input-bordered"
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
                        {" "}
                        Routing Number
                      </span>
                      <input
                        type="text"
                        placeholder=" Routing Number"
                        className="input input-bordered"
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
              <AddRemoveInputField />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BillingForm;
