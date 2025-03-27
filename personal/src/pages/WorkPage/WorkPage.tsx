import ics from "../../../src/assets/images/1631305520689.jfif";
import vfs from "../../../src/assets/images/vfs.png";
import dassault from "../../../src/assets/images/dassault.jpg";
import { Badge } from "@/components/ui/badge"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button"

function WorkPage(){
    const navigate = useNavigate();

    return(
        <div className="w-full flex justify-center px-4">
            <div className="flex flex-col w-full max-w-[900px]">

                <div className="flex absolute top-4 left-4 z-50 items-center ">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="w-10 h-10">
                                <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
                                </svg>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="z-[999]">
                        <DropdownMenuItem onClick={() => navigate('/')}>home</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/experience')}>experience</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/projects')}>projects</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/resume')}>resume</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    
                    <h2> tyler tran </h2>
                </div>

                <div className="flex flex-row p-4 mt-32 sm:mt-0">
                    <h1 className="text-4xl ">experience</h1>
                </div>


                {/* work container */}
                <div className="p-4 space-y-5 ">
                    {/* Job 1 */}
                    <div className = "flex flex-col rounded shadow ">

                        <div className="flex flex-row items-center justify-between p-4 ">
                            <div className="flex flex-row items-center gap-4">
                                <img src={ics} className="h-20 w-20 rounded-lg" />
                                <div>
                                    <h1>Undergraduate Reader</h1>
                                    <h2>School of Information and Computer Science</h2>
                                    <h2 className="block sm:hidden text-sm">April 2025 - Present</h2>
                                </div>
                            </div>

                            <div className="hidden sm:block text-right">
                                <h1 className="text-sm text-gray-600">April 2025 - Present</h1>
                            </div>
        
                        </div>

                        {/* bullet points about the job */}
                        <div className = "flex flex-col ml-10 mb-5 ">
                            <ul className="list-disc">
                                <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                                <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                                <li>Now this is a story all about how, my life got flipped-turned upside down</li>

                            </ul>
                        </div>

                        {/* skills and tools used */}
                        <div className = "flex flex-row ml-10 space-x-5 mb-5">
                            <Badge variant="outline">Python</Badge>
                        </div>

                    </div>



                    <div className = "flex flex-col rounded shadow ">
                        <div className="flex flex-row items-center justify-between p-4 ">
                            <div className="flex flex-row items-center gap-4">
                                <img src={vfs} className="h-20 w-20 rounded-lg" />
                                <div>
                                    <h1>Webmaster</h1>
                                    <h2>Vertical Flight Society at UCI</h2>
                                    <h2 className="block sm:hidden text-sm">January 2025 - Present</h2>
                                </div>
                            </div>

                            <div className="hidden sm:block text-right">
                                <h1 className="text-sm text-gray-600">January 2025 - Present</h1>
                            </div>

                        </div>

                        {/* bullet points about the job */}
                        <div className = "flex flex-col ml-10 mb-5">
                            <ul className="list-disc">
                                <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                                <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                                <li>Now this is a story all about how, my life got flipped-turned upside down</li>

                            </ul>
                        </div>

                        {/* skills and tools used */}
                        <div className = "flex flex-row ml-10 space-x-5 mb-5">
                            <Badge variant="outline">React</Badge>
                            <Badge variant="outline">Javascript</Badge>
                            <Badge variant="outline">TailwindCSS</Badge>
                            <Badge variant="outline">Figma</Badge>
                        </div>

                    </div>


                    <div className = "flex flex-col rounded shadow">
                        <div className="flex flex-row items-center justify-between  p-4 ">
                            <div className="flex flex-row items-center gap-4">
                                <img src={dassault} className="h-20 w-20 rounded-lg" />
                                <div>
                                    <h1>Student Software Engineer</h1>
                                    <h2>Dassault Systems</h2>
                                    <h2 className="block sm:hidden text-sm">January 2025 - Present</h2>
                                </div>
                            </div>

                            <div className="hidden sm:block text-right">
                                <h1 className="text-sm text-gray-600">January 2025 - Present</h1>
                            </div>

                        </div>

                        {/* bullet points about the job */}
                        <div className = "flex flex-col ml-10 mb-5">
                            <ul className="list-disc">
                                <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                                <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                                <li>Now this is a story all about how, my life got flipped-turned upside down</li>

                            </ul>
                        </div>

                        {/* skills and tools used */}
                        <div className = "flex flex-row ml-10 space-x-5 mb-5">
                            <Badge variant="outline">React</Badge>
                            <Badge variant="outline">Javascript</Badge>
                            <Badge variant="outline">TailwindCSS</Badge>
                            <Badge variant="outline">Figma</Badge>
                        </div>

                    </div>




                </div>
            </div>
        </div>
    );
}



export default WorkPage;