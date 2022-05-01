import React,{useState,useEffect} from "react";
import QuestionBox from "../component/QuestionBox";

const Tasks =()=>{

    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch('http://161.246.5.40:8880/question')
        .then(response => response.json())
        .then(data=>setData(data))
        console.log(data)
    },[]);

    return(
        <div className="w-full h-screen flex items-center justify-center bg-gray-700">
            <div className="grid grid-cols-4 gap-4">
            {data.map(el=> (
                <QuestionBox key={el.id} question={el.title}/>
            ))}
            </div>
        </div>
    );
};

export default Tasks;