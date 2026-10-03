import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import CelebrationIcon from '@mui/icons-material/Celebration';
import { motion } from 'framer-motion';

const iconMap = {
  restaurant: RestaurantIcon,
  health_and_safety: HealthAndSafetyIcon,
  celebration: CelebrationIcon,
};

export default function ServiceCard({ service, index = 0 }) {
  const Icon = iconMap[service.icon];
  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      sx={{
        borderRadius: 4,
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid rgba(207,194,212,0.2)',
      }}
    >
      <Box sx={{ position: 'relative', height: 192, overflow: 'hidden' }}>
        <CardMedia
          component="img"
          image={service.image}
          alt={service.title}
          sx={{ height: '100%', width: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            width: 40,
            height: 40,
            borderRadius: '50%',
            bgcolor: 'rgba(255,255,255,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'primary.main',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          {Icon && <Icon fontSize="small" />}
        </Box>
      </Box>
      <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Typography variant="h3" sx={{ fontSize: '20px', mb: 1 }}>
          {service.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>
          {service.desc}
        </Typography>
        <Box
          component="a"
          href="#contact"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            color: 'primary.main',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500,
            mt: 'auto',
            '&:hover': { color: 'primary.light' },
          }}
        >
          Explore Service <ArrowForwardIcon sx={{ fontSize: 18 }} />
        </Box>
      </CardContent>
    </Card>
  );
}
