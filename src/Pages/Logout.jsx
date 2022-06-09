import React,{useState} from "react";

import '../css/ranking.css';
import jupiter from '../img/Jupiter.png';
import mars from '../img/Mars.png';
import mercury from '../img/Mercury.png';
import naptune from '../img/Naptune.png';
import pluto from '../img/Pluto.png';
import saturn from '../img/Saturn.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'

let curPage = 1;

const randPlayer=(i)=>{
    return{
        rank : i,
        playerName : "Playername",
        home : Math.floor(Math.random()*6),
        point : Math.floor(Math.random()*10000)
    }
}

const range = (len) =>{
    const arr=[];
    for(let i=0;i<len;i++){
        arr.push(i);
        arr[i] = randPlayer(i+1);
    }
    return arr;
}

const scoreBoard = (curPage,arr) =>{
    const borad=[];
    const len = curPage*10;
    const start = len-10;
    let count=0;
    for(let i = start; i <len; i++ ){
        borad[count]=arr[i];
        count++;
    }
    return borad;
}

const Home = (home) => {
    switch(home){
        case 0:
            return (
                <div className="flex_center">
                    <img src={jupiter} alt="Jupiter" className="home_img"/>
                </div>
            );
        case 1:
            return (
                <div className="flex_center">
                        <img src={mars} alt="Mars" className="home_img"/>
                </div>
            );
        case 2:
            return (
                <div className="flex_center">
                    <img src={mercury} alt="Mercury" className="home_img"/>
                </div>
            );
        case 3:
            return (
                <div className="flex_center">
                    <img src={naptune} alt="Naptune" className="home_img"/>
                </div>
            );
        case 4:
            return (
                <div className="flex_center">
                    <img src={pluto} alt="Pluto" className="home_img"/>
                </div>
            );
        case 5:
            return (
                <div className="flex_center">
                    <img src={saturn} alt="Saturn" className="home_img_saturn"/>
                </div>
            );
    }
}

const Logout =()=>{
    
    const arr= range(20);
    console.log(arr);
    let final = scoreBoard(curPage,arr);
    console.log(final);
    console.log(curPage);

    const increasePage =() =>{
        final = scoreBoard(++curPage,arr);
        console.log(curPage);
        console.log(final);
    }

    const decreasePage=() =>{
        curPage--;
        console.log(curPage);
    }

    return (
        <div className="scoreBoard bg">
            <table >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Player Name</th>
                        <th>Home</th>
                        <th>Score</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {final.map(d =>{
                        return (
                            <tr>
                                <th>{d.rank}</th>
                                <th>{d.playerName}</th>
                                <th>{Home(d.home)}</th>
                                <th>{d.point}</th>
                                <th>Points</th>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={5}>
                            <div className="flex_end gap-x-4">
                                <button onClick={decreasePage}><FontAwesomeIcon icon={faCircleArrowLeft}></FontAwesomeIcon></button>
                                <h1>{curPage} / {Math.ceil(arr.length/10)}</h1>
                                <button onClick={increasePage}><FontAwesomeIcon icon={faCircleArrowRight}></FontAwesomeIcon></button>
                            </div>
                        </th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Logout;