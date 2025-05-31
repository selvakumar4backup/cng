import React, { useRef, useState, useEffect } from 'react';
import post_divorce_vtt from '../../../assets/psych_post_divorce_adjustment.vtt'; 

const CustomVideoPlayer = ({ psy_video, poster_video, setIsVideoCompleted }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Sync scrubber with video time
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const value = (video.currentTime / video.duration) * 100;
      setProgress(isNaN(value) ? 0 : value);
    };

    video.addEventListener('timeupdate', updateProgress);
    return () => video.removeEventListener('timeupdate', updateProgress);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    setIsVideoCompleted(true); // Notify parent component that the video is completed
  };

  return (
    <div style={{ position: 'relative', width: 472,height: 271, borderRadius: 4, border: '1px solid #CDCDCD' }}>
      {/* Video */}
      <video
        tabIndex={0}
        aria-label="Video on psychological adjustment after divorce"
        ref={videoRef}
        poster={poster_video}
        onEnded={handleEnded} // Call handleEnded when the video ends
        style={{
          width: '472px', //484
          height: '271px',
          // display: 'block',
          objectFit: 'cover',
          borderRadius: 4,
          margin: 0,
          padding: 0,
        }}
      >
        <track 
          src={post_divorce_vtt}
          kind="captions" 
          srclang="en" 
          label="English captions"
          default
        />
        <source src={psy_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Controls Container */}
      <div
        style={{
          position: 'absolute',
          bottom: 16,
          left: 100,
          width: 285,
          height: 29,
          display: 'flex',
          alignItems: 'center',
          gap: 35,
          backgroundColor: '#3E3E40',
          borderRadius: 8,
        }}
      >
        {/* Play Button */}
        <button
          onClick={togglePlay}
          style={{
            paddingLeft: 15,
            width: 13,
            height: 13,
            fontSize: 13,
            gap: 30,
            cursor: 'pointer',
            backgroundColor: '#3E3E40',
            border: 'none',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#D9D9D9',
            
          }}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>

        {/* Scrubber Bar */}
        <div
          style={{
            flex: 1,
            height: 10,
            maxWidth: '221px',
            background: '#0F0F13',
            borderRadius: 10,
            overflow: 'visible',
            position: 'relative',
          }}
        >
          {/* Progress Bar */}
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: '#CD0000',
              transition: 'width 0.2s',
              animation: isPlaying ? 'pulseBar 1.2s infinite ease-in-out' : 'none',
              position: 'absolute',
              borderRadius: 10,
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          />
          {/* Red Dot */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: `${progress}%`,
              transform: 'translate(-50%, -50%)',
              width: 16,
              height: 16,
              background: '#CD0000',
              borderRadius: '50%',
              boxShadow: '0 0 4px rgba(0, 0, 0, 0.5)',
              zIndex: 2,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;