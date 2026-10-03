import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ButtonBase from '@mui/material/ButtonBase';
import Chip from '@mui/material/Chip';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { motion, AnimatePresence } from 'framer-motion';
import foodServices from '../data/services';

/**
 * ServiceDetailPage
 *
 * A refined take on the Proodle-style layout: a left-hand column of sector
 * tabs (Manufacturing / Healthcare / Education / Corporates and Services)
 * and a right-hand content pane showing the hero image, heading, and
 * static body copy for whichever sector is selected.
 *
 * Each sector's copy lives in its own file under src/data/services/, so
 * content can be edited independently of this layout component.
 */
export default function ServiceDetailPage({ initialSlug }) {
  const initialIndex = Math.max(
    0,
    foodServices.findIndex((s) => s.slug === initialSlug)
  );
  const [activeIndex, setActiveIndex] = useState(
    initialIndex === -1 ? 0 : initialIndex
  );
  const active = foodServices[activeIndex];

  return (
    <Box
      sx={{
        bgcolor: '#fafafa',
        py: { xs: 5, md: 8 },
      }}
    >
      <Box sx={{ maxWidth: 1240, mx: 'auto', px: { xs: 2.5, md: 5 } }}>
        {/* Breadcrumb */}
        <Breadcrumbs
          separator={<NavigateNextRoundedIcon sx={{ fontSize: 16, color: 'text.disabled' }} />}
          sx={{ mb: 2.5, fontSize: 13 }}
        >
          <Link
            href="/"
            underline="hover"
            color="text.secondary"
            sx={{ fontSize: 13, fontWeight: 500 }}
          >
            <Typography color="text.secondary" fontSize={13} fontWeight={500}>
              Home
            </Typography>
          </Link>
          <Typography color="primary.main" fontSize={13} fontWeight={600}>
            {active.breadcrumb}
          </Typography>
        </Breadcrumbs>

        {/* Heading */}
        <Stack spacing={1.25} sx={{ mb: { xs: 4, md: 5 }, maxWidth: 720 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '26px', sm: '32px', md: '40px' },
              lineHeight: 1.15,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#1a1a2e',
            }}
          >
            {active.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '15px', md: '17px' },
              color: 'text.secondary',
              fontWeight: 400,
            }}
          >
            {active.tagline}
          </Typography>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '280px 1fr' },
            gap: { xs: 2, md: 4 },
            alignItems: 'start',
          }}
        >
          {/* Sidebar tabs */}
          <Stack
            spacing={1}
            sx={{
              position: { md: 'sticky' },
              top: { md: 24 },
              bgcolor: '#fff',
              borderRadius: 3,
              p: 1.25,
              border: '1px solid rgba(17,17,17,0.06)',
              boxShadow: '0 1px 2px rgba(16,24,40,0.04)',
            }}
          >
            {foodServices.map((service, i) => {
              const isActive = i === activeIndex;
              return (
                <ButtonBase
                  key={service.slug}
                  onClick={() => setActiveIndex(i)}
                  sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: 2.25,
                    py: 1.75,
                    borderRadius: 2,
                    bgcolor: isActive ? 'primary.main' : 'transparent',
                    color: isActive ? '#fff' : '#2c2c3a',
                    fontWeight: isActive ? 700 : 600,
                    fontSize: '15px',
                    textAlign: 'left',
                    transition: 'background-color 0.2s ease, color 0.2s ease, transform 0.15s ease',
                    '&:hover': {
                      bgcolor: isActive ? 'primary.main' : 'rgba(17,17,17,0.045)',
                      transform: isActive ? 'none' : 'translateX(2px)',
                    },
                  }}
                >
                  <span>{service.navLabel}</span>
                  <ArrowForwardIosRoundedIcon
                    sx={{
                      fontSize: 12,
                      opacity: isActive ? 1 : 0.35,
                      transition: 'opacity 0.2s ease',
                    }}
                  />
                </ButtonBase>
              );
            })}
          </Stack>

          {/* Content pane */}
          <AnimatePresence mode="wait">
            <Box
              component={motion.div}
              key={active.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <Box
                sx={{
                  bgcolor: '#fff',
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: '1px solid rgba(17,17,17,0.06)',
                  boxShadow: '0 4px 24px rgba(16,24,40,0.06)',
                }}
              >
                {/* Hero image */}
                <Box
                  sx={{
                    position: 'relative',
                    minHeight: { xs: 240, sm: 300, md: 360 },
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    component="img"
                    src={active.heroImage}
                    alt={active.heroHeading}
                    sx={{
                      width: '100%',
                      height: { xs: 240, sm: 300, md: 360 },
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(17,17,17,0.05) 0%, rgba(17,17,17,0.75) 100%)',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 0,
                      p: { xs: 3, md: 4.5 },
                    }}
                  >
                    <Chip
                      label={active.navLabel}
                      size="small"
                      sx={{
                        mb: 1.5,
                        bgcolor: 'rgba(255,255,255,0.16)',
                        color: '#fff',
                        fontWeight: 600,
                        letterSpacing: '0.02em',
                        backdropFilter: 'blur(4px)',
                      }}
                    />
                    <Typography
                      variant="h2"
                      sx={{
                        color: '#fff',
                        fontSize: { xs: '22px', sm: '26px', md: '32px' },
                        fontWeight: 800,
                        lineHeight: 1.25,
                        maxWidth: 520,
                        textShadow: '0 2px 12px rgba(0,0,0,0.25)',
                      }}
                    >
                      {active.heroHeading}
                    </Typography>
                  </Box>
                </Box>

                {/* Body copy */}
                <Box sx={{ p: { xs: 3, md: 4.5 } }}>
                  <Stack spacing={2} sx={{ mb: 4 }}>
                    {active.body.map((paragraph, i) => (
                      <Typography
                        key={i}
                        variant="body1"
                        sx={{
                          fontSize: '15.5px',
                          lineHeight: 1.75,
                          color: '#4a4a5a',
                        }}
                      >
                        {paragraph}
                      </Typography>
                    ))}
                  </Stack>

                  {active.highlights?.length > 0 && (
                    <Box
                      sx={{
                        bgcolor: 'rgba(17,17,17,0.02)',
                        border: '1px solid rgba(17,17,17,0.06)',
                        borderRadius: 2.5,
                        p: { xs: 2.5, md: 3 },
                      }}
                    >
                      <Typography
                        variant="overline"
                        sx={{
                          display: 'block',
                          mb: 1.75,
                          fontWeight: 700,
                          letterSpacing: '0.06em',
                          color: 'primary.main',
                          fontSize: '12px',
                        }}
                      >
                        Highlights
                      </Typography>
                      <Box
                        sx={{
                          display: 'grid',
                          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                          gap: 1.75,
                        }}
                      >
                        {active.highlights.map((point, i) => (
                          <Stack key={i} direction="row" spacing={1.25} alignItems="flex-start">
                            <CheckCircleRoundedIcon
                              sx={{ color: 'primary.main', fontSize: 20, mt: '1px', flexShrink: 0 }}
                            />
                            <Typography sx={{ fontSize: '14.5px', color: '#2c2c3a', lineHeight: 1.5 }}>
                              {point}
                            </Typography>
                          </Stack>
                        ))}
                      </Box>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          </AnimatePresence>
        </Box>
      </Box>
    </Box>
  );
}