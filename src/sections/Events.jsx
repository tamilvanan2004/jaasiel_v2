import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import { events } from '../data/content';

export default function Events() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="xl" sx={{ textAlign: 'center' }}>
        <Typography variant="h2" sx={{ mb: 6 }}>
          We Create Experiences, Not Just Events
        </Typography>

        <Grid container spacing={2} sx={{ mb: 6 }}>
          {events.map((ev, i) => (
            <Grid size={{ xs: 6, md: 4 }} key={ev.label}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ scale: 1.02 }}
                sx={{
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  aspectRatio: '16 / 9',
                  cursor: 'pointer',
                }}
              >
                <Box
                  component="img"
                  src={ev.image}
                  alt={ev.label}
                  loading="lazy"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2,
                    bgcolor: 'rgba(0,0,0,0.4)',
                    transition: 'background-color 0.3s',
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.2)' },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{ color: 'white', fontWeight: 700, textAlign: 'center', fontSize: { xs: '14px', md: '20px' } }}
                  >
                    {ev.label}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Button variant="contained" color="primary" size="large" href="#contact">
          Plan Your Event With Us
        </Button>
      </Container>
    </Box>
  );
}