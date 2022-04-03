import React from "react";

const Home =() =>{
    return(
        <div className="bg-gray-800 w-full h-screen flex justify-center items-center">
                <div className="w-96 h-96 p-4 flex flex-col  bg-black items-center text-white rounded-xl m-12">
                    <div className="relative w-full h-3/4 flex justify-center items-center bg-red-500 rounded-xl text-xl font-black">
                        IMG
                    </div>
                    <div className="relative flex justify-center items-center w-full h-1/4 text-xl font-black">
                        Text
                    </div>
                </div>
                <div className="w-96 h-96 p-4 flex flex-col  bg-black items-center text-white rounded-xl m-12">
                    <div className="relative w-full h-3/4 flex justify-center items-center bg-red-500 rounded-xl text-xl font-black">
                        IMG
                    </div>
                    <div className="relative flex justify-center items-center w-full h-1/4 text-xl font-black">
                        Text
                    </div>
                </div>
                <div className="w-96 h-96 p-4 flex flex-col  bg-black items-center text-white rounded-xl m-12">
                    <div className="relative w-full h-3/4 flex justify-center items-center bg-red-500 rounded-xl text-xl font-black">
                        IMG
                    </div>
                    <div className="relative flex justify-center items-center w-full h-1/4 text-xl font-black">
                        Text
                    </div>
                </div>
        </div>
    );
};

export default Home;