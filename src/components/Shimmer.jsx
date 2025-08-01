const Shimmercard  = () =>{
    return(
        <div className="w-full max-w-[250px]">
                    <div className="w-full rounded-xl bg-gray-200 ">
                        <p className="w-full h-44 object-cover"></p>
                    </div>
                    <div>
                        <h3 className="w-full mt-2 h-4 bg-gray-200"></h3>
                        <div className="flex justify-between mt-2 font-medium text-[16px]">
                            <p className="w-1/4 h-3 bg-gray-200"></p>
                            <p className="w-1/4 h-3 bg-gray-200"></p>
                        </div>
                        <p className="w-full h-3 mt-2 bg-gray-200"></p>
                        <p className="w-full h-3 mt-2 bg-gray-200"></p>
                    </div>
        </div>
    )
}

export default Shimmercard