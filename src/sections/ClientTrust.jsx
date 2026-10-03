import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// Logos are in /public/clients/ (unzip clients.zip there)
const clients = [
  { name: 'Maika Metals', logo: '/clients/maika-metals.png' },
  { name: 'IDBI Bank', logo: '/clients/idbi-bank.png' },
  { name: 'UE Press Tools Pvt Ltd', logo: '/clients/ue-press-tools.png' },
  { name: 'UE Press Tools Pvt Ltd (Ambattur)', logo: '/clients/ue-press-tools-ambattur.png' },
  { name: 'MPS Engineering Work', logo: '/clients/mps-engineering.png' },
  { name: 'Globe Engineering Solutions Pvt Ltd', logo: '/clients/globe-engineering.png' },
  { name: 'Lakshmi Industries', logo: '/clients/lakshmi-industries.png' },
  { name: 'PKR Complete Kitchen Solutions', logo: '/clients/pkr.png' },
  { name: 'Chennai Forge Products Pvt Ltd', logo: '/clients/chennai-forge.png' },
  { name: 'HM', logo: '/clients/hm.png' },
  { name: 'Dakshin Industries', logo: '/clients/dakshin-industries.png' },
  { name: 'Metal Forms Private Limited', logo: '/clients/metal-forms.png' },
];

export default function ClientTrust() {
  return (
    <Box component="section" sx={{ py: 6, bgcolor: 'background.paper', borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'rgba(207,194,212,0.3)', overflow: 'hidden' }}>
      <Container maxWidth="xl" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontSize: '20px', mb: 4 }}>
          Trusted by Organizations
        </Typography>

        <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', mb: 4 }}>
          <Box
            sx={{
              display: 'flex',
              width: 'max-content',
              animation: 'scrollLogos 40s linear infinite',
              '@keyframes scrollLogos': {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-50%)' },
              },
            }}
          >
            {[0, 1].map((rep) => (
              <Box key={rep} sx={{ display: 'flex', alignItems: 'center', gap: 4, px: 2, flexShrink: 0 }}>
                {clients.map((c) => (
                  <Box
                    key={c.name}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 1,
                      flexShrink: 0,
                      width: 200,
                      opacity: 0.5,
                      filter: 'grayscale(1)',
                      transition: 'opacity 0.3s ease, filter 0.3s ease',
                      '&:hover': { opacity: 1, filter: 'grayscale(0)' },
                    }}
                  >
                    <Box
                      component="img"
                      src={c.logo}
                      alt={`${c.name} logo`}
                      loading="lazy"
                      sx={{ width: 200, height: 70, objectFit: 'contain', display: 'block' }}
                    />
                    <Typography sx={{ fontSize: '14px', fontWeight: 700, lineHeight: 1.3, textAlign: 'center' }}>
                      {c.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 560, mx: 'auto' }}>
          Building long-term partnerships through consistent quality, professional service, and
          dependable operations.
        </Typography>
      </Container>
    </Box>
  );
}