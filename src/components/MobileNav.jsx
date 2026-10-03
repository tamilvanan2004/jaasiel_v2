import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navLinks, logoUrl } from '../data/content';

const listItemVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, delay: 0.05 + i * 0.04, ease: 'easeOut' },
  }),
};

export default function MobileNav({ open, setOpen }) {
  const location = useLocation();
  const [expanded, setExpanded] = useState(null);

  const isLinkActive = (link) => {
    if (link.dropdown) return link.dropdown.some((item) => item.path === location.pathname);
    return link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path);
  };

  // When the drawer opens, auto-expand the dropdown that contains the current page
  useEffect(() => {
    if (open) {
      const activeDropdown = navLinks.find((l) => l.dropdown && isLinkActive(l));
      setExpanded(activeDropdown ? activeDropdown.label : null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <IconButton
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        sx={{
          display: { xs: 'inline-flex', lg: 'none' },
          color: 'text.primary',
          border: '1px solid rgba(207,194,212,0.4)',
          borderRadius: 2,
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={open}
        onClose={close}
        PaperProps={{
          sx: {
            width: { xs: '86%', sm: 340 },
            maxWidth: 360,
            bgcolor: '#fff',
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            boxShadow: '-12px 0 40px rgba(15,15,20,0.18)',
          },
        }}
      >
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} role="presentation">
          {/* Header */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 2.5,
              py: 2,
              background: 'linear-gradient(135deg, rgba(80,0,136,0.07), rgba(0,99,153,0.05))',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
              <Box component="img" src={logoUrl} alt="Jaasiel Logo" sx={{ height: 34, width: 'auto' }} />
              <Typography variant="h2" sx={{ fontSize: '19px', fontWeight: 800, color: 'primary.main' }}>
                Jaasiel
              </Typography>
            </Box>
            <IconButton
              onClick={close}
              aria-label="Close menu"
              sx={{ bgcolor: '#fff', border: '1px solid rgba(0,0,0,0.06)', '&:hover': { bgcolor: 'rgba(80,0,136,0.06)' } }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          <Divider sx={{ borderColor: 'rgba(207,194,212,0.3)' }} />

          {/* Links */}
          <List sx={{ px: 1.5, py: 2, flex: 1, overflowY: 'auto' }}>
            {navLinks.map((link, index) => {
              const isActive = isLinkActive(link);
              const isOpen = expanded === link.label;

              return (
                <ListItem
                  key={link.label}
                  disablePadding
                  component={motion.li}
                  custom={index}
                  initial="hidden"
                  animate={open ? 'visible' : 'hidden'}
                  variants={listItemVariants}
                  sx={{ display: 'block', mb: 0.5 }}
                >
                  {link.dropdown ? (
                    <>
                      <ListItemButton
                        onClick={() => setExpanded(isOpen ? null : link.label)}
                        sx={{
                          borderRadius: 2,
                          px: 2,
                          py: 1.4,
                          justifyContent: 'space-between',
                          bgcolor: isActive || isOpen ? 'rgba(80,0,136,0.06)' : 'transparent',
                          '&:hover': { bgcolor: 'rgba(80,0,136,0.05)' },
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: '15px',
                            fontWeight: isActive || isOpen ? 700 : 600,
                            color: isActive || isOpen ? 'primary.main' : 'text.primary',
                          }}
                        >
                          {link.label}
                        </Typography>
                        <ExpandMoreRoundedIcon
                          sx={{
                            fontSize: 22,
                            color: isActive || isOpen ? 'primary.main' : 'text.secondary',
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.25s ease',
                          }}
                        />
                      </ListItemButton>

                      <Collapse in={isOpen} timeout={250} unmountOnExit>
                        <Box
                          sx={{
                            ml: 2.5,
                            mt: 0.5,
                            mb: 0.75,
                            pl: 1,
                            borderLeft: '2px solid rgba(80,0,136,0.14)',
                          }}
                        >
                          {link.dropdown.map((item) => {
                            const itemActive = item.path === location.pathname;
                            return (
                              <ListItemButton
                                key={item.path}
                                component={NavLink}
                                to={item.path}
                                onClick={close}
                                sx={{
                                  borderRadius: 1.5,
                                  px: 1.75,
                                  py: 1.1,
                                  mb: 0.25,
                                  justifyContent: 'space-between',
                                  bgcolor: itemActive ? 'rgba(80,0,136,0.08)' : 'transparent',
                                  borderLeft: '3px solid',
                                  borderLeftColor: itemActive ? 'primary.main' : 'transparent',
                                  '&:hover': { bgcolor: 'rgba(80,0,136,0.05)' },
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontSize: '14px',
                                    fontWeight: itemActive ? 700 : 500,
                                    color: itemActive ? 'primary.main' : 'text.primary',
                                  }}
                                >
                                  {item.label}
                                </Typography>
                                <ChevronRightRoundedIcon
                                  sx={{ fontSize: 17, color: 'primary.main', opacity: itemActive ? 1 : 0.35 }}
                                />
                              </ListItemButton>
                            );
                          })}
                        </Box>
                      </Collapse>
                    </>
                  ) : (
                    <ListItemButton
                      component={NavLink}
                      to={link.path}
                      end={link.path === '/'}
                      onClick={close}
                      sx={{
                        borderRadius: 2,
                        px: 2,
                        py: 1.4,
                        bgcolor: isActive ? 'rgba(80,0,136,0.06)' : 'transparent',
                        '&:hover': { bgcolor: 'rgba(80,0,136,0.05)' },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '15px',
                          fontWeight: isActive ? 700 : 600,
                          color: isActive ? 'primary.main' : 'text.primary',
                        }}
                      >
                        {link.label}
                      </Typography>
                      {isActive && (
                        <Box
                          sx={{
                            ml: 'auto',
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                          }}
                        />
                      )}
                    </ListItemButton>
                  )}
                </ListItem>
              );
            })}
          </List>

          {/* Footer: contact + CTA */}
          <Box sx={{ p: 2.5, borderTop: '1px solid rgba(207,194,212,0.3)', bgcolor: 'rgba(80,0,136,0.02)' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75, mb: 2 }}>
              <Box component="a" href="tel:+917305940192" sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none', color: 'text.secondary' }}>
                <PhoneRoundedIcon sx={{ fontSize: 17, color: 'primary.main' }} />
                <Typography sx={{ fontSize: '13px', fontWeight: 500 }}>+91-7305940192</Typography>
              </Box>
              <Box component="a" href="mailto:info@jaasiel.in" sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none', color: 'text.secondary' }}>
                <EmailRoundedIcon sx={{ fontSize: 17, color: 'primary.main' }} />
                <Typography sx={{ fontSize: '13px', fontWeight: 500 }}>info@jaasiel.in</Typography>
              </Box>
            </Box>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              component={NavLink}
              to="/contact"
              onClick={close}
              sx={{ borderRadius: 2, py: 1.4, fontWeight: 700 }}
            >
              Request a Service
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}