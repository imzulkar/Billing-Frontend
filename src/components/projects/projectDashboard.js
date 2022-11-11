import SideNav from "../billing/sideNav";
import ProjectAdd from "./projects";

const ProjectDashboard = () => {
  return (
    <>
      <div className="flex flex-row h-screen">
        <div className=" fixed top-0 left-0 bg-gray-700">
          <SideNav />
        </div>
        <div className="w-full bg-red-50 ml-[320px]">
          <ProjectAdd />
        </div>
      </div>
    </>
  );
};

export default ProjectDashboard;
