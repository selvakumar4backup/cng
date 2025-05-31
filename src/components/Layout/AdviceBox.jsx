import React, { useRef, useEffect, useState } from 'react';
import { Button, Paper, Typography, IconButton, Box } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CloseIcon from '@mui/icons-material/Close';

const AdviceBox = ({ currentRegion, tabAdviceMap, selectedSidebarTab }) => {
  const [showAdviceBox, setShowAdviceBox] = useState(false);
  const [adviceBoxPosition, setAdviceBoxPosition] = useState({ top: 0, right: 0 });

  const adviceButtonRef = useRef(null);
  const advicePaperRef = useRef(null);

  const handleToggleAdviceBox = () => {
    setShowAdviceBox((prev) => !prev);
  };



  
  useEffect(() => {
    if (adviceButtonRef.current) {
      const rect = adviceButtonRef.current.getBoundingClientRect();
      setAdviceBoxPosition({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
      });
    }
  }, [showAdviceBox]);

  return (
    <>
      <Button
        onClick={handleToggleAdviceBox}
        ref={adviceButtonRef}
        sx={{
          mr: 2,
          // px: 3,
          // py: 1.2,
          p:0,
          minWidth: '7.6875rem',
          width: 123,
          height: 40,
          border: `2px solid ${currentRegion.borderColor}`,
          backgroundColor: currentRegion.backgroundColor,
          color: currentRegion.textColor,
          '& .MuiButton-startIcon': { color: currentRegion.textColor },
          fontWeight: 500,
          fontFamily: 'Work Sans, sans-serif',
          fontSize: '1rem',
          boxShadow: 'none',
          textTransform: 'none',
          gap: 0.5,
        }}
        tabIndex={0}
        aria-label="Advice Button"
        variant="outlined"
        startIcon={<HelpOutlineIcon sx={{ fontSize: '1.5rem', width: '1.5rem', height: '1.5rem' }} />}
      >
        ADVICE
      </Button>

      {showAdviceBox && (
        <Paper
          elevation={4}
          sx={{
            position: 'fixed',
            top: adviceBoxPosition.top,
            right: adviceBoxPosition.right,
            minWidth: 320,
            maxWidth: 600,
            width: 'auto',
            height: 'auto',
            maxHeight: '248px',
            borderRadius: 2,
            zIndex: 1300,
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box',
            overflow: 'hidden',
          }}
          ref={advicePaperRef}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center" role="region" aria-labelledby="advice-title">
            <Typography sx={{fontFamily: 'Work Sans, sans-serif', fontSize:20, fontWeight:600, color:'#252525', letterSpacing:0}}>Advice</Typography>
            <IconButton onClick={handleToggleAdviceBox} size="small">
              <CloseIcon aria-label="Close advice box" sx={{ color: currentRegion.textColor }} />
            </IconButton>
          </Box>

          <Box
            sx={{
              mt: 2,
              mb: 0,
              flex: 1,
              minHeight: 0,
              overflowY: 'auto',
              display: 'flex',
              alignItems: 'flex-start',
            }}
          >
            <Typography sx={{ fontSize: '1rem', fontFamily: 'Work Sans, sans-serif' }}>
              {tabAdviceMap[selectedSidebarTab] || 'No advice available for this section.'}
            </Typography>
          </Box>

          <Box
            display="flex"
            justifyContent="flex-end"
            sx={{
              mt: 2,
              mb: 0,
              background: 'white',
              position: 'sticky',
              bottom: 0,
              zIndex: 2,
            }}
          >
            <Button
              onClick={handleToggleAdviceBox}
              variant="contained"
              disableRipple
              sx={{
                backgroundColor: currentRegion.textColor,
                color: '#FFFFFF',
                '&:hover': {
                  backgroundColor: currentRegion.borderColor,
                  boxShadow: 'none',
                },
                width: 96,
                height: 40,
                fontFamily: 'Work Sans, sans-serif',
                fontWeight: 600,
                fontSize: '1rem',
                boxShadow: 'none',
                textTransform: 'none',
                borderRadius: 4,
                padding: '8px 16px',
                textTransform: 'none',
              }}
            >
              OK
            </Button>
          </Box>
        </Paper>
      )}
    </>
  );
};

export default AdviceBox;
