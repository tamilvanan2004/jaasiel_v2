import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import WorkIcon from '@mui/icons-material/Work';
import VerifiedIcon from '@mui/icons-material/Verified';
import SettingsIcon from '@mui/icons-material/Settings';
import SyncIcon from '@mui/icons-material/Sync';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { motion } from 'framer-motion';
import { aboutHighlights, aboutMeta, aboutImage } from '../data/content';
import GrowthTimeline from '../components/GrowthTimeline';
import Process from '../sections/Process';
import MissionAndVision from '../components/MissionAndVision';
import ManagementTeam from './ManagementTeam';
import ServiceAreas from './ServiceAreas';
const iconMap = { work: WorkIcon, verified: VerifiedIcon, settings: SettingsIcon, sync: SyncIcon };

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function WhoWeAre() {
  return (
    <Box
      id="who-we-are"
      component="section"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: 'surface.main', position: 'relative', overflow: 'hidden' }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '-8%',
          width: '32vw',
          height: '32vw',
          borderRadius: '50%',
          bgcolor: 'rgba(80,0,136,0.06)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, lg: 5 }} sx={{ order: { xs: 2, lg: 1 } }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              sx={{ position: 'relative' }}
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  aspectRatio: '3 / 4',
                  boxShadow: '0 12px 32px -8px rgba(30,41,59,0.18)',
                }}
              >
                <Box
                  component="img"
                  src={aboutImage}
                  alt="JJS Catering Service team preparing meals in a modern cloud kitchen"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  loading="lazy"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 60%, rgba(20,10,30,0.45) 100%)',
                  }}
                />
              </Box>

              <Paper
                elevation={4}
                sx={{
                  position: 'absolute',
                  bottom: -28,
                  right: { xs: 16, md: -20 },
                  px: 3,
                  py: 2,
                  borderRadius: 3,
                  bgcolor: 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.5)',
                  textAlign: 'center',
                  minWidth: 120,
                }}
              >
                <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 700, lineHeight: 1 }}>
                 5+  
                </Typography>
                <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 0.5 }}>
                  Years of Trust
                </Typography>
              </Paper>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, lg: 7 }} sx={{ order: { xs: 1, lg: 2 } }}>
            <Box
              component={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
            >
              <Box component={motion.div} variants={fadeUp} sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
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
                    width: 'fit-content',
                  }}
                >
                  <VerifiedIcon sx={{ fontSize: 16 }} />
                  <Typography variant="overline">{aboutMeta.eyebrow}</Typography>
                </Box>

                <Typography variant="h2">{aboutMeta.title}</Typography>

                <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 620 }}>
                  JJS Catering Service, a division of Jaasiel Enterprises, has built a reputation for
                  delivering exceptional industrial catering solutions. Our young, dynamic team combines
                  culinary expertise with disciplined operations to keep manufacturing floors, hospitals,
                  and campuses running on well-fed, focused people.
                </Typography>
              </Box>

              <Grid container spacing={2.5} sx={{ mt: 0.5 }}>
                {aboutHighlights.map((h) => {
                  const Icon = iconMap[h.icon];
                  return (
                    <Grid size={{ xs: 12, sm: 6 }} key={h.title}>
                      <Box
                        component={motion.div}
                        variants={cardVariant}
                        whileHover={{ y: -4 }}
                        sx={{
                          display: 'flex',
                          gap: 2,
                          alignItems: 'flex-start',
                          p: 2,
                          borderRadius: 3,
                          border: '1px solid transparent',
                          transition: 'border-color 0.25s ease, background-color 0.25s ease',
                          '&:hover': {
                            bgcolor: 'rgba(80,0,136,0.03)',
                            borderColor: 'rgba(80,0,136,0.1)',
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            borderRadius: '50%',
                            bgcolor: 'rgba(80,0,136,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          {Icon && <Icon sx={{ color: 'primary.main', fontSize: 20 }} />}
                        </Box>
                        <Box>
                          <Typography variant="h3" sx={{ fontSize: '16px', mb: 0.5 }}>
                            {h.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {h.desc}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>

              <Paper
                component={motion.div}
                variants={fadeUp}
                elevation={0}
                sx={{
                  mt: 1,
                  p: 3,
                  borderRadius: 3,
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid rgba(80,0,136,0.12)',
                  background: 'linear-gradient(135deg, rgba(80,0,136,0.05), rgba(0,99,153,0.05))',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: -30,
                    right: -30,
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    bgcolor: 'rgba(80,0,136,0.06)',
                  }}
                />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5, position: 'relative' }}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      bgcolor: 'rgba(0,99,153,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PsychologyIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                  </Box>
                  <Typography variant="h3" sx={{ fontSize: '18px' }}>
                    Growing With Every Contract
                  </Typography>
                  <AutoAwesomeIcon sx={{ color: 'secondary.main', fontSize: 18, ml: 'auto', opacity: 0.6 }} />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ position: 'relative' }}>
                  From 3 employees and 2 contracts in our founding year to a 20-member team managing
                  30 active contracts today, our growth has been built on consistency, hygiene, and
                  service our clients can rely on.
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ mt: { xs: 8, md: 12 } }}>
        <GrowthTimeline />
      </Box>
      <Process/>
      <MissionAndVision/>
      <ManagementTeam/>
      <ServiceAreas/>
    </Box>
  );
}