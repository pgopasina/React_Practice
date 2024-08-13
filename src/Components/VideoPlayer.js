import React, {useRef, useState} from 'react'
import SampleVideo from '../Sample_VideoFile.mp4'

function VideoPlayer() {
  const videoRef = useRef(null); // Separate ref for the video element
  const inputRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>useRef Example:</h1>
      <video ref={videoRef} width="600" controls={false} src={SampleVideo}></video>
      <div>
        <button onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
      <br/>
      <div>
        <input ref={inputRef} type="text" placeholder="Focus me on button click" />
        <br/>
        <button onClick={handleFocus}>Focus the input</button>
      </div>
    </div>
  );
}


export default VideoPlayer
