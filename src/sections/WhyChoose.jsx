import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import VerifiedIcon from '@mui/icons-material/Verified';
import GroupsIcon from '@mui/icons-material/Groups';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SanitizerIcon from '@mui/icons-material/CleanHands';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { motion } from 'framer-motion';
import { whyChoose } from '../data/content';

const iconMap = {
  verified: VerifiedIcon,
  groups: GroupsIcon,
  design_services: DesignServicesIcon,
  schedule: ScheduleIcon,
  sanitizer: SanitizerIcon,
  trending_up: TrendingUpIcon,
};

export default function WhyChoose() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto', mb: 8 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Why Organizations Choose Jaasiel
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We deliver excellence through a commitment to quality, reliability, and innovation.
          </Typography>
        </Box>

        <Grid container spacing={5} alignItems="stretch">
          {whyChoose.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <Grid
                size={{ xs: 12, sm: 6, lg: 3 }}
                key={item.title}
                sx={{ display: 'flex' }}
              >
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    width: '100%',
                    minHeight: 220,
                  }}
                >
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      bgcolor: 'rgba(80,0,136,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'primary.main',
                      mb: 2,
                      flexShrink: 0,
                    }}
                  >
                    {Icon && <Icon sx={{ fontSize: 32 }} />}
                  </Box>
                  <Typography variant="h3" sx={{ fontSize: '18px', mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            );
          })}

          <Grid size={{ xs: 12, sm: 12, lg: 6 }} sx={{ display: 'flex' }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                p: 3,
                bgcolor: 'surface.main',
                borderRadius: 4,
                border: '1px solid rgba(0,99,153,0.3)',
                boxShadow: '0 4px 20px -2px rgba(30,41,59,0.05)',
                width: '100%',
                minHeight: 220,
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  bgcolor: 'rgba(0,99,153,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'secondary.main',
                  mb: 2,
                  flexShrink: 0,
                }}
              >
                <PsychologyIcon sx={{ fontSize: 32 }} />
              </Box>
              <Typography variant="h3" sx={{ fontSize: '18px', mb: 1, color: 'secondary.main' }}>
                Future-Ready Innovation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We are actively integrating AI-driven systems to enhance service efficiency, planning
                accuracy, and client experience across all operations.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}