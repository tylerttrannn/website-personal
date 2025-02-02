import image from "../images/profile.jpeg";
import github from "../images/github.jpeg";
import linkedin from "../images/linkedin.jpg";
import { useNavigate } from "react-router-dom";

function FrontPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row min-w-8xl max-w-8xl bg-red-00">
      {/* Image Container */}
      <div className=" bg-green-100">
        <img src={image} className="w-120 h-90 object-cover rounded-2xl" alt="Profile" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col bg-grey-100 py-5 px-10 w-full bg-green-200 ">
        {/* Name + School and Major */}
        <div className ="py-5">
          <h1 className="font-bold text-7xl">Tyler Tran</h1>
          <h2 className="text-3xl pt-5">CS & Informatics @ UC Irvine</h2>
        </div>

        {/* Description */}
        <div className="">
          <p className="text-2xl">
            Avid CS Student with a passion for web and mobile developemnt
          </p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-row mt-5 items-center space-x-10">
          <div className="flex flex-row space-x-8">
            <h1 className="text-2xl cursor-pointer hover:underline" onClick={() => navigate("/experience")}>
              Experience
            </h1>
            <h1 className="text-2xl cursor-pointer hover:underline" onClick={() => navigate("/projects")}>
              Projects
            </h1>
            <h1 className="text-2xl cursor-pointer hover:underline" onClick={() => navigate("/resume")}>
              Resume
            </h1>
          </div>
      
          {/* Github, Linkedin Etc */}
          <div className = "flex flex-row space-x-5">
            <img src = {github}></img>
            <img src = {linkedin}></img>
            <img src = {linkedin}></img>

            <img></img>
          </div>

        </div>
  
      </div>
    </div>
  );
}

export default FrontPage;
