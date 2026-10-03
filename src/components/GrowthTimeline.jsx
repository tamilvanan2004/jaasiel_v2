import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { motion } from 'framer-motion';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';

const timelineSteps = [
  {
    step: '01',
    year: '2018',
    title: 'Founded & First Contracts',
    description:
      'JJS Catering Service was founded with a team of 3 employees, securing its first 2 industrial catering contracts and laying the operational foundation for the business.',
    stat: '3 employees · 2 contracts',
  },
  {
    step: '02',
    year: '2020',
    title: 'Building Momentum',
    description:
      'The team grew to 8 employees while contracts expanded to 5, reflecting steady demand across manufacturing and institutional clients.',
    stat: '8 employees · 5 contracts',
  },
  {
    step: '03',
    year: '2026',
    title: 'Scaling Operations',
    description:
      'JJS scaled to a 20-member team managing 30 active contracts, extending its reach across manufacturing, healthcare, and education sectors.',
    stat: '20 employees · 30 contracts',
  },
];

const stepSolid = ['#1c5fd6', '#5a2fd6', '#c02b8f'];
const stepGradients = [
  'linear-gradient(135deg, #3fa9f5 0%, #1c5fd6 100%)',
  'linear-gradient(135deg, #5a2fd6 0%, #7a1fb0 100%)',
  'linear-gradient(135deg, #b02bc0 0%, #e0328f 100%)',
];

// Node positions along an ascending curve (percent from left, percent from bottom of the track).
// Values climb left -> right to visually represent growth.
const nodePositions = [
  { x: 10, y: 18 },
  { x: 50, y: 52 },
  { x: 90, y: 86 },
];

const TRACK_HEIGHT = 320;

const fadeIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.3 + i * 0.25, ease: [0.22, 1, 0.36, 1] },
  }),
};

const drawPath = {
  hidden: { pathLength: 0 },
  visible: { pathLength: 1, transition: { duration: 1.6, ease: 'easeInOut' } },
};

