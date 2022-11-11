import { useState } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import myAxios from "../utils/myAxios";

const ProjectAdd = () => {
  const [projectName, setProjectName] = useState("");
  const [projectCode, setProjectCode] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      project_name: projectName,
      project_code: projectCode,
    };
    myAxios
      .post("bill/projects/", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        // console.log(res);
        Swal.fire("success", "Project Added successfully", "success");
        Navigate("/dashboard");
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
        <div className="project-form-header w-max m-6 mx-auto">
          <h3 className="text-4xl font-bold capitalize underline">
            Projects Update Form
          </h3>
        </div>

        <div className="billing-form ">
          <form onSubmit={onSubmit}>
            <div className="customer-info">
              <div className="flex flex-row justify-evenly  mx-auto">
                <div className="w-[45%] ">
                  {/* Project information section */}

                  <div className="form-control mb-2">
                    {/* Project name */}
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
                        placeholder="Customer Name"
                        className="input input-bordered"
                        onChange={(e) => setProjectName(e.target.value)}
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
                        Project Code
                      </span>
                      <textarea
                        className="textarea textarea-bordered text-[16px]"
                        placeholder="Project Code"
                        onChange={(e) => setProjectCode(e.target.value)}
                        style={{
                          width: "75%",
                        }}
                      ></textarea>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-center">
                <button className="btn btn-primary px-8" id="project">
                  Add Project
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProjectAdd;
