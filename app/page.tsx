'use client'

import Image from "next/image";
import img from "@/public/nody-عکس-های-هایده-حسین-زاده-1619601980.jpg";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React, { useState } from "react";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import ReplayIcon from '@mui/icons-material/Replay';
import PauseIcon from '@mui/icons-material/Pause';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';


export default function Home() {


  const [value, setValue] = useState(50);
  const [play, setPlay] = useState<boolean>(false);
  const [randPlay, setRandPlay] = useState<boolean>(false);
  const [rePlay, setRePlay] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };


  const handlePlay: () => void = () => {
    setPlay((pre) => !pre)
  };

  const handleRandPlay: () => void = () => {
    setRandPlay((pre) => !pre)
  };

  const handleRePlay: () => void = () => {
    setRePlay((pre) => !pre)
  };


  const arrowsClass: string = `text-white 
  text-[5rem] 
  drop-shadow-2xl
   active:drop-shadow-none
   active:border
   active:border-gray-300
   active:rounded-xl
    hover:text-gray-300`

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${img.src})`, height: '100vh' }} // ارتفاع را مشخص کنید  
    >
      <div className="backdrop-blur-3xl h-screen flex flex-col items-center">
        <Image
          src={img}
          alt="image"
          className={` 
        h-96
         w-96
          rounded-full
           mt-14 
           drop-shadow-xl
           ${play && "allbumImage"}`} />
        <div>
          <div className="flex flex-col items-center text-white mt-5 drop-shadow-2xl gap-3">
            <h1 className="drop-shadow-2xl text-whitesmoke text-[4rem]" >
              Hyedeh
            </h1>
            <h1 className="drop-shadow-2xl text-whitesmoke mt-5" >
              Hyedeh
            </h1>
          </div>
          <div className="flex items-center space-x-4 p-4 rounded-md mt-4 ">
            <span className="text-white">{`${Math.floor(value / 60)}:${String(value % 60).padStart(2, '0')}`}</span>
            <input
              type="range"
              value={value}
              onChange={handleChange}
              min={0}
              max={300}
              className="w-[40rem] h-1 bg-gray-400 rounded-full appearance-none"
              style={{ accentColor: 'white' }}
            />
            <span className="text-white">{`${Math.floor(300 / 60)}:${String(300 % 60).padStart(2, '0')}`}</span>
          </div>
        </div>
        <div className="mt-10 flex gap-20">
          {
            randPlay ? <ShuffleOnIcon
              onClick={() => handleRandPlay()}
              className={`${arrowsClass}
               text-[2.8rem] my-auto mr-2`}
            /> : <ShuffleIcon
              onClick={() => handleRandPlay()}
              className={`${arrowsClass} 
                text-[2.8rem] my-auto mr-2`}
            />
          }
          <SkipPreviousIcon className={`${arrowsClass} text-[4rem] my-auto`} />
          {
            play ? <PauseIcon className={arrowsClass}
              onClick={() => handlePlay()} /> : <PlayArrowIcon
              className={arrowsClass}
              onClick={() => handlePlay()} />
          }
          <SkipNextIcon className={`${arrowsClass} text-[4rem] my-auto`} />
          {
            rePlay ? <ReplayCircleFilledIcon
              onClick={() => handleRePlay()}
              className={`${arrowsClass} 
              text-[3.2rem]
              rounded-xl
               my-auto 
               ml-2` }
            /> :
              <ReplayIcon
                onClick={() => handleRePlay()}
                className={`${arrowsClass}
                   text-[3.2rem]
             my-auto
             ml-2`} />}
        </div>
      </div>
    </div>
  );
}