export default function GrowthTimeline() {
  // Build a smooth cubic path through the node positions (in SVG coordinate space 0-100 x, 0-100 y-inverted)
  const pts = nodePositions.map((p) => ({ x: p.x, y: 100 - p.y }));
  const pathD = `M ${pts[0].x} ${pts[0].y} 
    C ${(pts[0].x + pts[1].x) / 2} ${pts[0].y}, ${(pts[0].x + pts[1].x) / 2} ${pts[1].y}, ${pts[1].x} ${pts[1].y}
    C ${(pts[1].x + pts[2].x) / 2} ${pts[1].y}, ${(pts[1].x + pts[2].x) / 2} ${pts[2].y}, ${pts[2].x} ${pts[2].y}`;

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #0f1024 0%, #1a1b3a 100%)',
      }}
    >
      {/* Ambient glow blobs */}
      <Box
        sx={{
          position: 'absolute',
          top: '5%',
          left: '-6%',
          width: '30vw',
          height: '30vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(63,169,245,0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '0%',
          right: '-6%',
          width: '32vw',
          height: '32vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192,43,143,0.16) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 0.75,
              borderRadius: 999,
              bgcolor: 'rgba(255,255,255,0.06)',
              color: '#9ec8ff',
              border: '1px solid rgba(255,255,255,0.12)',
              mb: 2.5,
            }}
          >
            <TrendingUpRoundedIcon sx={{ fontSize: 16 }} />
            <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: '0.06em' }}>
              Our Journey
            </Typography>
          </Box>

          <Typography
            component="h2"
            sx={{
              fontSize: { xs: '28px', sm: '34px', md: '42px' },
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#fff',
              mb: 1.5,
            }}
          >
            An Upward{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #3fa9f5 0%, #c02b8f 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Trajectory
            </Box>
          </Typography>

          <Typography variant="body1" sx={{ maxWidth: 560, mx: 'auto', fontSize: '15.5px', color: 'rgba(255,255,255,0.65)' }}>
            From a small team with our first contracts to a growing force in industrial catering —
            our path forward, step by step.
          </Typography>
        </Box>

        {/* Desktop: ascending curve with nodes and attached cards */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'relative', height: TRACK_HEIGHT + 260 }}>
          {/* Large faded background step numerals for depth */}
          {nodePositions.map((pos, i) => (
            <Typography
              key={`bg-${i}`}
              sx={{
                position: 'absolute',
                left: `${pos.x}%`,
                top: `${(100 - pos.y) * (TRACK_HEIGHT / 100)}px`,
                transform: 'translate(-50%, -60%)',
                fontSize: '160px',
                fontWeight: 900,
                color: 'rgba(255,255,255,0.03)',
                lineHeight: 1,
                userSelect: 'none',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            >
              {timelineSteps[i].step}
            </Typography>
          ))}

          {/* SVG ascending path */}
          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: TRACK_HEIGHT, zIndex: 1 }}>
            <svg viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
              <defs>
                <linearGradient id="growthLine" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3fa9f5" />
                  <stop offset="50%" stopColor="#5a2fd6" />
                  <stop offset="100%" stopColor="#e0328f" />
                </linearGradient>
              </defs>
              <motion.path
                d={pathD}
                fill="none"
                stroke="url(#growthLine)"
                strokeWidth="0.6"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                variants={drawPath}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
              />
            </svg>
          </Box>

          {/* Nodes + cards positioned along the curve */}
          {nodePositions.map((pos, i) => {
            const item = timelineSteps[i];
            const topPx = (100 - pos.y) * (TRACK_HEIGHT / 100);
            return (
              <Box
                key={item.step}
                sx={{
                  position: 'absolute',
                  left: `${pos.x}%`,
                  top: `${topPx}px`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {/* Node */}
                <Box
                  component={motion.div}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={fadeIn}
                  sx={{
                    position: 'relative',
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: -6,
                      borderRadius: '50%',
                      border: '1.5px solid',
                      borderColor: `${stepSolid[i]}55`,
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '50%',
                      background: stepGradients[i],
                      boxShadow: `0 0 0 6px rgba(15,16,36,1), 0 8px 24px -4px ${stepSolid[i]}aa`,
                    }}
                  />
                  <Typography sx={{ position: 'relative', color: '#fff', fontWeight: 800, fontSize: '18px' }}>
                    {item.step}
                  </Typography>
                </Box>

                {/* Year tag */}
                <Box
                  sx={{
                    mt: 1,
                    px: 1.25,
                    py: 0.25,
                    borderRadius: 999,
                    bgcolor: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.14)',
                  }}
                >
                  <Typography sx={{ fontSize: '11.5px', fontWeight: 700, color: '#fff', letterSpacing: '0.04em' }}>
                    {item.year}
                  </Typography>
                </Box>

                {/* Connecting stem + card, always below the node regardless of curve height */}
                <Box sx={{ width: 2, height: 22, bgcolor: `${stepSolid[i]}55`, my: 0.5 }} />

                <Paper
                  component={motion.div}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeIn}
                  whileHover={{ y: -4 }}
                  elevation={0}
                  sx={{
                    width: 240,
                    p: 2.5,
                    borderRadius: 3,
                    bgcolor: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.35)',
                  }}
                >
                  <Typography sx={{ fontWeight: 700, fontSize: '15px', mb: 1, color: '#fff' }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: '12.5px', lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', mb: 1.75 }}>
                    {item.description}
                  </Typography>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      px: 1.25,
                      py: 0.4,
                      borderRadius: 999,
                      bgcolor: `${stepSolid[i]}22`,
                      color: stepSolid[i],
                      fontSize: '11.5px',
                      fontWeight: 700,
                    }}
                  >
                    {item.stat}
                  </Box>
                </Paper>
              </Box>
            );
          })}
        </Box>

        {/* Mobile: vertical gradient rail, simpler but same visual language */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', position: 'relative', pl: 4 }}>
          <Box
            sx={{
              position: 'absolute',
              left: 15,
              top: 8,
              bottom: 8,
              width: 2,
              background: 'linear-gradient(180deg, #3fa9f5 0%, #5a2fd6 50%, #e0328f 100%)',
              borderRadius: 999,
            }}
          />
          {timelineSteps.map((item, i) => (
            <Box key={item.step} sx={{ position: 'relative', mb: 5, pl: 3 }}>
              <Box
                sx={{
                  position: 'absolute',
                  left: -33,
                  top: 0,
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: stepGradients[i],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: '13px',
                  boxShadow: `0 0 0 4px #0f1024`,
                }}
              >
                {item.step}
              </Box>
              <Typography sx={{ fontWeight: 800, fontSize: '13px', color: stepSolid[i], mb: 0.75 }}>
                {item.year}
              </Typography>
              <Paper
                elevation={0}
                sx={{
                  p: 2.25,
                  borderRadius: 3,
                  bgcolor: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Typography sx={{ fontWeight: 700, fontSize: '14.5px', mb: 1, color: '#fff' }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: '12.5px', lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', mb: 1.5 }}>
                  {item.description}
                </Typography>
                <Box
                  sx={{
                    display: 'inline-flex',
                    px: 1.25,
                    py: 0.4,
                    borderRadius: 999,
                    bgcolor: `${stepSolid[i]}22`,
                    color: stepSolid[i],
                    fontSize: '11.5px',
                    fontWeight: 700,
                  }}
                >
                  {item.stat}
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}