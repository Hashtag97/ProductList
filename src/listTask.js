import _ from "lodash";
import React, { useContext, useEffect } from "react";
import { DataContext } from "./App";
import Loading from "./loading"

const ListTask = (event) =>{
    const { setProjectID, setTaskID, setterState, projectID, setLoading, loading } = useContext(DataContext);    
    const  user = _.find(event.event, { assignee: { id: event.event[0].assignee.id } }).assignee


    useEffect(() => {
        setLoading(true)
        console.log("Loading")
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, [])


    if(loading === false){
        return(
            <div className="grid grid-flow-row auto-rows-max">
                    <div className="grid grid-cols-12 row-span-1 py-4">
                        <button className="col-span-1" onClick={()=>{
                                setterState('reports')
                        }}>
                            <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5114 2.75839L4.02999 9.00805L10.5114 15.2577C11.1629 15.8859 11.1629 16.9007 10.5114 17.5289C9.85991 18.157 8.80752 18.157 8.15604 17.5289L0.488609 10.1356C-0.162872 9.50738 -0.162871 8.49262 0.488609 7.86443L8.15604 0.471143C8.80752 -0.157044 9.85991 -0.157044 10.5114 0.471144C11.1462 1.09933 11.1629 2.1302 10.5114 2.75839Z" fill="#313131"/>
                            </svg>
                        </button>
                        <div className="col-span-10">
                                <p className="text-center text-xl">{user.firstName} {user.lastName}</p>
                                <p className="text-center text-xs text-gray-500">Wed, 11 - Tue, 15 November</p>
                        </div>
                        <div className="col-span-1 py-3">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 10.25H10.25V16.5C10.25 17.1875 9.6875 17.75 9 17.75C8.3125 17.75 7.75 17.1875 7.75 16.5V10.25H1.5C0.8125 10.25 0.25 9.6875 0.25 9C0.25 8.3125 0.8125 7.75 1.5 7.75H7.75V1.5C7.75 0.8125 8.3125 0.25 9 0.25C9.6875 0.25 10.25 0.8125 10.25 1.5V7.75H16.5C17.1875 7.75 17.75 8.3125 17.75 9C17.75 9.6875 17.1875 10.25 16.5 10.25Z" fill="#313131"/>
                        </svg>
                        </div>
                    </div>
                    <ul>
                        {event.event.map((item)=>(
                            <li key={item.id} className="my-5 grid grid-cols-1">
                                    <button className="grid grid-cols-6 mb-2" onClick={()=>{
                                        setProjectID(projectID)
                                        setTaskID(item.id)
                                        setterState('task')
                                    }}>
                                        <div className="grid col-span-5">
                                            <div><p className="text-left">{item.title}</p></div>
                                            <div className="grid grid-cols-7">
                                                <div className="col-span-1 grid grid-cols-2">
                                                    <div className="col-span-1 mt-1" >
                                                        <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.80498 4.06075C2.00331 3.0195 2.98081 2.30409 4.04331 2.30409H6.11873C6.48706 2.30409 6.79164 1.9995 6.79164 1.63117C6.79164 1.26284 6.48706 0.958252 6.11873 0.958252H4.11414C2.26539 0.958252 0.614977 2.31117 0.437894 4.15284C0.232477 6.26367 1.88998 8.04158 3.95831 8.04158H6.11873C6.48706 8.04158 6.79164 7.737 6.79164 7.36867C6.79164 7.00033 6.48706 6.69575 6.11873 6.69575H3.95831C2.60539 6.69575 1.53581 5.46325 1.80498 4.06075ZM5.37498 5.20825H9.62498C10.0146 5.20825 10.3333 4.8895 10.3333 4.49992C10.3333 4.11034 10.0146 3.79159 9.62498 3.79159H5.37498C4.98539 3.79159 4.66664 4.11034 4.66664 4.49992C4.66664 4.8895 4.98539 5.20825 5.37498 5.20825ZM10.8858 0.958252H8.88123C8.51289 0.958252 8.20831 1.26284 8.20831 1.63117C8.20831 1.9995 8.51289 2.30409 8.88123 2.30409H10.9566C12.0191 2.30409 12.9966 3.0195 13.195 4.06075C13.4641 5.46325 12.3946 6.69575 11.0416 6.69575H8.88123C8.51289 6.69575 8.20831 7.00033 8.20831 7.36867C8.20831 7.737 8.51289 8.04158 8.88123 8.04158H11.0416C13.11 8.04158 14.7675 6.26367 14.5691 4.15284C14.3921 2.31117 12.7346 0.958252 10.8858 0.958252Z" fill="#ADADAD"/>
                                                        </svg>
                                                    </div>
                                                    <div className="col-span-1">
                                                        <p className="text-xs text-gray-400">1</p>
                                                    </div>
                                                </div>
                                                <div className="col-span-1 grid grid-cols-2">
                                                    <div className="col-span-1 mt-1" >
                                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.3333 3.33333H0.666667C0.3 3.33333 0 3.63333 0 4C0 4.36667 0.3 4.66667 0.666667 4.66667H11.3333C11.7 4.66667 12 4.36667 12 4C12 3.63333 11.7 3.33333 11.3333 3.33333ZM0.666667 8H7.33333C7.7 8 8 7.7 8 7.33333C8 6.96667 7.7 6.66667 7.33333 6.66667H0.666667C0.3 6.66667 0 6.96667 0 7.33333C0 7.7 0.3 8 0.666667 8ZM11.3333 0H0.666667C0.3 0 0 0.3 0 0.666667V0.673334C0 1.04 0.3 1.34 0.666667 1.34H11.3333C11.7 1.34 12 1.04 12 0.673334V0.666667C12 0.3 11.7 0 11.3333 0Z" fill="#ADADAD"/>
                                                        </svg>
                                                    </div>
                                                    <div className="col-span-1">
                                                        <p className="text-xs text-gray-400">2</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div><p className="text-gray-500 text-right">5h</p></div>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
        )
    }else{
        return(
            <Loading isOpen={loading}/>
        )
    }
    
}

export default ListTask;

