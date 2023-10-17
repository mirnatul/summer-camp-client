import React from "react";
import ReactPlayer from "react-player/youtube";
import './VideoPopUp.css'

const VideoPopUp = ({ show, setShow, videoUrl }) => {
    const hidePopup = () => {
        setShow(false);
    };
    return (
        <div className={`videoPopup ${show ? "visible" : ""}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
                <span className="closeBtn" onClick={hidePopup}>
                    Close
                </span>
                <ReactPlayer
                    url={videoUrl}
                    controls
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    );
};

export default VideoPopUp;