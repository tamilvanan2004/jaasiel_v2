import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded';
import EmojiFoodBeverageRoundedIcon from '@mui/icons-material/EmojiFoodBeverageRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: 'easeOut' },
  }),
};

// Mission: slide 2 of the company profile.
const mission = {
  title: 'Our Mission',
  icon: FlagRoundedIcon,
  text: 'To be your trusted partner in providing top-tier catering solutions that enhance employee satisfaction and productivity.',
  points: [
    'Great food fuels great work',
    'Meals that satisfy both taste and nutritional needs',
    'Healthy, energizing food for the modern workplace',
  ],
};

// Vision: DRAFT wording. The company profile does not state a vision, so replace with your own.
const vision = {
  title: 'Our Vision',
  icon: VisibilityRoundedIcon,
  text: 'To be the most trusted name in industrial catering, known for fresh, healthy food and dependable service for every workforce we serve.',
  points: [
    'Grow across manufacturing, healthcare, and education',
    'Set the standard for hygiene and on-time delivery',
    'Build long-term partnerships with every client',
  ],
};

// Values: drawn from the deck's promise, delivery, and menu slides.
const values = [
  {
    icon: EmojiFoodBeverageRoundedIcon,
    title: 'Fresh, Quality Food',
    desc: 'Fresh, high-quality ingredients and diverse menus that suit varied tastes and dietary needs.',
  },
  {
    icon: VerifiedRoundedIcon,
    title: 'Safety & Hygiene',
    desc: 'FSSAI-compliant preparation, hot-food-grade packing, and rigorous hygiene protocols.',
  },
  {
    icon: ScheduleRoundedIcon,
    title: 'Punctuality',
    desc: 'Efficient service and dedicated transport so meals arrive on time, every time.',
  },
  {
    icon: SavingsRoundedIcon,
    title: 'Cost-Effective',
    desc: 'Delicious meals at honest prices, with breakfast starting from Rs 45 per meal.',
  },
  {
    icon: HandshakeRoundedIcon,
    title: 'Personalized Service',
    desc: 'A dedicated team that offers friendly, homely service and stays available through each client\'s WhatsApp group.',
  },
  {
    icon: FavoriteRoundedIcon,
    title: 'Exceeding Expectations',
    desc: 'Enriching, healthy, and innovative food, with every step done to go beyond what is expected.',
  },
];

