import { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

// Replace image URLs with your own photos, e.g. import slide1 from '../assets/images/slide1.jpg';
const slides = [
  {
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1800&auto=format&fit=crop',
    label: 'Our Food',
    eyebrow: 'Quality Food. Reliable Service.',
    title: 'Fresh, Flavourful Food for Every Occasion',
    description:
      'Breakfast, lunch meals, dinner, biryani, snacks and sweets, prepared fresh with quality ingredients and authentic taste.',
    primary: { label: 'Plan Your Catering', to: '/contact' },
    secondary: { label: 'Explore Our Menu', href: '#services' },
    // Food gallery shown only on this slide. Replace with your own dish photos.
    foods: [
      {
        name: 'Breakfast',
        image: 'https://tse1.explicit.bing.net/th/id/OIP.ACznuuiJsS99dBLqp5_uegHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      },
      {
        name: 'Lunch Meals',
        image: 'https://i.pinimg.com/originals/8a/b6/99/8ab699f3818bb419ba77d035b8570d1a.jpg',
      },
      {
        name: 'Dinner',
        image: 'https://anantyaresorts.com/village/wp-content/uploads/2022/11/Food-image-2-1536x931.jpg',
      },
      {
        name: 'Add ons',
        image: 'https://tse1.mm.bing.net/th/id/OIP.LbwPA5uDaiB1oqXfFq4AZAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      },
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1800&auto=format&fit=crop',
    label: 'Our Services',
    eyebrow: 'Complete Catering Solutions',
    title: 'Catering for Weddings, Parties and Corporate Events',
    description:
      'From menu planning and cooking to serving and cleanup, we manage everything so you can enjoy your event.',
    primary: { label: 'Our Services', href: '#services' },
    secondary: { label: 'Get a Quote', to: '/contact' },
  },
  {
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1800&auto=format&fit=crop',
    label: 'Mission & Vision',
    eyebrow: 'Who We Are',
    title: 'Committed to Taste, Hygiene and Trust',
    description:
      'Our mission is to deliver tasty, hygienic and affordable food. Our vision is to be the most trusted catering name in our region.',
    primary: { label: 'About Us', to: '/about' },
    secondary: { label: 'Contact Us', to: '/contact' },
  },
  {
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1800&auto=format&fit=crop',
    label: 'Why Choose Us',
    eyebrow: 'Why Clients Trust Us',
    title: 'Fresh Ingredients, On-Time Service, Fair Pricing',
    description:
      'A hygienic kitchen and a trained serving team handle every order with the same care, from 20 guests to 2,000.',
    primary: { label: 'Book Now', to: '/contact' },
    secondary: { label: 'See Services', href: '#services' },
  },
  {
    image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=1800&auto=format&fit=crop',
    label: 'How It Works',
    eyebrow: 'Simple 3-Step Process',
    title: 'Share Details, Choose Your Menu, Enjoy Your Event',
    description:
      'Tell us your date, guest count and budget. We customise the menu, then cook, deliver and serve.',
    primary: { label: 'Get a Free Quote', to: '/contact' },
    secondary: { label: 'Call Us', href: 'tel:+910000000000' },
  },
];

const AUTO_PLAY_MS = 6000;
const pad = (n) => String(n).padStart(2, '0');

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: 0.15 + i * 0.12, ease: 'easeOut' },
  }),
};

const foodCard = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: 0.3 + i * 0.12, ease: 'easeOut' },
  }),
};

