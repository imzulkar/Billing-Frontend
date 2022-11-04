import React, { useEffect, useState } from "react";
import myAxios from "../utils/myAxios";

const BillingList = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    myAxios
      .get("bill/invoices/")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

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
      {/* <div className="w-[500px] h-[500px] bg-red-300" id="printArea"></div>
      <div>
        <button onClick={PrintArea}>print</button>
      </div> */}

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {data.length &&
              data.map((item) => {
                return (
                  <tr className="hover">
                    <th>{item.id}</th>
                    <td>{item.cus_name}</td>
                    <td>{item.payment_type}</td>
                    <td>Purple</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <div className="">
        {data.length &&
          data.map((item) => {
            return <p>{item?.id}</p>;
          })}
      </div>
    </>
  );
};

export default BillingList;
