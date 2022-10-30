import React, { useState } from "react";
// import "./styles.css";

const AddRemoveInputFieldTwo = () => {
  const [formValues, setFormValues] = useState([
    { description: "", price: "", additionalPrice: "", totalPrice: "" },
  ]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([
      ...formValues,
      { description: "", price: "", additionalPrice: "", totalPrice: "" },
    ]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  return (
    <form onSubmit={handleSubmit}>
      {formValues.map((element, index) => (
        <div className="form-inline" key={index}>
          <div className="grid grid-cols-12 gap-3 my-2">
            <div className="form-control col-span-5">
              <label className="input-group input-group-vertical">
                <span>Description</span>
                <input
                  type="text"
                  placeholder="Total"
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
                  type="text"
                  placeholder="price"
                  className="input input-bordered"
                  onChange={(evnt) => handleChange(index, evnt)}
                  value={element.price || ""}
                  name="description"
                />
              </label>
            </div>
            <div className="form-control col-span-2">
              <label className="input-group input-group-vertical">
                <span>Additional Price</span>
                <input
                  type="text"
                  placeholder="Additional Price"
                  className="input input-bordered"
                  onChange={(evnt) => handleChange(index, evnt)}
                  value={element.additionalPrice || ""}
                  name="description"
                />
              </label>
            </div>
            <div className="form-control col-span-2">
              <label className="input-group input-group-vertical">
                <span>Total</span>
                <input
                  type="text"
                  placeholder="Total"
                  className="input input-bordered"
                  onChange={(evnt) => handleChange(index, evnt)}
                  value={element.totalPrice || ""}
                  name="description"
                />
              </label>
            </div>

            {index ? (
              <div className="w-max h-max m-auto">
                <button
                  type="button"
                  className="btn btn-danger "
                  onClick={() => removeFormFields(index)}
                >
                  Remove
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ))}
      <div className="button-section">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => addFormFields()}
        >
          Add New
        </button>
      </div>
    </form>
  );
};

export default AddRemoveInputFieldTwo;
