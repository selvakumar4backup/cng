import { Box, Typography } from '@mui/material';
import custody_aggrement from '../../../assets/custody_agreement.jpg';

export default function CustodyForm({selectedSidebarTab}) {
  return (
    <Box role="region"
      aria-labelledby="custody-form-heading" sx={{ minHeight: 400, height: 400, width: 725,  borderRadius: 1, }}>
      <Typography id="custody-form-heading" variant="h6" sx={{ textTransform: 'capitalize', fontWeight: 'bold', fontSize: '1.125rem', 
        fontFamily: 'Work Sans, sans-serif', color: '#22242C' }}>
        {selectedSidebarTab}
      </Typography>
      <Box
        sx={{
          minHeight: 400,
          height: 400,
          width: 725,
          overflowY: 'auto',
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
        }}
      >
        <img
          src={custody_aggrement}
          alt="Child Custody Form Preview"
          style={{ width: '90%', height: 'auto' }}
        />
      </Box>
    </Box>
  );
}