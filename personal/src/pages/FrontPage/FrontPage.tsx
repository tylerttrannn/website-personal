import image from "../../assets/images/profile.jpeg";
import github from "../../assets/images/github.jpeg";
import linkedin from "../../assets/images/linkedin.jpg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import FrontPageMobile from "./FrontPageMobile";

function FrontPage() {
  const navigate = useNavigate();

  return (
    <div>


      <div className = "hidden md:flex">
        <FrontPageMobile/>
      </div>

      <div className="hidden lg:flex flex-row  max-w-6xl ">
        {/* Image Container */}
        <div className="max-w-2xl">
          <img src={image} className=" object-cover rounded-2xl" alt="Profile" />
        </div>

        {/* Content Container */}
        <div className="flex flex-col py-5 px-10 w-full">
          {/* Name + School and Major */}
          <div className="py-5">
            <h1 className="font-bold text-7xl">Tyler Tran</h1>
            <h2 className="text-3xl pt-5">CS @ UC Irvine</h2>
          </div>

          {/* Description */}
          <div>
            <p className="text-2xl">
              Avid CS Student with a passion for web and mobile development
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-row mt-5 items-center space-x-10">
            <div className="flex flex-row space-x-8">
              <Button variant="ghost" onClick={() => navigate("/experience")}>
                Experience
              </Button>
              <Button variant="ghost" onClick={() => navigate("/projects")}>
                Projects
              </Button>
              <Button variant="ghost" onClick={() => navigate("/resume")}>
                Resume
              </Button>
            </div>

            {/* Github, LinkedIn Buttons */}
            <div className="flex flex-row space-x-5">
              <Button variant="ghost" asChild>
                <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                  <img src={github} className="w-10 h-10 object-contain" alt="GitHub" />
                </a>
              </Button>

              <Button variant="ghost" asChild>
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} className="w-10 h-10 object-contain" alt="LinkedIn" />
                </a>
              </Button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default FrontPage;
