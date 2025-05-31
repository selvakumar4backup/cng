import React, { useState, useRef, useEffect } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, Button, Typography, IconButton } from '@mui/material';

const TeacherInterviewSection = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const questions = [
    { id: 1, text: 'How do you handle classroom discipline?', videoUrl: "https://wowzahttp.cengage.com/digital-production/psychology/teacher_video_1.mp4" },
    { id: 2, text: 'What is your teaching philosophy?', videoUrl: "https://wowzahttp.cengage.com/digital-production/psychology/teacher_video_2_academically.mp4" },
    { id: 3, text: 'How do you engage students in learning?', videoUrl: "https://wowzahttp.cengage.com/digital-production/psychology/teacher_video_3_tired.mp4" },
  ];

  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Pause and reset when question changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [selectedQuestion]);

  return (
    <div>
      <Box sx={{
        my: 0.5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Typography id="interview-instructions" sx={{ fontFamily: 'Work sans', fontSize: 16, mb: 1 }}>
          Click one of the Questions below to view the video response.
        </Typography>
        <Box sx={{ my: 0.5, width: '100%', maxWidth: 600 }}>
          {questions.map((q) => (
            <Button
              key={q.id}
              variant="outlined"
              fullWidth
              sx={{
                mb: 1,
                textAlign: 'left',
                color: '#22242C',
                borderColor: '#D4D4D4',
                fontFamily: 'Work Sans, sans-serif',
                fontSize: 18,
                textTransform: 'none',
              }}
              onClick={() => setSelectedQuestion(q)}
              aria-label={`Watch response: ${q.text}`}
            >
              {q.text}
            </Button>
          ))}
        </Box>

        {selectedQuestion && (
          <Box
            sx={{
              width: '55%',
              maxWidth: 510,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              overflow: 'hidden',
              mt: 0.5,
              border: '1px solid #888888',  // grey border line
              borderRadius: 2,
            }}
            role="region"
            aria-labelledby={`video-question-${selectedQuestion.id}`}
          >
            <video
              key={selectedQuestion.id}
              ref={videoRef}
              src={selectedQuestion.videoUrl}
              style={{ width: '100%', height: 'auto', cursor: 'pointer',display: 'block' }}
              onClick={togglePlayPause}
              aria-label={`Video response to: ${selectedQuestion.text}`}
              tabIndex={0}
            >
              Your browser does not support the video tag.
            </video>

            {/* Play icon overlay, only show when paused */}
            {!isPlaying && (
              <IconButton
                onClick={togglePlayPause}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
                  color: 'white',
                  width: 64,
                  height: 64,
                  border: '2px solid white',
                }}
                aria-label="Play video"
                tabIndex={0}
              >
                <PlayArrowIcon sx={{ fontSize: 40 }} />
              </IconButton>
            )}
          </Box>
        )}
      </Box>
    </div>
  );
};

export default TeacherInterviewSection;
