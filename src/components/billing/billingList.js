import React, { useEffect, useState } from "react";
import myAxios from "../utils/axios";

const Forums = () => {
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

  return (
    <div className="">
      {data.length &&
        data.map((item) => {
          return <p>{item?.id}</p>;
        })}
    </div>
  );
};

export default Forums;
