import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import ThermostatRoundedIcon from '@mui/icons-material/ThermostatRounded';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup, Circle, Polyline, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const basePoint = { lat: 13.1180, lng: 80.1005, label: 'JJS Catering Service', sub: 'Thirumullaivoyal, Chennai' };

const coverageAreas = [
  { lat: 13.0982, lng: 80.1615, label: 'Ambattur' },
  { lat: 13.1147, lng: 80.0966, label: 'Avadi' },
  { lat: 13.1143, lng: 80.2088, label: 'Villivakkam' },
  { lat: 13.0505, lng: 80.1017, label: 'Poonamallee' },
  { lat: 13.0850, lng: 80.2101, label: 'Anna Nagar' },
  { lat: 13.0694, lng: 80.1948, label: 'Koyambedu' },
];

// Delivery commitments, drawn from the company's Service/Delivery process
const deliveryCommitments = [
  {
    icon: ScheduleRoundedIcon,
    title: 'Daily Order Cutoff',
    desc: 'Orders placed through our dedicated WhatsApp group before 10 AM are guaranteed same-day preparation and delivery.',
  },
  {
    icon: VerifiedRoundedIcon,
    title: 'FSSAI-Compliant Packing',
    desc: 'Every meal is packed in hot-food-grade containers, following strict food safety and hygiene protocols at every step.',
  },
  {
    icon: ThermostatRoundedIcon,
    title: 'Temperature-Controlled Transport',
    desc: 'Dedicated, closed vehicles are used exclusively for food transportation, preserving both temperature and hygiene en route.',
  },
  {
    icon: LocalShippingRoundedIcon,
    title: 'Punctual, Courteous Drivers',
    desc: 'Our delivery team is trained to prioritize on-time arrival while maintaining a professional, friendly service experience.',
  },
];

const baseIcon = L.divIcon({
  className: '',
  html: `<div style="
    width: 30px; height: 30px; border-radius: 50%; background:#006399;
    display:flex; align-items:center; justify-content:center;
    box-shadow: 0 0 0 8px rgba(0,99,153,0.22), 0 4px 12px rgba(0,0,0,0.3);
    border: 3px solid #fff;
  "><div style="width:9px;height:9px;background:#fff;border-radius:50%;"></div></div>`,
  iconSize: [30, 30],
  iconAnchor: [15, 15],
});

