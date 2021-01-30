const Loading = (isOpen) =>{
console.log(isOpen)
return(
    <>
    {isOpen.isOpen === true ?(
        <div className="z-10 h-screen bg-gray-400 bg-opacity-60 absolute inset-x-0 top-0">
            <div className="h-screen grid grid-rows-3 grid-cols-3 content-center">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div><p className="text-center text-xl">Loading...</p></div>   
            </div>
        </div>
    ):(<></>)}
    </>
)
}
export default Loading;