import { Box, Typography } from '@mui/material';
import crayon_drawing from '../../../assets/divorce_crayon_drawing.jpg';

export default function CrayonDrawing({selectedSidebarTab}) {
  return (
    <Box>
      <Typography role="region"
      aria-labelledby="crayon-drawing-heading" variant="h6" sx={{ textTransform: 'capitalize', fontWeight: 'bold', 
        fontSize: '1.125rem', fontFamily: 'Work Sans, sans-serif', color: '#22242C' }}> 
        {selectedSidebarTab}
      </Typography>
      <Box
       
        sx={{
          minHeight: 400,
          height: 400,
          width: 550,
          overflowY: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      > 
        <img
          src={crayon_drawing}
          alt="Childs Crayon Drawing"
          style={{ width: '90%', height: 'auto' }}
        />
      </Box>
    </Box>
  )
}