function areaIcon(index) {
  return L.divIcon({
    className: '',
    html: `<div style="position:relative; width:34px; height:34px; display:flex; align-items:center; justify-content:center;">
      <div style="
        position:absolute; inset:0; border-radius:50%;
        background: rgba(0,99,153,0.25);
        animation: jjsPulse 2s ease-out infinite;
      "></div>
      <div style="
        position:relative; width:26px; height:26px; border-radius:50%;
        background:#006399; border:3px solid #fff;
        display:flex; align-items:center; justify-content:center;
        box-shadow: 0 3px 10px rgba(0,0,0,0.35);
        color:#fff; font-size:11px; font-weight:800; font-family: sans-serif;
      ">${index + 1}</div>
    </div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
  });
}

function truckIcon(angleDeg) {
  return L.divIcon({
    className: '',
    html: `<div style="
      width: 34px; height: 34px; border-radius: 50%; background:#ffb020;
      display:flex; align-items:center; justify-content:center;
      box-shadow: 0 4px 14px rgba(0,0,0,0.35); border: 3px solid #fff;
      transform: rotate(${angleDeg}deg);
    ">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#181828">
        <path d="M3 13h1V6a1 1 0 011-1h9a1 1 0 011 1v2h2.5l2.5 3.2V17h-2a2 2 0 11-4 0H9a2 2 0 11-4 0H3v-4z"/>
      </svg>
    </div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
  });
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function bearing(from, to) {
  const toRad = (d) => (d * Math.PI) / 180;
  const toDeg = (r) => (r * 180) / Math.PI;
  const dLng = toRad(to.lng - from.lng);
  const y = Math.sin(dLng) * Math.cos(toRad(to.lat));
  const x =
    Math.cos(toRad(from.lat)) * Math.sin(toRad(to.lat)) -
    Math.sin(toRad(from.lat)) * Math.cos(toRad(to.lat)) * Math.cos(dLng);
  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

function AnimatedTruck() {
  const [position, setPosition] = useState([basePoint.lat, basePoint.lng]);
  const [angle, setAngle] = useState(0);
  const stateRef = useRef({ targetIndex: 0 });

  useEffect(() => {
    const DURATION_MS = 2800;
    const PAUSE_MS = 700;
    let raf;
    let start = performance.now();
    let paused = false;

    const step = (now) => {
      const s = stateRef.current;
      const from = s.targetIndex === 0 ? basePoint : coverageAreas[s.targetIndex - 1];
      const to = coverageAreas[s.targetIndex % coverageAreas.length];

      if (!paused) {
        const elapsed = now - start;
        const t = Math.min(elapsed / DURATION_MS, 1);
        const lat = lerp(from.lat, to.lat, t);
        const lng = lerp(from.lng, to.lng, t);
        setPosition([lat, lng]);
        setAngle(bearing(from, to));

        if (t >= 1) {
          paused = true;
          setTimeout(() => {
            s.targetIndex = (s.targetIndex + 1) % coverageAreas.length;
            start = performance.now();
            paused = false;
          }, PAUSE_MS);
        }
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return <Marker position={position} icon={truckIcon(angle)} zIndexOffset={1000} />;
}

export default function ServiceAreas() {
  return (
    <Box
      id="service-areas"
      component="section"
      sx={{ py: { xs: 7, md: 9 }, bgcolor: 'surface.main', position: 'relative', overflow: 'hidden' }}
    >
 
      <Box
        sx={{
          position: 'absolute',
          bottom: '5%',
          right: '-8%',
          width: '28vw',
          height: '28vw',
          borderRadius: '50%',
          bgcolor: 'rgba(0,99,153,0.06)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header — left aligned */}
    
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
              bgcolor: 'rgba(0,99,153,0.08)',
              color: 'secondary.main',
              border: '1px solid rgba(0,99,153,0.15)',
              width: 'fit-content',
            }}
          >
            <LocalShippingRoundedIcon sx={{ fontSize: 16 }} />
            <Typography variant="overline">Where We Deliver</Typography>
          </Box>
          <Typography variant="h2">Our Service Coverage</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 620 }}>
            Operating out of Thirumullaivoyal, we run dedicated delivery routes across
            Ambattur and its surrounding industrial and institutional hubs — every meal
            delivered hot, fresh, and on schedule.
          </Typography>
        </Box>

        {/* Map */}
        <Paper
          elevation={0}
          sx={{
            position: 'relative',
            borderRadius: 5,
            p: { xs: 1, md: 2 },
            border: '1px solid rgba(0,0,0,0.06)',
            bgcolor: '#fff',
            boxShadow: '0 16px 40px rgba(16,24,40,0.08)',
            overflow: 'hidden',
            mb: { xs: 6, md: 8 },
          }}
        >
          <Box sx={{ position: 'relative', width: '100%', height: { xs: 420, md: 560 }, borderRadius: 4, overflow: 'hidden' }}>
            <MapContainer
              center={[basePoint.lat, basePoint.lng]}
              zoom={12}
              scrollWheelZoom={false}
              style={{ width: '100%', height: '100%', background: '#eef3f6' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Circle
                center={[basePoint.lat, basePoint.lng]}
                radius={6000}
                pathOptions={{ color: '#006399', fillColor: '#006399', fillOpacity: 0.08, weight: 1.5, dashArray: '5 7' }}
              />
              <Circle
                center={[basePoint.lat, basePoint.lng]}
                radius={12000}
                pathOptions={{ color: '#006399', fillColor: '#006399', fillOpacity: 0.04, weight: 1.5, dashArray: '5 7' }}
              />

              {coverageAreas.map((area) => (
                <Polyline
                  key={`route-${area.label}`}
                  positions={[
                    [basePoint.lat, basePoint.lng],
                    [area.lat, area.lng],
                  ]}
                  pathOptions={{ color: '#006399', weight: 2.5, dashArray: '2 8', opacity: 0.5, lineCap: 'round' }}
                />
              ))}

              <Marker position={[basePoint.lat, basePoint.lng]} icon={baseIcon}>
                <Tooltip permanent direction="top" offset={[0, -14]} className="jjs-map-label jjs-map-label-base">
                  {basePoint.label}
                </Tooltip>
                <Popup>
                  <strong>{basePoint.label}</strong>
                  <br />
                  {basePoint.sub}
                </Popup>
              </Marker>

              {coverageAreas.map((area, i) => (
                <Marker key={area.label} position={[area.lat, area.lng]} icon={areaIcon(i)}>
                  <Tooltip permanent direction="top" offset={[0, -20]} className="jjs-map-label">
                    {area.label}
                  </Tooltip>
                </Marker>
              ))}

              <AnimatedTruck />
            </MapContainer>

            <Paper
              elevation={0}
              sx={{
                position: 'absolute',
                bottom: 12,
                left: 12,
                zIndex: 500,
                px: 2,
                py: 1.25,
                borderRadius: 2.5,
                bgcolor: 'rgba(255,255,255,0.92)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(0,0,0,0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: 0.75,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ffb020', border: '2px solid #fff', boxShadow: '0 0 0 2px rgba(255,176,32,0.3)' }} />
                <Typography sx={{ fontSize: '11.5px', fontWeight: 600 }}>Our Kitchen (HQ)</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 14, height: 14, borderRadius: '50%', bgcolor: '#006399', border: '2px solid #fff' }} />
                <Typography sx={{ fontSize: '11.5px', fontWeight: 600 }}>Drop Location</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ffb020', border: '2px solid #fff' }} />
                <Typography sx={{ fontSize: '11.5px', fontWeight: 600 }}>Live Delivery Route</Typography>
              </Box>
            </Paper>
          </Box>
        </Paper>

        {/* Coverage stats strip */}
        <Grid container spacing={2.5} sx={{ mb: { xs: 6, md: 8 } }}>
          {[
            { value: '6+', label: 'Delivery Zones Covered' },
            { value: '10 AM', label: 'Daily Order Cutoff' },
            { value: '24/7', label: 'Working Hours' },
            { value: '100%', label: 'FSSAI-Compliant Packing' },
          ].map((stat) => (
            <Grid size={{ xs: 6, md: 3 }} key={stat.label}>
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  borderRadius: 3,
                  textAlign: 'left',
                  border: '1px solid rgba(0,0,0,0.06)',
                  height: '100%',
                }}
              >
                <Typography variant="h3" sx={{ color: 'secondary.main', fontWeight: 800, mb: 0.5 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Delivery commitments */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" sx={{ mb: 1, textAlign: 'left' }}>
            Our Delivery Commitment
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 620, textAlign: 'left' }}>
            Every route we run is backed by the same standards — safety, punctuality, and
            hygiene — regardless of distance or destination.
          </Typography>
        </Box>

        <Grid container spacing={2.5}>
          {deliveryCommitments.map((item) => {
            const Icon = item.icon;
            return (
              <Grid size={{ xs: 12, sm: 6 }} key={item.title}>
                <Paper
                  component={motion.div}
                  whileHover={{ y: -4 }}
                  elevation={0}
                  sx={{
                    p: 2.75,
                    borderRadius: 3,
                    display: 'flex',
                    gap: 2,
                    alignItems: 'flex-start',
                    border: '1px solid rgba(0,0,0,0.06)',
                    height: '100%',
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      bgcolor: 'rgba(0,99,153,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon sx={{ color: 'secondary.main', fontSize: 22 }} />
                  </Box>
                  <Box>
                    <Typography variant="h3" sx={{ fontSize: '16px', mb: 0.5, textAlign: 'left' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left' }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <style>{`
        @keyframes jjsPulse {
          0% { transform: scale(0.8); opacity: 0.8; }
          70% { transform: scale(2.2); opacity: 0; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .jjs-map-label {
          background: #181828 !important;
          border: none !important;
          border-radius: 6px !important;
          padding: 4px 10px !important;
          font-size: 12.5px !important;
          font-weight: 800 !important;
          color: #fff !important;
          box-shadow: 0 3px 10px rgba(0,0,0,0.3) !important;
          letter-spacing: 0.02em;
        }
        .jjs-map-label::before { display: none !important; }
        .jjs-map-label-base {
          background: #ffb020 !important;
          color: #181828 !important;
        }
      `}</style>
    </Box>
  );
}