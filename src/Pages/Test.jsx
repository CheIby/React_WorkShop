import React,{useState} from "react";

function TestScore() {
    let [count,setCount] = useState(1);

    const inncreaseNum=()=>{
        setCount(++count);
    }

    return (
        <div>
            this is test score
            <button onClick={inncreaseNum}>increase</button>
            <h1>{count}</h1>
        </div>
    )
}

const Test =()=>{
    return (
        <div>
            this is test page
        </div>
    )
}

export default TestScore;