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

{/* use absolute to put it exactly where you want it */}
export default function FrontPageMobile() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center">
            <Card className="relative w-[600px] h-[700px] overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>

                <div className="absolute inset-0 bg-black/40"></div> {/* Overlay */}

                {/* Flex container for buttons */}
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                    {/* Left button */}
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">Open</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => navigate('/')}>home</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/experience')}>experience</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/project')}>projects</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/resume')}>resume</DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>


                    {/* Right-side buttons stacked vertically */}
                    <div className="flex flex-col gap-8 ">
                        <Button variant="outline" size="icon">Test</Button>
                        <Button variant="outline" size="icon">Test</Button>
                        <Button variant="outline" size="icon">Test</Button>
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
