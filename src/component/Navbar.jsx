import React,{useState} from "react";
import { Link } from "react-router-dom";

const config =[
    {key:1,to:"/",name: "Home"},
    {key:2,to:"/tasks",name: "Tasks"},
    {key:3,to:"/logout",name: "Logout"},
    {key:4,to:"/test",name:"Test"},
];

const Navbar =()=>{
    const [isOpen,setIsOpen]=useState(false);
    return (
        <nav className="flex justify-between w-full bg-gray-900 p-5 text-white">
            <div className="mr-auto text-2xl">
                <Link to="/">LOGO</Link>
            </div>
            <div className="nav-links">
                <ul className="flex">
                    {config.map((link)=>{
                        return(
                            <li className="font-semibold mr-12 hover:bg-gray-300 rounded-lg p-3">
                            <Link to={link.to}>{link.name}</Link> 
                            </li>
                        );
                    })}
                </ul>
            </div>

        </nav>
    );
};

export default Navbar