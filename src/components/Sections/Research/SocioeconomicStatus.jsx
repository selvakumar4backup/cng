import { Box, Typography } from '@mui/material';

export default function SocioeconomicStatus({ selectedSidebarTab }) {
  return (
    <Box>
      <Typography variant="h6" id="Socioeconomic Status" component="h2"
      sx={{ textTransform: 'capitalize', fontWeight: 600, fontSize: '1.125rem', fontFamily: 'Work Sans, sans-serif', color: '#22242C' }}>
        {selectedSidebarTab}
      </Typography>
      <Box sx={{
        minHeight: 400,
        height: 400,
        width: 710,
        overflowY: 'auto',
        borderRadius: 1,
      }}>
        <Typography variant="subtitle1" component="div" sx={{ p: 1, fontFamily: 'Work Sans, sans-serif', color: '#22242C' }}>
          <ul>
            {/* <li>Socioeconomic Status and Post-Divorce Adjustment</li> */}
            <li>Socioeconomic status also plays a role in post-divorce adjustment for children. Socioeconomic status (SES) is a family's economic and social position in relation to others, based on income, education, and occupation. This includes how much money the family has, the neighborhood they live in, and the parents’ jobs (Baker, 2014).</li>
            <li>Families who experience parental divorce often also experience a decrease in SES and standard of living, especially for children and their primary caregiver but even for the nonresident parent (Mortelmans, 2020).</li>
            <li>Having a change, particularly a decline in SES, can often lead to other changes which can be stressful for a child including changing schools, moving, and leaving friends. These changes can also have a negative impact on kids (Kelly & Emery, 2003).</li>
          </ul>
          <Typography component="p" sx={{ fontWeight: 600 }}>
            References:
          </Typography>
          <p>Baker, E. H. (2014). Socioeconomic status, definition. <em>The Wiley Blackwell Encyclopedia of Health, Illness, Behavior, and Society</em>, 2210–2214. <a href="https://doi.org/10.1002/9781118410868.wbehibs395">https://doi.org/10.1002/9781118410868.wbehibs395</a></p>
          <p>Kelly, J. B., & Emery, R. E. (2003). Children's adjustment following divorce: Risk and resilience perspectives. <em>Family Relations: An Interdisciplinary Journal of Applied Family Studies</em>, 52(4), 352–362. <a href="https://doi.org/10.1111/j.1741-3729.2003.00352.x">https://doi.org/10.1111/j.1741-3729.2003.00352.x</a></p>
          <p>Mortelmans, D. (2020). Economic Consequences of Divorce: A Review. In: Kreyenfeld, M., Trappe, H. (eds) <em>Parental Life Courses after Separation and Divorce in Europe</em>. Life Course Research and Social Policies, vol 12. Springer, Cham. <a href="https://doi.org/10.1007/978-3-030-44575-1_2">https://doi.org/10.1007/978-3-030-44575-1_2</a></p>
        </Typography>
      </Box>
    </Box>
  );
}