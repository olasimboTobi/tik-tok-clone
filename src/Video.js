import React, { useRef, useState } from 'react';
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";


function Video( {url, channel, description, song, likes, messages,shares }) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);


    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
        
    };

    return (
        <div className="video">
            <video 
            className="video_player" 
            loop
            onClick={onVideoPress}
            ref={videoRef}
            // src= "https://v16-webapp.tiktok.com/00f68aeefe20419587c3ef3ee96da758/62129271/video/tos/useast2a/tos-useast2a-ve-0068c001/ce7c6824755d442b9373c04739253592/?a=1988&br=2674&bt=1337&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3tqnz7ThbJ49DXq&l=2022022013090701019216316321874A6C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajZrNjM6ZnN0OTMzNzczM0ApZzZmPDw6NDxkNzw3OTtlZ2doZDVecjQwX3BgLS1kMTZzc19fNDIuLjUzNDUwXl82M2I6Yw%3D%3D&vl=&vr=">
            // src = "https://v16-webapp.tiktok.com/fb42bb648d0c7480fa92df6e24d7af98/621302ee/video/tos/useast2a/tos-useast2a-ve-0068c001/d597109706bf46c3998fa10740be1956/?a=1988&br=802&bt=401&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=1&er=&ft=XOQ9-3tqnz7Th4BX9DXq&l=202202202110390102231210790ED5F5D6&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amVvNDo6Zmc6OTMzNzczM0ApaTdmZWc7aDwzNzxmaWczZWdgYGE1cjQwLW1gLS1kMTZzc2NhMDFfYl5jYV9jLy0tNWI6Yw%3D%3D&vl=&vr=">
            src = {url}>
            </video>
            <VideoFooter  channel={channel} description={description} song={song}/> 
            <VideoSidebar likes= {likes} messages= {messages} shares={shares}/> 
        </div>
    );
}

export default Video
