import { useParams } from "react-router-dom";

const Invoice = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <p>{params.invId}</p>
    </>
  );
};

export default Invoice;
