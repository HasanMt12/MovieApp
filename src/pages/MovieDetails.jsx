
import { useLoaderData } from "react-router-dom";

import ReactPlayer from "react-player";

import 'react-tabs/style/react-tabs.css';
import { useState } from "react";

const MovieDetails = () => {
  const [openTab, setOpenTab] = useState(1);
    const {backgroundImg,cardImg, title, subTitle,description,url,year, } = useLoaderData()

    return (
        <>
   
         <div className="">
            <img src= {backgroundImg} className=""
            style={{
                    position: 'absolute',
                    width: '100%',
                    height: '500px',
                    top: '20%',
                    left: '50%',
                    objectFit: 'cover',
                    transform: 'translate(-50%,-50%)',
                    zIndex: '-1'
                }}>

            </img>
       
      
      <div className=" rounded-md lg:w-10/12 md:w-11/12 mt-6 mx-auto shadow-lg">
        <div className="md:flex mx-auto px-4 leading-none max-w-4xl">
          <div className="flex-none ">
           <img
            src={cardImg}
            alt="pic"
            className="lg:h-72 h-56  lg:w-56 w-40 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 "
          />           
          </div>

          <div className="flex-col text-gray-300">
   
            <p className="pt-4 lg:text-2xl md:text-xl text-lg text-[#EEEEEE] font-bold">{title} <span className="text-[#00ADB5]">({year})</span></p>
            <hr className="hr-text " data-content=""/>
            <div className="text-md flex justify-between px-4 my-2">
              <span className="font-bold">2h 2min | {subTitle}</span>
              <span className="font-bold"></span>
            </div>
            <p className="hidden md:block px-4 my-4 text-sm text-left">{description}</p>
            
            <p className="flex text-md px-4 my-2">
              Rating: 9.0/10 
              <span className="font-bold px-2">|</span>
              Mood: Dark
            </p>
            
            {/* <div className="text-xs">
              <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>
              
              <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>
              
              <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
            </div> */}

          
          </div>
        </div>
        <div className="flex justify-between items-center px-4 mb-4 w-full">
          <div className="flex">
          <i className="material-icons mr-2 text-red-600">favorite_border</i>
          <i className="material-icons text-blue-600">remove_red_eye</i>
          </div>
          {/* <div className="flex">
            <i className="material-icons ml-2 text-yellow-600">sentiment_very_satisfied</i>
            <i className="material-icons ml-2 text-yellow-600">sentiment_neutral</i>
            <i className="material-icons ml-2 text-yellow-600">sentiment_very_dissatisfied</i>
             <i className="material-icons ml-2 text-yellow-600">star_outline</i>
            <i className="material-icons ml-2 text-yellow-600">star_half</i>
            <i className="material-icons ml-2 text-yellow-600">star</i>           
            
          </div> */}
        </div>          
      </div>
  
         </div>
<br></br>
<div>
     <div className="flex flex-wrap lg:w-10/12 mx-auto md:w-11/12 ">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-[00FFFF]  bg-[#00FFFF]"
                    : "text-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                 Overview
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                     ? "text-[00FFFF]  bg-[#00FFFF]"
                    : "text-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Video
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                       <div className = "flex-col text-[#EEEEEE] bg-[#393E46] p-4" >
   
            <p className="pt-4 lg:text-2xl md:text-xl text-lg text-[#EEEEEE] font-bold">{title} <span className="text-[#00ADB5]">({year})</span></p>
            <hr className="hr-text " data-content=""/>
            <div className="text-md flex justify-between px-4 my-2">
              <span className="font-bold">2h 2min | {subTitle}</span>
              <span className="font-bold"></span>
            </div>
            <p className="hidden md:block px-4 my-4 text-sm text-left">{description}</p>
            
            <p className="flex text-md px-4 my-2">
              Rating: 9.0/10 
              <span className="font-bold px-2">|</span>
              Mood: Dark
            </p>
            
            {/* <div className="text-xs">
              <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>
              
              <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>
              
              <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
            </div> */}

          
          </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                   <ReactPlayer className=""
                 width = "100%"
                 height = "100%"
                controls
                playing
                volume
                playIcon
                playbackRate
                fallback
                url = {url}
             
              />
                </div>
           
              </div>
            </div>
          </div>
        </div>
      </div>

         </div>
 
         </>
    );
};

export default MovieDetails;

