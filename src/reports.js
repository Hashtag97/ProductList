import _ from "lodash";
import { DataContext } from "./App";
import React, { useContext, useEffect } from "react";
import Loading from "./loading"

const Reports = (event) => {
    const { session, setterState, projectName, setProjectID, setUserID, projectID, loading, setLoading } = useContext(DataContext);    

    useEffect(() => {
        setLoading(true)
        console.log("Loading")
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, [])

    const ListTeam = (users)=>{
        const user = _.find(users.users.event.users, {id : session.id})
        return(
            <>
                {user? (
                    <>
                    <div className="row-span-2 mb-2"><p className="text-xl">Me</p></div>
                    <div className="row-span-3 mb-8">
                        <div className="grid grid-cols-1">
                        <button className="grid grid-cols-12" onClick={()=>{
                                    setProjectID(projectID)
                                    setUserID(session.id)
                                    setterState('listTask')
                        }}>
                            <div className="col-span-2">
                            <img className="inline-block h-10 w-10 rounded-full float-left" src={session.img} alt=""/>
                            </div>
                            <div className="col-span-10">
                                <p className="text-xl text-left">{session.lastName} {session.firstName}</p>
                                <p className="text-xs text-left text-gray-500">Tracked: {session.tracked} h</p>
                            </div>
                        </button>
                        </div>
                    </div>
                <div className="row-span-4 ">
                        <p className="text-xl mb-4">Team</p>
                    <ul>
                        {users.users.event.users.map((item)=>(
                            <li key={item.id} className="grid grid-cols-1">
                                <button className="mb-10 grid grid-cols-12" onClick={()=>{
                                    setProjectID(projectID)
                                    setUserID(item.id)
                                    setterState('listTask')
                                }}>
                                <div className="col-span-2">
                                <img className="inline-block h-10 w-10 rounded-full float-left" src={item.img} alt=""/>
                                </div>
                                <div className="col-span-7">
                                        <p className="text-xl text-left">{item.firstName} {item.lastName}</p>
                                        <p className="text-xs text-left text-gray-500">Tracked: {item.tracked} h</p>
                                </div>
                                </button>  
                            </li>
                        ))}
                    </ul>
                </div>
                </>
                ):(
                    <><div className="row-span-4 ">
                        <p className="text-xl mb-4">Team</p>
                    <ul>
                        {users.users.event.users.map((item)=>(
                            <li key={item.id} className="grid grid-cols-1">
                                <button className="mb-10 grid grid-cols-12" onClick={()=>{
                                    setProjectID(projectID)
                                    setUserID(item.id)
                                    setterState('listTask')
                                }}>
                                <div className="col-span-2">
                                <img className="inline-block h-10 w-10 rounded-full float-left" src={item.img} alt=""/>
                                </div>
                                <div className="col-span-7">
                                        <p className="text-xl text-left">{item.firstName} {item.lastName}</p>
                                        <p className="text-xs text-left text-gray-500">Tracked: {item.tracked} h</p>
                                </div>
                                </button>  
                            </li>
                        ))}
                    </ul>
                </div></>
                )}
            </>
        )
    }

    if(loading === false){
        return(
            <>
                <div className="grid grid-flow-row auto-rows-max">
                    <div className="grid grid-cols-10 relative row-span-1 py-4 mb-1">
                        <button className="col-span-1" onClick={()=>setterState('projects')}>
                            <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5114 2.75839L4.02999 9.00805L10.5114 15.2577C11.1629 15.8859 11.1629 16.9007 10.5114 17.5289C9.85991 18.157 8.80752 18.157 8.15604 17.5289L0.488609 10.1356C-0.162872 9.50738 -0.162871 8.49262 0.488609 7.86443L8.15604 0.471143C8.80752 -0.157044 9.85991 -0.157044 10.5114 0.471144C11.1462 1.09933 11.1629 2.1302 10.5114 2.75839Z" fill="#313131"/>
                            </svg>
                        </button>
                        <div className="col-span-8">
                                <p className="text-center text-xl">{projectName}</p>
                                <p className="text-center text-xs text-gray-500">Wed, 11 - Tue, 15 November</p>
                        </div>
                        <div className="col-span-1 py-2.5">
                            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.1667 2.66659H18V1.49992C18 0.858252 17.475 0.333252 16.8333 0.333252C16.1917 0.333252 15.6667 0.858252 15.6667 1.49992V2.66659H6.33333V1.49992C6.33333 0.858252 5.80833 0.333252 5.16667 0.333252C4.525 0.333252 4 0.858252 4 1.49992V2.66659H2.83333C1.53833 2.66659 0.511667 3.71659 0.511667 4.99992L0.5 21.3333C0.5 22.6166 1.53833 23.6666 2.83333 23.6666H19.1667C20.45 23.6666 21.5 22.6166 21.5 21.3333V4.99992C21.5 3.71659 20.45 2.66659 19.1667 2.66659ZM19.1667 20.1666C19.1667 20.8083 18.6417 21.3333 18 21.3333H4C3.35833 21.3333 2.83333 20.8083 2.83333 20.1666V8.49992H19.1667V20.1666ZM5.16667 10.8333H7.5V13.1666H5.16667V10.8333ZM14.5 10.8333H16.8333V13.1666H14.5V10.8333Z" fill="#313131"/>
                                <path d="M12.1666 10.8333H9.83331V13.1666H12.1666V10.8333Z" fill="#313131"/>
                            </svg>
                        </div>
                    </div>
                        <ListTeam users={event}/>
                </div>
                <div className="absolute inset-x-0 bottom-5 bg-blue-600 rounded-md mx-5 py-2.5 h-12"><p className="text-center text-white">Generate report</p></div>
            </>
        )
    }else{
        return(
            <Loading isOpen={loading}/>
        )
    }
    
}
export default Reports;