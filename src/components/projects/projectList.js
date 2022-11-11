import React, { useEffect, useState } from "react";
import SideNav from "../billing/sideNav";
import myAxios from "../utils/myAxios";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [count, setCount] = useState(0);

  const getData = () => {
    myAxios
      .get("bill/projects/")
      .then((res) => {
        console.log(res.data);
        setProjects(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);
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
                  <th>Sl No</th>
                  <th>Project Name</th>
                  <th>Project Code</th>
                  {/* <th className="text-center">view Details</th> */}
                </tr>
              </thead>
              <tbody>
                {projects.length &&
                  projects.map((item, index) => {
                    return (
                      // {setCount(count + 1);}
                      <tr className="hover">
                        <th>{index + 1}</th>
                        <td>{item?.project_name}</td>
                        <td>{item?.project_code}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectList;
