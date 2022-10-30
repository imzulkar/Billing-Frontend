import { useState } from "react";
function AddRemoveInputField() {
  const [inputFields, setInputFields] = useState([
    {
      description: "",
      price: "",
      addition: "",
      total: "",
    },
  ]);

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        description: "",
        price: "",
        addition: "",
        total: "",
      },
    ]);
  };
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };
  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };
  return (
    <div className="container mx-auto my-5">
      <div className="">
        {inputFields.map((data, index) => {
          const { description, price, addition, total } = data;
          return (
            <div className="my-3" key={index}>
              <div className="grid grid-cols-9 gap-3">
                <div className="form-control col-span-2">
                  <label className="input-group input-group-vertical">
                    <span>Description</span>
                    <input
                      type="text"
                      placeholder="Total"
                      className="input input-bordered"
                      onChange={(evnt) => handleChange(index, evnt)}
                      value={description}
                      name="description"
                    />
                  </label>
                </div>

                <div className="form-control  col-span-2">
                  <label className="input-group input-group-vertical">
                    <span>Price</span>
                    <input
                      type="text"
                      placeholder="price"
                      className="input input-bordered"
                      onChange={(evnt) => handleChange(index, evnt)}
                      value={price}
                      name="description"
                    />
                  </label>
                </div>
                <div className="form-control  col-span-2">
                  <label className="input-group input-group-vertical">
                    <span>Additional Price</span>
                    <input
                      type="text"
                      placeholder="Additional Price"
                      className="input input-bordered"
                      onChange={(evnt) => handleChange(index, evnt)}
                      value={addition}
                      name="description"
                    />
                  </label>
                </div>
                <div className="form-control  col-span-2">
                  <label className="input-group input-group-vertical">
                    <span>Total</span>
                    <input
                      type="text"
                      placeholder="Total"
                      className="input input-bordered"
                      onChange={(evnt) => handleChange(index, evnt)}
                      value={total}
                      name="description"
                    />
                  </label>
                </div>

                <div className="w-max h-max my-auto mx-auto">
                  {inputFields.length !== 1 ? (
                    <button
                      className="btn btn-outline-danger"
                      onClick={removeInputFields}
                    >
                      x
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          );
        })}

        <div className="felx">
          <div className="">
            <button
              className="btn btn-outline-success "
              onClick={addInputField}
            >
              Add New
            </button>
          </div>
        </div>
      </div>
      <div className="col-sm-4"></div>
    </div>
  );
}
export default AddRemoveInputField;
