import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AnimatedCounter from '../components/AnimatedCounter';
import { stats } from '../data/content';

export default function Stats() {
  return (
    <Box
      component="section"
      sx={{
        py: 6,
        bgcolor: 'background.default',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'rgba(207,194,212,0.3)',
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {stats.map((s) => (
            <Grid
              item
              xs={6}
              md={3}
              key={s.label}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <AnimatedCounter
                  value={s.value}
                  suffix={s.suffix}
                />

                <Typography
                  variant="overline"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  {s.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}