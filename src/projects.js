import _ from "lodash";
import React, { useContext, useEffect } from "react";
import { DataContext } from "./App";
import Loading from "./loading"


const Projects = (event) => {
    const { session, setProjectID, setterState, setProjectName, setLoading, loading } = useContext(DataContext);

    const ListProjects = () =>{
        return(
            <ul className="">
                {event.event.map((item)=>(
                    <li key={item.id} className="mx-0 my-5 grid grid-cols-1">
                    <button className="grid grid-cols-10 mx-0" onClick={()=>{
                        setProjectID(item.id)
                        setterState("reports")
                        setProjectName(item.name)
                    }}>
                        <div className=" col-span-2 bg-blue-600 rounded-md w-12 h-12 py-1.5"><p className="text-3xl text-white font-bold text-center">{item.name[0]}</p></div>
                        <p className="text-xl pt-2 text-left">{item.name}</p>
                    </button>
                    </li>
                ))}
            </ul>
            
        )
    }

    useEffect(() => {
        setLoading(true)
        console.log("Loading")
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, [])

    if(loading === false){
        return(
            <>
                <div className="grid grid-rows">
                    <div className="container relative my-4">
                        <div className="float-right relative mt-1 mx-3">
                            <svg className="absolute top-0.5 right-0" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="3.19999" cy="2.93327" rx="2.66667" ry="2.66667" fill="#0364F6"/>
                            </svg>
                            <svg className="float-right mx-1" width="22" height="27" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 26.3333C12.4667 26.3333 13.6667 25.1333 13.6667 23.6666H8.33337C8.33337 25.1333 9.53337 26.3333 11 26.3333ZM19 18.3333V11.6666C19 7.57325 16.8267 4.14659 13 3.23992V2.33325C13 1.22659 12.1067 0.333252 11 0.333252C9.89337 0.333252 9.00004 1.22659 9.00004 2.33325V3.23992C5.18671 4.14659 3.00004 7.55992 3.00004 11.6666V18.3333L0.333374 20.9999V22.3333H21.6667V20.9999L19 18.3333ZM16.3334 19.6666H5.66671V11.6666C5.66671 8.35992 7.68004 5.66659 11 5.66659C14.32 5.66659 16.3334 8.35992 16.3334 11.6666V19.6666Z" fill="#313131"/>
                            </svg>
                        </div>
                        <div className="float-right mr-2">
                            <img className="inline-block h-8 w-8 rounded-full" src={session.img} alt=""/>
                        </div>
                    </div>
                    <div className="mb-8">
                        <p className="text-3xl font-bold my-2">Projects</p>
                        <p className="text-gray-400">Welcome: {session.firstName}!</p>
                    </div>
                </div>
                <ListProjects/>
            </>
        )
    }else{
        return(
            <Loading isOpen={loading}/>
        )
    }
    

}

export default Projects;