function MissionVisionCard({ item, index, accent }) {
  const Icon = item.icon;
  return (
    <Paper
      component={motion.div}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      whileHover={{ y: -6 }}
      elevation={0}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        p: { xs: 3, md: 4.5 },
        height: '100%',
        borderRadius: 4,
        border: '1px solid rgba(17,17,17,0.06)',
        bgcolor: '#fff',
        boxShadow: '0 10px 28px rgba(16,24,40,0.06)',
      }}
    >
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5, background: accent }} />
      <Box
        sx={{
          position: 'absolute',
          top: -40,
          right: -40,
          width: 160,
          height: 160,
          borderRadius: '50%',
          background: accent,
          opacity: 0.07,
        }}
      />

      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: accent,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2.5,
          position: 'relative',
          boxShadow: '0 10px 22px -6px rgba(80,0,136,0.35)',
        }}
      >
        <Icon sx={{ color: '#fff', fontSize: 28 }} />
      </Box>

      <Typography variant="h3" sx={{ fontSize: { xs: '22px', md: '26px' }, fontWeight: 800, mb: 1.5, position: 'relative' }}>
        {item.title}
      </Typography>
      <Typography sx={{ fontSize: '16px', lineHeight: 1.75, color: '#3a3a4a', mb: 2.5, position: 'relative' }}>
        {item.text}
      </Typography>

      <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1, position: 'relative' }}>
        {item.points.map((p) => (
          <Box component="li" key={p} sx={{ display: 'flex', gap: 1.25, alignItems: 'flex-start' }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: accent, mt: '8px', flexShrink: 0 }} />
            <Typography sx={{ fontSize: '14.5px', color: '#4a4a5a', lineHeight: 1.6 }}>{p}</Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}

export default function MissionAndVision() {
  return (
    <Box sx={{ bgcolor: '#fafafa', py: { xs: 5, md: 8 }, position: 'relative', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'absolute',
          top: '-8%',
          right: '-8%',
          width: '30vw',
          height: '30vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(80,0,136,0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Breadcrumb */}
 

        {/* Header, left aligned */}
        <Box
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          sx={{ mb: { xs: 5, md: 7 }, maxWidth: 760 }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: '28px', sm: '34px', md: '42px' }, fontWeight: 800, letterSpacing: '-0.02em', color: '#1a1a2e', mb: 1.5 }}
          >
            Mission & Vision
          </Typography>
          <Typography sx={{ fontSize: { xs: '15px', md: '17px' }, color: 'text.secondary', lineHeight: 1.7 }}>
            JJS Catering Service, a division of Jaasiel Enterprises, believes that great food
            fuels great work. Here is what we stand for and where we are headed.
          </Typography>
        </Box>

        {/* Mission and Vision cards */}
        <Grid container spacing={3} sx={{ mb: { xs: 7, md: 10 } }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <MissionVisionCard
              item={mission}
              index={0}
              accent="linear-gradient(135deg, #3fa9f5 0%, #1c5fd6 100%)"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <MissionVisionCard
              item={vision}
              index={1}
              accent="linear-gradient(135deg, #7a1fb0 0%, #c02b8f 100%)"
            />
          </Grid>
        </Grid>

        {/* Promise banner */}
        <Paper
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          elevation={0}
          sx={{
            p: { xs: 3.5, md: 5 },
            mb: { xs: 7, md: 10 },
            borderRadius: 4,
            color: '#fff',
            background: 'linear-gradient(135deg, #181828 0%, #2a1a4a 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              bottom: -60,
              right: -60,
              width: 240,
              height: 240,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,176,32,0.25) 0%, transparent 70%)',
            }}
          />
          <Typography variant="overline" sx={{ color: '#ffb020', fontWeight: 700, letterSpacing: '0.08em' }}>
            Our Promise
          </Typography>
          <Typography
            sx={{ fontSize: { xs: '20px', md: '28px' }, fontWeight: 800, lineHeight: 1.35, mt: 1, maxWidth: 760, position: 'relative' }}
          >
            Enriching, healthy, and innovative food, exceeding expectations at every step.
          </Typography>
          <Typography sx={{ mt: 2, color: 'rgba(255,255,255,0.7)', maxWidth: 640, lineHeight: 1.7, position: 'relative' }}>
            We use fresh, high-quality ingredients to build menus for every taste and dietary
            need, and our efficient service makes sure your team gets their meals on time, every time.
          </Typography>
        </Paper>

        {/* Core values */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '24px', md: '32px' }, fontWeight: 800, mb: 1, textAlign: 'left' }}>
            What We Value
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 620, textAlign: 'left' }}>
            The principles behind every meal we prepare, pack, and deliver.
          </Typography>
        </Box>

        <Grid container spacing={2.5} sx={{ mb: { xs: 7, md: 10 } }}>
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={v.title}>
                <Paper
                  component={motion.div}
                  custom={i * 0.5}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 3,
                    border: '1px solid rgba(17,17,17,0.06)',
                    bgcolor: '#fff',
                    transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
                    '&:hover': {
                      boxShadow: '0 14px 30px -10px rgba(80,0,136,0.2)',
                      borderColor: 'rgba(80,0,136,0.18)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 46,
                      height: 46,
                      borderRadius: '50%',
                      bgcolor: 'rgba(80,0,136,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    <Icon sx={{ color: 'primary.main', fontSize: 22 }} />
                  </Box>
                  <Typography variant="h3" sx={{ fontSize: '17px', fontWeight: 700, mb: 0.75 }}>
                    {v.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {v.desc}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {/* CTA */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: 2.5,
            border: '1px solid rgba(80,0,136,0.14)',
            background: 'linear-gradient(135deg, rgba(80,0,136,0.05), rgba(0,99,153,0.05))',
          }}
        >
          <Box>
            <Typography variant="h3" sx={{ fontSize: '22px', fontWeight: 800, mb: 0.5 }}>
              Let us feed your team
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Talk to us about industrial, healthcare, or education catering.
            </Typography>
          </Box>
          <Button variant="contained" color="primary" href="/contact" sx={{ px: 3.5, py: 1.25, fontWeight: 700 }}>
            Request a Service
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}