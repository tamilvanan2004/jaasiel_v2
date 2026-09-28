import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ComputerIcon from '@mui/icons-material/Computer';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import DomainIcon from '@mui/icons-material/Domain';
import EventIcon from '@mui/icons-material/Event';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { motion } from 'framer-motion';
import { industries } from '../data/content';

const iconMap = {
  computer: ComputerIcon,
  local_hospital: LocalHospitalIcon,
  school: SchoolIcon,
  domain: DomainIcon,
  event: EventIcon,
  account_balance: AccountBalanceIcon,
};

export default function Industries() {
  return (
    <Box id="industries" component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'surface.main' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto', mb: 8 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Industries We Serve
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tailored service solutions for diverse organizational sectors.
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="stretch">
          {industries.map((ind, i) => {
            const Icon = iconMap[ind.icon];
            return (
              <Grid
                size={{ xs: 12, md: 6, lg: 4 }}
                key={ind.title}
                sx={{ display: 'flex' }}
              >
                <Paper
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -3 }}
                  variant="outlined"
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    borderColor: 'rgba(207,194,212,0.3)',
                    width: '100%',
                    minHeight: 240,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
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
                    {Icon && <Icon />}
                  </Box>
                  <Typography variant="h3" sx={{ fontSize: '20px', mb: 1 }}>
                    {ind.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                    {ind.desc}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}