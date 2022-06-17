import React, { useState,useEffect } from "react";
import axios from "axios";

import '../css/ranking.css';
import jupiter from '../img/Jupiter.png';
import mars from '../img/Mars.png';
import mercury from '../img/Mercury.png';
import naptune from '../img/Naptune.png';
import pluto from '../img/Pluto.png';
import saturn from '../img/Saturn.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmE0YjA5MjFhNDQzZjFmYTVhZTA2ZTciLCJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNjU0OTY0MTYyLCJleHAiOjE2NTU1Njg5NjJ9.EC5VD81v98JzSmFlQl3j4hAkkoOy6z5oEr37DKIzfas';
const baseUrl ='https://api.bxdman.com/users';

const authAxios = axios.create({
    baseURL: baseUrl,
    headers:{
        Authorization: `Bearer ${token}`
    }
});

function RankingPage() {
    const [curPage, setCurPage] = useState(1);
    const [newScoreBoard,setNewScoreBoard] = useState([]);

    useEffect(()=>{
        const fetch = async()=>{
            try{
                const result = await authAxios.get(`${baseUrl}`);
                setNewScoreBoard(result.data);
            }
            catch{
                alert("Fetch error");
            }
        };
        fetch()
    },[]);

    // const randPlayer = (i) => {
    //     return {
    //         rank: i,
    //         playerName: "Playername",
    //         home: Math.floor(Math.random() * 6),
    //         point: Math.floor(Math.random() * 10000)
    //     }
    // }

    // const range = (len) => {
    //     const arr = [];
    //     for (let i = 0; i < len; i++) {
    //         arr.push(i);
    //         arr[i] = randPlayer(i + 1);
    //     }
    //     return arr;
    // }

    const scoreBoard = (curPage, arr) => {
        const borad = [];
        let len = curPage * 10;
        let start = len - 10;
        let count = 0;
        const lastPage = Math.ceil(arr.length / 10);
        if (curPage == lastPage && arr.length % 10 != 0) {
            len = ((curPage - 1) * 10) + arr.length % 10;
            start = len - arr.length % 10;
            console.log(len, start);
            for (let i = start; i < len; i++) {
                borad[count] = arr[i];
                count++;
            }
        }
        else {
            for (let i = start; i < len; i++) {
                borad[count] = arr[i];
                count++;
            }
        }
        return borad;
    }

    const Home = (home) => {
        switch (home) {
            case 0:
                return (
                    <img src={jupiter} alt="Jupiter" className="home_img" />
                );
            case 1:
                return (
                    <img src={mars} alt="Mars" className="home_img" />
                );
            case 2:
                return (
                    <img src={mercury} alt="Mercury" className="home_img" />
                );
            case 3:
                return (
                    <img src={naptune} alt="Naptune" className="home_img" />
                );
            case 4:
                return (
                    <img src={pluto} alt="Pluto" className="home_img" />
                );
            case 5:
                return (
                    <img src={saturn} alt="Saturn" className="home_img_saturn" />
                );
        }
    }

    const increasePage = () => {
        if (curPage != Math.ceil(newScoreBoard.length / 10)) {
            console.log(curPage);
            setCurPage(curPage + 1);
        }
    }

    const decreasePage = () => {
        if (curPage != 1) {
            console.log(curPage);
            setCurPage(curPage - 1);
        }
    }

    // const startArr = range(23);
    // console.log(startArr);
    const showScore = scoreBoard(curPage, newScoreBoard);
    console.log(showScore);
    console.log(newScoreBoard);

    return (
        <div className="scoreBoard bg">
            hey
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
                    {showScore.map(d => {
                        return (
                            <tr>
                                <th>{d.finished}</th>
                                <th>{d.name}</th>
                                <th>
                                    <div className="flex_center">
                                        {Home(d.group)}
                                    </div>
                                </th>
                                <th>{d.score}</th>
                                {/* <th>Points</th> */}
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={4}>
                            <div className="flex_end gap-x-4">
                                <button onClick={decreasePage}><FontAwesomeIcon icon={faCircleArrowLeft}></FontAwesomeIcon></button>
                                <h1>{curPage} / {Math.ceil(newScoreBoard.length / 10)}</h1>
                                <button onClick={increasePage}><FontAwesomeIcon icon={faCircleArrowRight}></FontAwesomeIcon></button>
                            </div>
                        </th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default RankingPage;