import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { motion } from 'framer-motion';

// Logos live in /public/clients/ (unzip clients.zip there).
const clients = [
  { name: 'Maika Metals', logo: '../assets/images/clients/maika-metals.png' },
  { name: 'IDBI Bank', logo: '/clients/idbi-bank.png' },
  { name: 'UE Press Tools Pvt Ltd', logo: '/clients/ue-press-tools.png' },
  { name: 'UE Press Tools Pvt Ltd', tag: 'Ambattur', logo: '/clients/ue-press-tools-ambattur.png' },
  { name: 'MPS Engineering Work', logo: '/clients/mps-engineering.png' },
  { name: 'Globe Engineering Solutions Pvt Ltd', logo: '/clients/globe-engineering.png' },
  { name: 'Lakshmi Industries', logo: '/clients/lakshmi-industries.png' },
  { name: 'PKR Complete Kitchen Solutions', logo: '/clients/pkr.png' },
  { name: 'Chennai Forge Products Pvt Ltd', logo: '/clients/chennai-forge.png' },
  { name: 'HM', logo: '/clients/hm.png' },
  { name: 'Dakshin Industries', logo: '/clients/dakshin-industries.png' },
  { name: 'Metal Forms Private Limited', logo: '/clients/metal-forms.png' },
];

// Figures from the company milestones
const stats = [
  { value: `${clients.length}`, label: 'Trusted Client Partners' },
  { value: '30', label: 'Active Contracts' },
  { value: '8+', label: 'Years of Service' },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function GridClient() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 7, md: 11 },
        background: 'linear-gradient(180deg, #fbfbfd 0%, #f3f2f8 100%)',
        borderTop: '1px solid rgba(207,194,212,0.3)',
        borderBottom: '1px solid rgba(207,194,212,0.3)',
      }}
    >
      {/* Soft background glows */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          left: '-8%',
          width: '30vw',
          height: '30vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(80,0,136,0.07) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-12%',
          right: '-8%',
          width: '30vw',
          height: '30vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,99,153,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 0.75,
              mb: 2,
              borderRadius: 999,
              bgcolor: 'rgba(80,0,136,0.06)',
              color: 'primary.main',
              border: '1px solid rgba(80,0,136,0.12)',
            }}
          >
            <HandshakeRoundedIcon sx={{ fontSize: 16 }} />
            <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: '0.06em' }}>
              Our Clients
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{ fontSize: { xs: '26px', sm: '32px', md: '40px' }, fontWeight: 800, letterSpacing: '-0.02em', color: '#181828', mb: 1.5 }}
          >
            Trusted by{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #1c5fd6 0%, #c02b8f 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Leading Organizations
            </Box>
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.75 }}>
            Building long-term partnerships through consistent quality, professional service, and
            dependable operations.
          </Typography>
        </Box>

        {/* Stats strip */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            maxWidth: 720,
            mx: 'auto',
            mb: { xs: 5, md: 7 },
            bgcolor: '#fff',
            borderRadius: 3,
            border: '1px solid rgba(17,17,17,0.06)',
            boxShadow: '0 10px 28px rgba(16,24,40,0.06)',
            overflow: 'hidden',
          }}
        >
          {stats.map((s, i) => (
            <Box
              key={s.label}
              sx={{
                py: { xs: 2, md: 2.5 },
                px: 1,
                textAlign: 'center',
                borderLeft: i === 0 ? 'none' : '1px solid rgba(17,17,17,0.06)',
              }}
            >
              <Typography sx={{ fontSize: { xs: '22px', md: '30px' }, fontWeight: 800, color: 'primary.main', lineHeight: 1.1 }}>
                {s.value}
              </Typography>
              <Typography sx={{ fontSize: { xs: '11px', md: '13px' }, color: 'text.secondary', mt: 0.5, fontWeight: 500 }}>
                {s.label}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Logo grid: 2 per row on phones, 3 on tablets, 4 on desktops (12 clients = full rows) */}
        <Grid
          container
          spacing={{ xs: 1.5, sm: 2.5, md: 3 }}
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={stagger}
        >
          {clients.map((client) => (
            <Grid size={{ xs: 6, md: 4, lg: 3 }} key={`${client.name}-${client.tag || ''}`}>
              <Paper
                component={motion.div}
                variants={cardVariant}
                whileHover={{ y: -6 }}
                elevation={0}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  overflow: 'hidden',
                  bgcolor: '#fff',
                  border: '1px solid rgba(17,17,17,0.07)',
                  transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 18px 36px -12px rgba(80,0,136,0.25)',
                    borderColor: 'rgba(80,0,136,0.25)',
                  },
                  '&:hover .logo-img': { transform: 'scale(1.05)' },
                  '&:hover .card-accent': { transform: 'scaleX(1)' },
                }}
              >
                {/* Logo well: same size for every card, logo scaled to fit */}
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: 96, sm: 120, md: 140 },
                    px: { xs: 1.5, md: 3 },
                    py: { xs: 1.5, md: 2.5 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: '#fff',
                  }}
                >
                  <Box
                    className="logo-img"
                    component="img"
                    src={client.logo}
                    alt={`${client.name} logo`}
                    loading="lazy"
                    sx={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      transition: 'transform 0.35s ease',
                    }}
                  />
                </Box>

                {/* Gradient accent that draws in on hover */}
                <Box
                  className="card-accent"
                  sx={{
                    height: 3,
                    background: 'linear-gradient(90deg, #3fa9f5, #5a2fd6, #c02b8f)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.4s ease',
                  }}
                />

                {/* Company name */}
                <Box
                  sx={{
                    flex: 1,
                    px: { xs: 1.5, md: 2 },
                    py: { xs: 1.5, md: 2 },
                    textAlign: 'center',
                    bgcolor: 'rgba(17,17,17,0.02)',
                    borderTop: '1px solid rgba(17,17,17,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 0.5,
                  }}
                >
                  <Typography sx={{ fontSize: { xs: '12.5px', md: '14px' }, fontWeight: 700, lineHeight: 1.35, color: '#1a1a2e' }}>
                    {client.name}
                  </Typography>
                  {client.tag && (
                    <Box
                      sx={{
                        px: 1.25,
                        py: 0.2,
                        borderRadius: 999,
                        bgcolor: 'rgba(80,0,136,0.08)',
                        color: 'primary.main',
                        fontSize: '11px',
                        fontWeight: 700,
                      }}
                    >
                      {client.tag}
                    </Box>
                  )}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* CTA */}
        <Box sx={{ textAlign: 'center', mt: { xs: 5, md: 7 } }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Want your team to be our next success story?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="/contact"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{ px: 3.5, py: 1.3, fontWeight: 700, borderRadius: 2 }}
          >
            Request a Service
          </Button>
        </Box>
      </Container>
    </Box>
  );
}