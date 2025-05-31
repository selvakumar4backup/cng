import { useState } from 'react';
import { Box, Typography, Button, Menu } from '@mui/material';
import psy_video from '../../../assets/psych_post_divorce_adjustment_med.mp4';
import poster_video from '../../../assets/poster_psych_post_divorce_adjustment.jpg';
// import UpIcon from '../../../assets/Up.svg';
// import DownIcon from '../../../assets/Down.svg';

import CustomVideoPlayer from './CustomVideoPlayer';

const UpIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.8751 9.00002L11.9951 12.88L8.1151 9.00002C7.7251 8.61002 7.0951 8.61002 6.7051 9.00002C6.3151 9.39002 6.3151 10.02 6.7051 10.41L11.2951 15C11.6851 15.39 12.3151 15.39 12.7051 15L17.2951 10.41C17.6851 10.02 17.6851 9.39002 17.2951 9.00002C16.9051 8.62002 16.2651 8.61002 15.8751 9.00002Z" fill="#454545" />
  </svg>
);

const DownIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.1249 15L12.0049 11.12L15.8849 15C16.2749 15.39 16.9049 15.39 17.2949 15C17.6849 14.61 17.6849 13.98 17.2949 13.59L12.7049 8.99998C12.3149 8.60998 11.6849 8.60998 11.2949 8.99998L6.7049 13.59C6.3149 13.98 6.3149 14.61 6.7049 15C7.0949 15.38 7.7349 15.39 8.1249 15Z" fill="#454545" />
  </svg>
);

const disabbleArrowIcon = (
  <svg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
  >
    <path
      d="M1.20876 9.00021H12.3788L7.49876 13.8802C7.10876 14.2702 7.10876 14.9102 7.49876 15.3002C7.88876 15.6902 8.51875 15.6902 8.90876 15.3002L15.4988 8.71021C15.8888 8.32021 15.8888 7.69022 15.4988 7.30022L8.91876 0.700215C8.52876 0.310215 7.89876 0.310215 7.50876 0.700215C7.11876 1.09021 7.11876 1.72022 7.50876 2.11022L12.3788 7.00022H1.20876C0.658755 7.00022 0.208755 7.45021 0.208755 8.00022C0.208755 8.55021 0.658755 9.00021 1.20876 9.00021Z"
      fill="#707070"
    />
  </svg>
);

const enableArrowIcon = (
  <svg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
  >
    <path
      d="M1.20876 8.99997H12.3788L7.49876 13.88C7.10876 14.27 7.10876 14.91 7.49876 15.3C7.88876 15.69 8.51875 15.69 8.90876 15.3L15.4988 8.70997C15.8888 8.31997 15.8888 7.68997 15.4988 7.29997L8.91876 0.699971C8.52876 0.309971 7.89876 0.309971 7.50876 0.699971C7.11876 1.08997 7.11876 1.71997 7.50876 2.10997L12.3788 6.99997H1.20876C0.658755 6.99997 0.208755 7.44997 0.208755 7.99997C0.208755 8.54997 0.658755 8.99997 1.20876 8.99997Z"
      fill="#FFFFFF"
    />
  </svg>
);

