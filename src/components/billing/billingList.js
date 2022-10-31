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
      <div className="w-[500px] h-[500px] bg-red-300" id="printArea"></div>
      <div>
        <button onClick={PrintArea}>print</button>
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
