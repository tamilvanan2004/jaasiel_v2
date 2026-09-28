import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import StepConnector from '@mui/material/StepConnector';
import Paper from '@mui/material/Paper';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import RestaurantMenuRoundedIcon from '@mui/icons-material/RestaurantMenuRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import { motion } from 'framer-motion';

// JJS Catering Service's actual ordering & delivery process, from the company profile:
// WhatsApp ordering -> menu confirmation -> FSSAI-compliant packing -> dedicated delivery.
const process = [
  {
    num: '01',
    icon: WhatsAppIcon,
    title: 'Place Your Order',
    desc: 'Join our dedicated WhatsApp group to place orders, browse the daily menu, and get real-time updates — orders close at 10 AM each day to keep preparation on schedule.',
  },
  {
    num: '02',
    icon: RestaurantMenuRoundedIcon,
    title: 'Menu & Prep Begins',
    desc: 'Our cloud kitchen team confirms quantities and begins preparing fresh South Indian meals — breakfast, lunch, dinner, and add-ons — tailored to your sector\'s needs.',
  },
  {
    num: '03',
    icon: VerifiedRoundedIcon,
    title: 'Safe, Hygienic Packing',
    desc: 'Every meal is packed in hot-food-grade containers under strict FSSAI food safety guidelines, with rigorous hygiene protocols followed at every step.',
  },
  {
    num: '04',
    icon: LocalShippingRoundedIcon,
    title: 'On-Time Delivery',
    desc: 'Meals are delivered in dedicated, temperature-controlled transport by trained, courteous drivers who prioritize punctuality — every meal, every time.',
  },
];

const stepGradients = [
  'linear-gradient(135deg, #3fa9f5 0%, #1c5fd6 100%)',
  'linear-gradient(135deg, #5a2fd6 0%, #7a1fb0 100%)',
  'linear-gradient(135deg, #a02bc0 0%, #c02b8f 100%)',
  'linear-gradient(135deg, #e0328f 0%, #f0574f 100%)',
];

const CustomConnector = (props) => (
  <StepConnector
    {...props}
    sx={{
      display: { xs: 'none', md: 'block' },
      '&.MuiStepConnector-alternativeLabel': {
        top: 26,
        left: 'calc(-50% + 26px)',
        right: 'calc(50% + 26px)',
      },
      '& .MuiStepConnector-line': {
        borderColor: 'rgba(80,0,136,0.15)',
        borderTopWidth: 2,
        borderStyle: 'dashed',
      },
    }}
  />
);

const makeStepIcon = (index) =>
  function CustomStepIcon() {
    const Icon = process[index].icon;
    return (
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 2,
          background: stepGradients[index % stepGradients.length],
          boxShadow: `0 8px 20px -4px ${['#1c5fd6', '#5a2fd6', '#a02bc0', '#e0328f'][index % 4]}55`,
          border: '3px solid #fff',
        }}
      >
        <Icon sx={{ color: '#fff', fontSize: 24 }} />
        <Box
          sx={{
            position: 'absolute',
            bottom: -6,
            right: -6,
            width: 22,
            height: 22,
            borderRadius: '50%',
            bgcolor: '#fff',
            border: '2px solid',
            borderColor: 'rgba(80,0,136,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography sx={{ fontSize: '10px', fontWeight: 800, color: 'primary.main' }}>
            {process[index].num}
          </Typography>
        </Box>
      </Box>
    );
};

export default function Process() {
  return (
    <Box id="process" component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'surfaceContainerLow.main', position: 'relative', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'absolute',
          top: '-5%',
          right: '-10%',
          width: '30vw',
          height: '30vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(80,0,136,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto', mb: { xs: 6, md: 9 } }}>
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
              mb: 2.5,
            }}
          >
            <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: '0.06em' }}>
              How We Works
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ mb: 2, fontWeight: 800 }}>
            From WhatsApp Order to Your Table
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.8 }}>
            A simple, reliable process built for industrial catering — from placing your order
            to a hot, hygienic meal delivered right on time.
          </Typography>
        </Box>

        {/* Mobile: vertical stepper */}
        <Stepper
          alternativeLabel
          orientation="vertical"
          connector={<CustomConnector />}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          {process.map((step, index) => (
            <Step key={step.num} active expanded>
              <StepLabel
                StepIconComponent={makeStepIcon(index)}
                sx={{ '& .MuiStepLabel-label': { mt: 0.5, fontWeight: 700, color: 'text.primary' } }}
              >
                <Typography component="span" sx={{ fontSize: '18px', fontWeight: 700 }}>
                  {step.title}
                </Typography>
              </StepLabel>

              <StepContent sx={{ ml: 1.25, borderColor: 'rgba(80,0,136,0.15)', pb: index === process.length - 1 ? 0 : 4 }}>
                <Paper
                  component={motion.div}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  elevation={0}
                  sx={{
                    p: 3,
                    mt: 1,
                    borderRadius: 3,
                    border: '1px solid rgba(80,0,136,0.1)',
                    bgcolor: 'background.paper',
                  }}
                >
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {step.desc}
                  </Typography>
                </Paper>
              </StepContent>
            </Step>
          ))}
        </Stepper>

        {/* Desktop: horizontal stepper */}
        <Stepper
          alternativeLabel
          activeStep={process.length - 1}
          connector={<CustomConnector />}
          sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'stretch' }}
        >
          {process.map((step, index) => (
            <Step key={step.num} completed sx={{ flex: 1, px: 1.25 }}>
              <StepLabel
                StepIconComponent={makeStepIcon(index)}
                sx={{ '& .MuiStepLabel-label': { mt: 1.75, color: 'text.primary' } }}
              >
                <Typography variant="h3" sx={{ fontSize: '17px', fontWeight: 700, mb: 1 }}>
                  {step.title}
                </Typography>
              </StepLabel>

              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                elevation={0}
                sx={{
                  mt: 2,
                  p: 3,
                  minHeight: 160,
                  borderRadius: 3,
                  textAlign: 'center',
                  border: '1px solid rgba(80,0,136,0.1)',
                  bgcolor: 'background.paper',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 20px rgba(16,24,40,0.05)',
                  transition: 'box-shadow 0.25s ease',
                  '&:hover': { boxShadow: '0 12px 28px -6px rgba(80,0,136,0.15)' },
                }}
              >
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '13.5px' }}>
                  {step.desc}
                </Typography>
              </Paper>
            </Step>
          ))}
        </Stepper>
      </Container>
    </Box>
  );
}