export default function Instruction({
  selectedSidebarTab,
  anchorEl,
  handleScriptClick,
  handleScriptClose,
  isVideoCompleted,
  setIsVideoCompleted,
  setSelectedSection,
  setSelectedSidebarTab,
  regionConfig,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = (event) => {
    if (menuOpen) {
      handleScriptClose();
    } else {
      handleScriptClick(event);
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <Box role="region"
  aria-labelledby="instruction-heading" sx={{ width: 710, height: 521, 
  display: 'flex', flexDirection: 'column', 
  justifyContent: 'flex-start',
  boxShadow: 'none',
  borderColor: 'solid #D4D4D4',
  boxSizing: 'border-box',
  }}>
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" sx={{ width: '100%', gap: 2, mb: 0 }}>
        <Typography
          sx={{
            textTransform: 'capitalize',
            fontWeight: 'bold',
            fontSize: '1.125rem',
            fontFamily: 'Work Sans, sans-serif',
            fontWeight: 600,
          }}
        >
          {selectedSidebarTab}
        </Typography>
        <Box>
          <Button
            variant="outlined"
            endIcon={menuOpen ? DownIcon : UpIcon}
            onClick={handleMenuToggle}
            aria-haspopup="true"
            aria-controls="instruction-script-menu"
            aria-expanded={menuOpen}
            sx={{
              width: 220,
              height: 40,
              ml: 6,
              color: '#22242C',
              borderColor: '#DCDCDC',
              fontFamily: 'Work Sans, sans-serif',
              textTransform: 'none',
              justifyContent: 'space-between',
              pl: 2,
              pr: 1.5,
              textAlign: 'left',
              fontSize: '1.125rem',
              cursor: 'pointer', // <-- Ensure pointer cursor
                '& .MuiButton-endIcon': {
                  cursor: 'pointer', // <-- Ensure icon has pointer too
                },
            }}
          >
            Script
          </Button>
          <Menu
          id="instruction-script-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => {
              handleScriptClose();
              setMenuOpen(false);
            }}
            PaperProps={{
              sx: {
                width: 220,
                maxHeight: 400,
                overflowY: 'auto',
                whiteSpace: 'normal',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
                msOverflowStyle: 'none',
                mt: 1
              }
            }}
          >
            <Box
              sx={{
                whiteSpace: 'normal',
                overflowWrap: 'break-word',
                userSelect: 'text',
                cursor: 'text',
                padding: 1,
                fontSize: '1rem',
                fontFamily: 'Work Sans, sans-serif'
              }}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <Typography
                component="div"
                variant="body2"
                sx={{ fontSize: '1rem', fontFamily: 'Work Sans, sans-serif' }}
              >
                <p>Parental divorce is a life-changing event that can require families to make big adjustments.</p>
                <p>Both parents and children can struggle to settle into new circumstances, and many factors can affect how well families navigate the transition.</p>
                <p>How much conflict is there between parents after the divorce?</p>
                <p>How important is it that the child spend time with each parent, and how much time is the right amount now that there are two households?</p>
                <p>Do other changes, like moving homes or changing schools, affect children?</p>
                <p>
                  Review the research that can be applied to this case under{' '}
                  <Typography
                    component="span"
                    sx={{
                      color: '#237900',
                      fontSize: '1rem',
                      fontFamily: 'Work Sans, sans-serif',
                      fontWeight: 400
                    }}
                  >
                    <strong>"Consult the Research"</strong>
                  </Typography>{' '}
                  and then dig deeper into the Mason family's current circumstances while you{' '}
                  <Typography
                    component="span"
                    sx={{
                      color: '#a45f00',
                      fontSize: '1rem',
                      fontFamily: 'Work Sans, sans-serif',
                      fontWeight: 400
                    }}
                  >
                    "Investigate the Evidence"
                  </Typography>.
                </p>
                <p>After you've gathered all the information, make a decision about what you think the best course of action is for the Masons, giving a rationale for your thinking process.</p>
              </Typography>
            </Box>
          </Menu>
        </Box>
      </Box>

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', 
        alignItems: 'start', justifyContent: 'start', width: 472, height: 489,}}>
        <Box sx={{ height: 350, display: 'flex', justifyContent: 'start', alignItems: 'flex-start', pt: 0, flexDirection: 'column' }}>
          {/* <video
            poster={poster_video}
            style={{ width: 472 }}
            onEnded={() => setIsVideoCompleted(true)}
          >
            <source src={psy_video} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <CustomVideoPlayer
            psy_video={psy_video}
            poster_video={poster_video}
            setIsVideoCompleted={setIsVideoCompleted}
          />
          <Button
            variant="contained"
            // aria-disabled={!isVideoCompleted}
            // disabled={!isVideoCompleted}
            onClick={() => {
              setSelectedSection('research');
              setSelectedSidebarTab(regionConfig['research'].tabs[0]);
            }}
            // disabled={!isVideoCompleted}
            sx={{
              backgroundColor: isVideoCompleted ? '#BD6697' : '#D4D4D4',
              color: isVideoCompleted ? '#fff' : '#707070',
              '&:hover': {
                backgroundColor: isVideoCompleted ? '#742451' : '#D4D4D4'
              },
              '&.Mui-disabled': {
                  color: '#707070', 
                },
              boxShadow: 'none',
              fontFamily: 'Work Sans, sans-serif',
              fontWeight: 500,
              fontSize: 16,
              mt: 2,
              width: 106,
              height: 40,
              cursor: 'pointer',
                '&:hover': {
                  boxShadow: 'none !important',
                  transform: 'none !important',
                  filter: 'none !important',
                },
                '&:focus': {
                  outline: 'none',
                },
                gap: 2,
            }}
          >
           <span>START</span>
            <Box sx={{ width: 24, height: 24, display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center'  }}>
              {isVideoCompleted ? enableArrowIcon : disabbleArrowIcon}
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
