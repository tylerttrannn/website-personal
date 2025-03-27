import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

import image from "../../assets/images/profile.jpeg";
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";

import github from "../../assets/images/github.jpeg";
import linkedin from "../../assets/images/linkedin.jpg";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons"



{/* use absolute to put it exactly where you want it */}
export default function FrontPageMobile() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center">
            <Card className="relative w-[450px] h-[550px] overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>

                <div className="absolute inset-0 bg-black/40"></div> {/* Overlay */}

                {/* Flex container for buttons */}
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                    {/* Left button */}
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon" className = "bg-transparent border-transparent ">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="white" fillRule="evenodd" clipRule="evenodd"/>
                            </svg>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => navigate('/')}>home</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/experience')}>experience</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/projects')}>projects</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/resume')}>resume</DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>


                    {/* Right-side buttons stacked vertically */}
                    <div className="flex flex-col gap-8 ">
                        <Button variant="outline" size="icon">
                            <img src={github} className="w-8 h-8 object-contain" alt="GitHub" />
                        </Button>
                        <Button variant="outline" size="icon" >
                            <img src={linkedin} className="w-8 h-8 object-contain" alt="LinkedIn" />
                        </Button>               
                        
                        <Button variant="outline" size="icon">
                            <EnvelopeClosedIcon />
                        </Button>
                    </div>
                </div>

                <CardFooter className="absolute bottom-4 left-4 text-white">
                    <div className = "space-y-2">
                        <h1 className = "text-5xl font-bold ">Tyler Tran</h1>
                        <h2 className = "text-2xl font-semibold ">CS & Informatics @ UC Irvine</h2>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
