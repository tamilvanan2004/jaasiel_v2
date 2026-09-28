import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/content';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <Box
      id="services"
      component="section"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default', position: 'relative', overflow: 'hidden' }}
    >
      {/* Decorative background accents */}
      <Box
        sx={{
          position: 'absolute',
          top: '-5%',
          right: '-8%',
          width: '30vw',
          height: '30vw',
          borderRadius: '50%',
          bgcolor: 'rgba(0,99,153,0.05)',
          filter: 'blur(110px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          left: '-6%',
          width: '24vw',
          height: '24vw',
          borderRadius: '50%',
          bgcolor: 'rgba(80,0,136,0.05)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto', mb: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 0.75,
              borderRadius: 999,
              bgcolor: 'rgba(80,0,136,0.06)',
              color: 'primary.main',
              border: '1px solid rgba(80,0,136,0.12)',
            }}
          >
            <DesignServicesIcon sx={{ fontSize: 16 }} />
            <Typography variant="overline">What We Offer</Typography>
          </Box>

          <Typography variant="h2">Our Core Services</Typography>

          <Typography variant="body2" color="text.secondary">
            Comprehensive service solutions designed to elevate your organizational standards and
            provide exceptional experiences for your people.
          </Typography>
        </Box>

        <Grid
          container
          spacing={4}
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {services.map((service, i) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={service.title}>
              <Box component={motion.div} variants={cardVariant} sx={{ height: '100%' }}>
                <ServiceCard service={service} index={i} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}