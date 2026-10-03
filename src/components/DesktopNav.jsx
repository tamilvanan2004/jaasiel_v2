import { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/content';

export default function DesktopNav() {
  return (
    <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 1 }}>
      {navLinks.map((link) =>
        link.dropdown ? (
          <NavDropdown key={link.label} link={link} />
        ) : (
          <NavItem key={link.path} link={link} />
        )
      )}
      <Button variant="contained" color="primary" component={NavLink} to="/contact" sx={{ ml: 1 }}>
        Request a Service
      </Button>
    </Box>
  );
}

function NavItem({ link }) {
  return (
    <Box
      component={NavLink}
      to={link.path}
      end={link.path === '/'}
      sx={{
        position: 'relative',
        textDecoration: 'none',
        cursor: 'pointer',
        px: 2,
        py: 1,
        borderRadius: 999,
        display: 'inline-flex',
        alignItems: 'center',
        transition: 'background-color 0.2s ease',
        '&:hover': { bgcolor: 'rgba(80,0,136,0.05)' },
      }}
    >
      {({ isActive }) => (
        <>
          <Typography
            component="span"
            variant="overline"
            sx={{
              color: isActive ? 'primary.main' : 'text.secondary',
              fontWeight: isActive ? 700 : 600,
              transition: 'color 0.2s ease',
            }}
          >
            {link.label}
          </Typography>
          {isActive && (
            <Box
              component={motion.div}
              layoutId="navbar-active-pill"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              sx={{
                position: 'absolute',
                left: 8,
                right: 8,
                bottom: 2,
                height: 2,
                borderRadius: 999,
                bgcolor: 'primary.main',
              }}
            />
          )}
        </>
      )}
    </Box>
  );
}

// Single-column dropdown: Sectors Served / Food Brands / Certifications
function NavDropdown({ link }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const closeTimer = useRef(null);
  const location = useLocation();

  const isActive = link.dropdown.some((item) => item.path === location.pathname);

  const handleOpen = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box onMouseEnter={handleOpen} onMouseLeave={handleClose} sx={{ position: 'relative' }}>
        <Box
          ref={anchorRef}
          onClick={() => setOpen((prev) => !prev)}
          sx={{
            position: 'relative',
            cursor: 'pointer',
            px: 2,
            py: 1,
            borderRadius: 999,
            display: 'inline-flex',
            alignItems: 'center',
            transition: 'background-color 0.2s ease',
            '&:hover': { bgcolor: 'rgba(80,0,136,0.05)' },
          }}
        >
          <Typography
            component="span"
            variant="overline"
            sx={{
              color: isActive || open ? 'primary.main' : 'text.secondary',
              fontWeight: isActive || open ? 700 : 600,
              transition: 'color 0.2s ease',
            }}
          >
            {link.label}
          </Typography>
          {isActive && !open && (
            <Box
              component={motion.div}
              layoutId="navbar-active-pill"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              sx={{
                position: 'absolute',
                left: 8,
                right: 8,
                bottom: 2,
                height: 2,
                borderRadius: 999,
                bgcolor: 'primary.main',
              }}
            />
          )}
        </Box>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          placement="bottom-start"
          sx={{ zIndex: 1300, pt: 1.25 }}
        >
          <AnimatePresence>
            {open && (
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={{ duration: 0.16, ease: 'easeOut' }}
                onMouseEnter={handleOpen}
                onMouseLeave={handleClose}
                sx={{
                  transformOrigin: 'top left',
                  borderRadius: 2,
                  overflow: 'hidden',
                  minWidth: 260,
                  bgcolor: '#ffffff',
                  boxShadow:
                    '0 12px 32px rgba(15,15,20,0.12), 0 2px 8px rgba(15,15,20,0.06)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  p: 0.75,
                }}
              >
                {link.dropdown.map((item, i) => {
                  const itemIsActive = item.path === location.pathname;
                  return (
                    <Box
                      key={item.path}
                      component={motion.div}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.15, delay: i * 0.03, ease: 'easeOut' }}
                    >
                      <Box
                        component={NavLink}
                        to={item.path}
                        onClick={() => setOpen(false)}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          textDecoration: 'none',
                          borderRadius: 1.5,
                          px: 2,
                          py: 1.35,
                          mb: i < link.dropdown.length - 1 ? 0.25 : 0,
                          bgcolor: itemIsActive ? 'rgba(80,0,136,0.06)' : 'transparent',
                          borderLeft: itemIsActive
                            ? '3px solid'
                            : '3px solid transparent',
                          borderLeftColor: itemIsActive ? 'primary.main' : 'transparent',
                          transition: 'background-color 0.15s ease, border-color 0.15s ease',
                          '&:hover': {
                            bgcolor: 'rgba(80,0,136,0.045)',
                          },
                          '&:hover .dropdown-chevron': {
                            opacity: 1,
                            transform: 'translateX(0)',
                          },
                          '&:hover .dropdown-label': {
                            color: 'primary.main',
                          },
                        }}
                      >
                        <Typography
                          className="dropdown-label"
                          sx={{
                            fontSize: '14px',
                            fontWeight: itemIsActive ? 700 : 500,
                            color: itemIsActive ? 'primary.main' : 'text.primary',
                            letterSpacing: '0.005em',
                            transition: 'color 0.15s ease',
                          }}
                        >
                          {item.label}
                        </Typography>
                        <ChevronRightRoundedIcon
                          className="dropdown-chevron"
                          sx={{
                            fontSize: 17,
                            color: 'primary.main',
                            opacity: itemIsActive ? 1 : 0,
                            transform: itemIsActive ? 'translateX(0)' : 'translateX(-4px)',
                            transition: 'opacity 0.15s ease, transform 0.15s ease',
                          }}
                        />
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            )}
          </AnimatePresence>
        </Popper>
      </Box>
    </ClickAwayListener>
  );
}