import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { logoUrl } from '../data/content';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: scrolled ? 'rgba(255,247,254,0.9)' : 'rgba(255,247,254,0.7)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid',
        borderColor: scrolled ? 'rgba(207,194,212,0.4)' : 'transparent',
        boxShadow: scrolled ? '0 4px 20px -4px rgba(30,15,45,0.08)' : 'none',
        transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: scrolled ? 72 : 88, transition: 'min-height 0.3s ease' }}>
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none', '&:hover': { opacity: 0.8 } }}>
            <Box component="img" src={logoUrl} alt="Jaasiel Logo" sx={{ height: scrolled ? 34 : 40, width: 'auto', transition: 'height 0.3s ease' }} />
            <Typography variant="h2" sx={{ fontSize: '24px', color: 'primary.main', display: { xs: 'none', sm: 'block' } }}>
              Jaasiel
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <DesktopNav />
            <MobileNav open={open} setOpen={setOpen} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}