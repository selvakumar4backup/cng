import React, { useState } from 'react';

const VideoPlayer = ({ videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1); // Default volume: 100%

  const videoRef = React.createRef();

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleVolumeChange = (e) => {
    const volumeValue = e.target.value;
    const video = videoRef.current;
    video.volume = volumeValue;
    setVolume(volumeValue);
  };

  return (
    <div>
      <video ref={videoRef} width="600" controls={false} src={videoSrc} />
      <div>
        <button onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={toggleMute}>
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;