export default function Hero() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    []
  );

  // Preload images (backgrounds + food photos)
  useEffect(() => {
    slides.forEach((s) => {
      const img = new Image();
      img.src = s.image;
      (s.foods || []).forEach((f) => {
        const fi = new Image();
        fi.src = f.image;
      });
    });
  }, []);

  // Auto-advance; restarts after any manual change
  useEffect(() => {
    const timer = setTimeout(next, AUTO_PLAY_MS);
    return () => clearTimeout(timer);
  }, [index, next]);

  const slide = slides[index];
  const linkProps = (btn) => (btn.to ? { component: NavLink, to: btn.to } : { href: btn.href });

  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: 'relative',
        minHeight: { xs: 620, md: '90vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        bgcolor: '#0c0a14',
        pt: { xs: 10, md: 12 },
        pb: { xs: 16, md: 18 },
      }}
    >
      {/* Background image with crossfade + slow zoom */}
      <AnimatePresence initial={false}>
        <Box
          key={index}
          component={motion.div}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(12,10,20,0.9) 0%, rgba(12,10,20,0.65) 50%, rgba(12,10,20,0.25) 100%)',
        }}
      />

      {/* Slide content + optional food gallery */}
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { md: 6, lg: 10 },
          }}
        >
          {/* Left: text */}
          <Box
            key={index}
            component={motion.div}
            initial="hidden"
            animate="visible"
            sx={{ maxWidth: 680, minHeight: { md: 340 }, flex: '1 1 auto' }}
          >
            <Box
              component={motion.div}
              variants={fadeUp}
              custom={0}
              sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}
            >
              <Box sx={{ width: 44, height: 2, bgcolor: '#c084fc' }} />
              <Typography
                sx={{
                  color: '#e9d5ff',
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: 2.5,
                  textTransform: 'uppercase',
                }}
              >
                {slide.eyebrow}
              </Typography>
            </Box>

            <Typography
              component={motion.h1}
              variants={fadeUp}
              custom={1}
              variant="h1"
              sx={{
                color: '#fff',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                fontSize: { xs: '32px', sm: '42px', md: '54px' },
                lineHeight: { xs: 1.2, md: 1.15 },
                mb: 2.5,
              }}
            >
              {slide.title}
            </Typography>

            <Typography
              component={motion.p}
              variants={fadeUp}
              custom={2}
              sx={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: { xs: 15, md: 18 },
                lineHeight: 1.75,
                maxWidth: 560,
                mb: 4,
              }}
            >
              {slide.description}
            </Typography>

            <Box
              component={motion.div}
              variants={fadeUp}
              custom={3}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                {...linkProps(slide.primary)}
                sx={{ px: 4, py: 1.5, fontWeight: 700, textTransform: 'none', borderRadius: 1.5 }}
              >
                {slide.primary.label}
              </Button>
              <Button
                variant="outlined"
                size="large"
                {...linkProps(slide.secondary)}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  textTransform: 'none',
                  borderRadius: 1.5,
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.55)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', borderColor: '#fff' },
                }}
              >
                {slide.secondary.label}
              </Button>
            </Box>
          </Box>

          {/* Right: food gallery (only when the slide has foods) */}
          {slide.foods && (
            <Box
              key={`foods-${index}`}
              component={motion.div}
              initial="hidden"
              animate="visible"
              sx={{
                display: { xs: 'none', md: 'grid' },
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 2,
                width: { md: 380, lg: 440 },
                flexShrink: 0,
              }}
            >
              {slide.foods.map((f, i) => (
                <Box
                  key={f.name}
                  component={motion.div}
                  variants={foodCard}
                  custom={i}
                  sx={{
                    position: 'relative',
                    height: { md: 190, lg: 220 },
                    mt: i % 2 === 1 ? 4 : 0, // stagger the second column
                    borderRadius: 3,
                    overflow: 'hidden',
                    border: '3px solid rgba(255,255,255,0.9)',
                    boxShadow: '0 18px 45px rgba(0,0,0,0.45)',
                    '&:hover img': { transform: 'scale(1.08)' },
                  }}
                >
                  <Box
                    component="img"
                    src={f.image}
                    alt={f.name}
                    loading="lazy"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 0,
                      px: 1.8,
                      pt: 4,
                      pb: 1.4,
                      background: 'linear-gradient(to top, rgba(12,10,20,0.85), transparent)',
                    }}
                  >
                    <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>
                      {f.name}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Container>

      {/* Slider controls at the very bottom: numbered progress + arrows */}
      <Container
        maxWidth="xl"
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: { xs: 24, md: 36 },
          zIndex: 3,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 3 }}>
          <Box sx={{ display: 'flex', gap: { xs: 1, md: 2 }, flex: 1, maxWidth: 640 }}>
            {slides.map((s, i) => {
              const active = i === index;
              return (
                <Box
                  key={s.label}
                  component="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to ${s.label}`}
                  sx={{
                    flex: 1,
                    p: 0,
                    pt: 1.5,
                    border: 0,
                    bgcolor: 'transparent',
                    textAlign: 'left',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                >
                  {/* progress line */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      bgcolor: 'rgba(255,255,255,0.3)',
                      overflow: 'hidden',
                      borderRadius: 2,
                    }}
                  >
                    {active && (
                      <Box
                        key={index}
                        component={motion.div}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: AUTO_PLAY_MS / 1000, ease: 'linear' }}
                        style={{ transformOrigin: 'left' }}
                        sx={{ height: '100%', bgcolor: '#fff' }}
                      />
                    )}
                  </Box>
                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: active ? '#fff' : 'rgba(255,255,255,0.55)',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {pad(i + 1)}
                    <Box
                      component="span"
                      sx={{ display: { xs: 'none', md: 'inline' }, ml: 1, fontWeight: 600 }}
                    >
                      {s.label}
                    </Box>
                  </Typography>
                </Box>
              );
            })}
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            {[
              { fn: prev, icon: <ChevronLeftIcon />, label: 'Previous slide' },
              { fn: next, icon: <ChevronRightIcon />, label: 'Next slide' },
            ].map((a) => (
              <IconButton
                key={a.label}
                aria-label={a.label}
                onClick={a.fn}
                sx={{
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.5)',
                  '&:hover': { bgcolor: '#fff', color: '#14101f' },
                }}
              >
                {a.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}