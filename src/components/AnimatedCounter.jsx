import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import Typography from '@mui/material/Typography';

export default function AnimatedCounter({ value, suffix = '', duration = 1.4, sx }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    const decimals = value % 1 !== 0 ? 1 : 0;
    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const current = progress * value;
      setDisplay(decimals ? current.toFixed(decimals) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(step);
      else setDisplay(decimals ? value.toFixed(decimals) : value);
    };
    requestAnimationFrame(step);
  }, [inView, value, duration]);

  return (
    <Typography ref={ref} variant="h2" sx={{ color: 'primary.main', ...sx }}>
      {display}
      {suffix}
    </Typography>
  );
}
