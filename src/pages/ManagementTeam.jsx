import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import GroupsIcon from '@mui/icons-material/Groups';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { motion } from 'framer-motion';
import { managementTeam } from '../data/content';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// Mission & promise, from the company profile
const missionPromise = [
  {
    icon: FlagRoundedIcon,
    title: 'Our Mission',
    desc: 'To be your trusted partner in providing top-tier catering solutions that enhance employee satisfaction and productivity.',
  },
  {
    icon: FavoriteRoundedIcon,
    title: 'Our Promise',
    desc: 'Enriching, healthy, and innovative food, exceeding expectations at every step, using fresh, high-quality ingredients.',
  },
];

// Functional teams that run day-to-day operations, based on the deck's service and delivery process
const operationsTeams = [
  {
    icon: RestaurantRoundedIcon,
    title: 'Cloud Kitchen Team',
    desc: 'Prepares breakfast, lunch, dinner, and add-ons fresh every day, with menus tailored to industrial, healthcare, and education clients.',
  },
  {
    icon: WhatsAppIcon,
    title: 'Client Support Team',
    desc: 'Manages dedicated WhatsApp groups for each client, covering order placement, menu sharing, and real-time delivery updates.',
  },
  {
    icon: VerifiedRoundedIcon,
    title: 'Quality & Hygiene Team',
    desc: 'Enforces FSSAI food safety guidelines and hygiene protocols across preparation, packing, and handling.',
  },
  {
    icon: LocalShippingRoundedIcon,
    title: 'Delivery Team',
    desc: 'Trained, courteous drivers operating dedicated closed vehicles to deliver every meal on time, at the right temperature.',
  },
];

// Headcount growth, from the company milestones
const growthStats = [
  { value: '3', label: 'Team members at founding (2018)' },
  { value: '8', label: 'Team members by 2020' },
  { value: '20', label: 'Team members today' },
  { value: '30', label: 'Active client contracts' },
];

export default function ManagementTeam() {
  return (
    <Box
      id="management-team"
      component="section"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'left', mb: 6, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1.5 }}
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
              width: 'fit-content',
            }}
          >
            <GroupsIcon sx={{ fontSize: 16 }} />
            <Typography variant="overline">Our Management Team</Typography>
          </Box>
          <Typography variant="h2">Experienced Professionals, Strong Leadership</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 680 }}>
            JJS Catering Service, a division of Jaasiel Enterprises, is led by a young, dynamic
            team committed to delivering exceptional culinary experiences that satisfy both taste
            and nutritional needs, with the belief that great food fuels great work.
          </Typography>
        </Box>

        {/* Mission & Promise */}
        <Grid container spacing={2.5} sx={{ mb: { xs: 6, md: 8 } }}>
          {missionPromise.map((item) => {
            const Icon = item.icon;
            return (
              <Grid size={{ xs: 12, md: 6 }} key={item.title}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    display: 'flex',
                    gap: 2,
                    alignItems: 'flex-start',
                    height: '100%',
                    border: '1px solid rgba(80,0,136,0.12)',
                    background: 'linear-gradient(135deg, rgba(80,0,136,0.05), rgba(0,99,153,0.04))',
                  }}
                >
                  <Box
                    sx={{
                      width: 46,
                      height: 46,
                      borderRadius: '50%',
                      bgcolor: 'rgba(80,0,136,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon sx={{ color: 'primary.main', fontSize: 22 }} />
                  </Box>
                  <Box>
                    <Typography variant="h3" sx={{ fontSize: '18px', mb: 0.75 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {/* Leadership cards (from content.js) */}
        {managementTeam?.length > 0 && (
          <>
            <Typography variant="h3" sx={{ fontSize: '22px', mb: 3, textAlign: 'left' }}>
              Leadership
            </Typography>
            <Grid
              container
              spacing={3}
              component={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              sx={{ mb: { xs: 6, md: 8 } }}
            >
              {managementTeam.map((member) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={member.name}>
                  <Paper
                    component={motion.div}
                    variants={cardVariant}
                    whileHover={{ y: -6 }}
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      textAlign: 'center',
                      height: '100%',
                      border: '1px solid rgba(0,0,0,0.06)',
                      transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
                      '&:hover': {
                        boxShadow: '0 12px 28px -8px rgba(30,41,59,0.14)',
                        borderColor: 'rgba(80,0,136,0.15)',
                      },
                    }}
                  >
                    <Avatar
                      src={member.photo}
                      alt={member.name}
                      sx={{
                        width: 88,
                        height: 88,
                        mx: 'auto',
                        mb: 2,
                        bgcolor: 'rgba(80,0,136,0.1)',
                        color: 'primary.main',
                        fontSize: 28,
                        fontWeight: 700,
                      }}
                    >
                      {!member.photo && member.name.charAt(0)}
                    </Avatar>
                    <Typography variant="h3" sx={{ fontSize: '17px', mb: 0.5 }}>
                      {member.name}
                    </Typography>
                    <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 1 }}>
                      {member.role}
                    </Typography>
                    {member.bio && (
                      <Typography variant="body2" color="text.secondary">
                        {member.bio}
                      </Typography>
                    )}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </>
        )}

        {/* Operations teams */}
        <Typography variant="h3" sx={{ fontSize: '22px', mb: 1, textAlign: 'left' }}>
          The Teams Behind Every Meal
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 620, textAlign: 'left' }}>
          From the first WhatsApp order to the final delivery, dedicated teams keep every
          stage running to the same standard.
        </Typography>
        <Grid container spacing={2.5} sx={{ mb: { xs: 6, md: 8 } }}>
          {operationsTeams.map((team) => {
            const Icon = team.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={team.title}>
                <Paper
                  component={motion.div}
                  whileHover={{ y: -4 }}
                  elevation={0}
                  sx={{
                    p: 2.75,
                    borderRadius: 3,
                    height: '100%',
                    border: '1px solid rgba(0,0,0,0.06)',
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
                      mb: 2,
                    }}
                  >
                    <Icon sx={{ color: 'primary.main', fontSize: 22 }} />
                  </Box>
                  <Typography variant="h3" sx={{ fontSize: '16px', mb: 0.75 }}>
                    {team.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                    {team.desc}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {/* Growth stats */}
        <Grid container spacing={2.5} sx={{ mb: { xs: 6, md: 8 } }}>
          {growthStats.map((stat) => (
            <Grid size={{ xs: 6, md: 3 }} key={stat.label}>
              <Paper
                elevation={0}
                sx={{ p: 2.5, borderRadius: 3, height: '100%', border: '1px solid rgba(0,0,0,0.06)' }}
              >
                <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 800, mb: 0.5 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

  
      </Container>
    </Box>
  );
}