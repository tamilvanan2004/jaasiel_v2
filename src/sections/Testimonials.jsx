import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AnimatePresence, motion } from 'framer-motion';
import { testimonials } from '../data/content';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Testimonials() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const perView = isMdUp ? 3 : 1;
  const [page, setPage] = useState(0);
  const maxPage = Math.max(0, testimonials.length - perView);

  const next = () => setPage((p) => (p >= maxPage ? 0 : p + 1));
  const prev = () => setPage((p) => (p <= 0 ? maxPage : p - 1));

  const touchStartX = useRef(null);
  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) prev();
    else if (delta < -50) next();
    touchStartX.current = null;
  };

  const visible = testimonials.slice(page, page + perView);

  return (
    <Box id="testimonials" component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'surface.main', overflow: 'hidden' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            What Our Clients Say
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Trusted by organizations for reliable service, quality, and professional execution.
          </Typography>
        </Box>

        <Box sx={{ position: 'relative' }} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <Box sx={{ display: 'flex', gap: 3, overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'flex', gap: 24, width: '100%' }}
              >
                {visible.map((t) => (
                  <Card
                    key={t.name}
                    sx={{
                      flex: `1 1 ${100 / perView}%`,
                      minWidth: 0,
                      borderRadius: 4,
                      borderTop: '4px solid',
                      borderColor: 'primary.main',
                      p: 1,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <Rating value={5} readOnly size="small" sx={{ mb: 2, color: '#faba72' }} />
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 4, flexGrow: 1 }}>
                        "{t.text}"
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar src={t.avatar} alt={t.name} sx={{ width: 56, height: 56 }} />
                        <Box>
                          <Typography variant="h3" sx={{ fontSize: '16px' }}>
                            {t.name}
                          </Typography>
                          <Typography variant="overline" color="text.secondary" sx={{ textTransform: 'none', fontWeight: 500 }}>
                            {t.role}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </AnimatePresence>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'space-between', position: 'absolute', top: '50%', left: -20, right: -20, transform: 'translateY(-50%)', pointerEvents: 'none' }}>
            <IconButton onClick={prev} sx={{ pointerEvents: 'auto', bgcolor: 'background.paper', boxShadow: 2 }} aria-label="Previous testimonial">
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
            <IconButton onClick={next} sx={{ pointerEvents: 'auto', bgcolor: 'background.paper', boxShadow: 2 }} aria-label="Next testimonial">
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 4 }}>
          {Array.from({ length: maxPage + 1 }).map((_, i) => (
            <Box
              key={i}
              onClick={() => setPage(i)}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: i === page ? 'primary.main' : 'outlineVariant.main' || 'grey.400',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
