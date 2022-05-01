import React from "react";

const QuestionBox=({question})=>{
    return(
        <div className="w-96 bg-stone-300 rounded-lg h-48 flex justify-center items-center m-9 text-black font-semibold text-2xl">
            <a href=""><h1>{question}</h1></a>
        </div>
    );
};
export default QuestionBox;