import { Box, Typography } from '@mui/material';

export default function TakeExam() {
  return (
    <Box component="main" role="main" aria-labelledby="take-exam-heading" tabIndex={0}>
      <Typography variant="body1" sx={{ fontWeight: 'bold', fontFamily: 'Work Sans, sans-serif', mb: 1, mt: 0,
        fontSize: '1.125rem', color: '#22242C'  
       }}>
        Take the Exam
      </Typography>
      <Box sx={{
        minHeight: 400,
        height: 400,
        width: 725,
        overflowY: 'auto',
        borderRadius: 1,
        }}
        aria-label="Instructions for the exam decision activity"
        >
        <Typography variant="subtitle1" component="div" sx={{ fontFamily: 'Work Sans, sans-serif', m: 1, p: 0, color: '#22242C', fontSize: '1rem' }}>
          <Typography component="p" sx={{ mb: 1 }}>It’s time for you to make a decision about what you think would be best for Dana in these</Typography>
          <Typography component="p" sx={{ mb: 1 }}>circumstances. When you are ready to answer, continue to the Make a Decision activity. If you'd </Typography>
          <Typography component="p" sx={{ mb: 1 }}>like to go back and review the research and evidence in the case, you may go back and review those tabs.</Typography>
          <Typography component="p">Which area is most important for Dana’s parents to address to promote her adjustment?</Typography>
        </Typography>
      </Box>
    </Box>
  );
}