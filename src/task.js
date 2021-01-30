import _ from "lodash";
import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "./App";
import Loading from "./loading"

const Task = (event) => {
    const { setterState, setLoading, loading } = useContext(DataContext);    
    const [ openDelete, setOpenDelete ] = useState(false)

    useEffect(() => {
        setLoading(true)
        console.log("Loading")
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, [])

    const closeModal = (bool) => setOpenDelete(!bool)

    const DeleteTask = (isOpen) =>{
        return(
            <>
            {isOpen.isOpen === true ?(
                <div className="z-10 -mx-5 h-screen bg-gray-400 bg-opacity-60 absolute inset-x-0 top-0">
                    <div className="relative h-screen">
                        <div className="absolute inset-x-0 bottom-20 grid grid-rows-4 gap-y-2">
                            <div className="row-span-4 bg-white mx-5 rounded-xl grid grid-rows-3">
                                <div className="row-span-2 pt-4">
                                    <p className="text-center text-xm px-3">Are you sure you want to delete this task?</p>
                                    <p className="text-center text-xs px-3 text-gray-400">This action cannot be undone</p>
                                    <hr className="mt-3"></hr>
                                </div>
                                <button className="row-span-1" onClick={()=>closeModal(true)} >
                                        <p className="text-center text-red-500 py-3">Delete task</p>
                                </button>
                            </div>
                                <button className="mx-5 row-span-2 bg-white rounded-xl" onClick={()=>closeModal(true)} >
                                    <p className="text-center py-4">Cancel</p>
                                </button>
                        </div>
                    </div>
                </div>
            ):(<></>)}
            </>
        )
    }

    if(loading === false){
        return(
            <div className="grid z-0 relative grid-flow-row auto-rows-max">
                <DeleteTask isOpen={openDelete}/>
                <div className="grid grid-rows-1 ">
                    <div className="grid grid-cols-12 row-span-1 py-4">
                        <button className="col-span-1" onClick={()=>{
                            setterState('listTask')
                        }}>
                            <svg className="mt-1" width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5114 2.75839L4.02999 9.00805L10.5114 15.2577C11.1629 15.8859 11.1629 16.9007 10.5114 17.5289C9.85991 18.157 8.80752 18.157 8.15604 17.5289L0.488609 10.1356C-0.162872 9.50738 -0.162871 8.49262 0.488609 7.86443L8.15604 0.471143C8.80752 -0.157044 9.85991 -0.157044 10.5114 0.471144C11.1462 1.09933 11.1629 2.1302 10.5114 2.75839Z" fill="#313131"/>
                            </svg>
                        </button>
                        <div className="col-span-8 py-2">
                            <p className="text-gray-400">RETINA</p>
                        </div>
                        
                        <button className="col-span-3 bg-blue-600 w-21 h-10 rounded-md">
                        <p className="text-white text-xs text-center py-2.5">Save</p>
                        </button>
                    </div>
                </div>
                <div className="grid grid-rows-9 gap-y-6">
                    <div className="row-span-1"><p className="text-2xl px-5">{event.event.title}</p></div>
                    <div className="grid grid-cols-11 row-span-1">
                        <div className="col-span-1 py-1">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM10.5 5H9V11L14.25 14.15L15 12.92L10.5 10.25V5Z" fill="#313131"/>
                            </svg>
                        </div>
                        <div className="col-span-8"><p className="text-sm pt-1">Time spent </p></div>
                        <div className="col-span-1"><p className="text-sm pt-1 text-gray-400 float-right">{event.event.spent} h</p></div>
                        <div className="col-span-1 py-1.5">
                            <svg className="float-right" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.3867 13.1733L6.56004 7.99997L1.3867 2.82664C0.866704 2.30664 0.866704 1.46664 1.3867 0.946641C1.9067 0.426641 2.7467 0.426641 3.2667 0.946641L9.3867 7.06664C9.9067 7.58664 9.9067 8.42664 9.3867 8.94664L3.2667 15.0666C2.7467 15.5866 1.9067 15.5866 1.3867 15.0666C0.880037 14.5466 0.866704 13.6933 1.3867 13.1733Z" fill="#8B8B8B"/>
                            </svg>
                        </div>
                    </div>
                    <div className="grid grid-cols-10 row-span-1">
                        <div className="col-span-1 my-2">
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7H17C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5ZM1 12H11C11.55 12 12 11.55 12 11C12 10.45 11.55 10 11 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM17 0H1C0.45 0 0 0.45 0 1V1.01C0 1.56 0.45 2.01 1 2.01H17C17.55 2.01 18 1.56 18 1.01V1C18 0.45 17.55 0 17 0Z" fill="#313131"/>
                            </svg>
                        </div>
                        <div className="col-span-9"><p>{event.event.description}</p></div>
                    </div>
                    <div className="grid grid-cols-10  row-span-1">
                        <div className="row-span-1">
                            <svg className="my-1" width="21" height="10" viewBox="0 0 21 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.96 4.38C2.24 2.91 3.62 1.9 5.12 1.9H8.05C8.57 1.9 9 1.47 9 0.95C9 0.43 8.57 0 8.05 0H5.22C2.61 0 0.279999 1.91 0.029999 4.51C-0.260001 7.49 2.08 10 5 10H8.05C8.57 10 9 9.57 9 9.05C9 8.53 8.57 8.1 8.05 8.1H5C3.09 8.1 1.58 6.36 1.96 4.38ZM7 6H13C13.55 6 14 5.55 14 5C14 4.45 13.55 4 13 4H7C6.45 4 6 4.45 6 5C6 5.55 6.45 6 7 6ZM14.78 0H11.95C11.43 0 11 0.43 11 0.95C11 1.47 11.43 1.9 11.95 1.9H14.88C16.38 1.9 17.76 2.91 18.04 4.38C18.42 6.36 16.91 8.1 15 8.1H11.95C11.43 8.1 11 8.53 11 9.05C11 9.57 11.43 10 11.95 10H15C17.92 10 20.26 7.49 19.98 4.51C19.73 1.91 17.39 0 14.78 0Z" fill="#313131"/>
                            </svg>
                        </div>
                        <div className="row-span-9">
                            <a href={event.event.url} ><p className="text-sm text-blue-600">{event.event.url}</p></a>
                        </div>
                    </div>
                        <div className="grid grid-cols-10 row-span-1 ">
                        <button className="bg-gray-200 rounded-md col-span-4 h-10" onClick={()=>closeModal(false)}>
                            <p className="text-center py-1.5">Delete task</p>
                        </button>  
                        </div>  
                </div>
            </div>        
        )
    }else{
        return(
            <Loading isOpen={loading}/>
        )
    } 
}

export default Task;

