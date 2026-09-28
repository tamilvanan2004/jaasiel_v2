import { useState } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import SendIcon from '@mui/icons-material/Send';

import { motion } from 'framer-motion';

const initialForm = {
  firstName: '',
  lastName: '',
  company: '',
  service: 'Corporate Catering',
  message: '',
};
//   
const contactInfo = [
  {
    icon: LocationOnIcon,
    title: 'Corporate Headquarters',
    lines: [
      '159, Vanjinathan street, Velammal New Town,',
      'Kamalam Nagar, Velammaal Newtown, Thirumullaivoyal',
      'Chennai, Tamil Nadu 600062',
    ],
  },
  {
    icon: MailIcon,
    title: 'Email Us',
    lines: [
      'inquiries@jaasiel.com',
      'support@jaasiel.com',
    ],
  },
  {
    icon: CallIcon,
    title: 'Call Us',
    lines: [
      '+91 07305940191',
      'Mon-Fri, 9am - 6pm EST',
    ],
  },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (field) => (event) => {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: event.target.value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [field]: '',
    }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.firstName.trim()) {
      nextErrors.firstName = 'First name is required';
    }

    if (!form.lastName.trim()) {
      nextErrors.lastName = 'Last name is required';
    }

    if (!form.company.trim()) {
      nextErrors.company = 'Company name is required';
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Message is required';
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setSuccess(true);
    setForm(initialForm);
    setErrors({});
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: {
          xs: 8,
          md: 12,
        },
        bgcolor: 'background.paper',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{
            xs: 6,
            md: 8,
            lg: 10,
          }}
          alignItems="stretch"
          justifyContent="center"
        >
          {/* =====================================================
              CONTACT INFORMATION
          ====================================================== */}

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              minWidth: 0,
            }}
          >
            <Box
              component={motion.div}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: '-80px',
              }}
              transition={{
                duration: 0.5,
              }}
              sx={{
                width: '100%',
                maxWidth: 560,
                mx: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {/* Heading */}

              <Typography
                variant="h2"
                sx={{
                  mb: 2,
                  textAlign: {
                    xs: 'center',
                    md: 'left',
                  },
                }}
              >
                Looking for a Reliable Service Partner?
              </Typography>

              {/* Description */}

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mb: 6,
                  maxWidth: 520,
                  lineHeight: 1.8,
                  textAlign: {
                    xs: 'center',
                    md: 'left',
                  },
                  mx: {
                    xs: 'auto',
                    md: 0,
                  },
                }}
              >
                Connect with our team to discuss how Jaasiel can tailor our
                professional services to meet your organization's unique
                requirements.
              </Typography>

              {/* Contact Details */}

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                }}
              >
                {contactInfo.map((contact) => {
                  const Icon = contact.icon;

                  return (
                    <Box
                      key={contact.title}
                      sx={{
                        display: 'flex',
                        gap: 2,
                        alignItems: 'flex-start',
                      }}
                    >
                      {/* Icon */}

                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          mt: 0.25,
                          borderRadius: '50%',
                          bgcolor: 'rgba(80,0,136,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'primary.main',
                          flexShrink: 0,
                        }}
                      >
                        <Icon />
                      </Box>

                      {/* Contact Text */}

                      <Box
                        sx={{
                          minWidth: 0,
                        }}
                      >
                        <Typography
                          variant="h3"
                          sx={{
                            fontSize: '18px',
                            mb: 0.75,
                            lineHeight: 1.3,
                          }}
                        >
                          {contact.title}
                        </Typography>

                        {contact.lines.map((line) => (
                          <Typography
                            key={line}
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              lineHeight: 1.7,
                              wordBreak: 'break-word',
                            }}
                          >
                            {line}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Grid>

          {/* =====================================================
              CONTACT FORM
          ====================================================== */}

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              minWidth: 0,
            }}
          >
            <Paper
              component={motion.form}
              onSubmit={handleSubmit}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: '-80px',
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              elevation={0}
              sx={{
                width: '100%',
                maxWidth: 600,
                mx: 'auto',

                p: {
                  xs: 2.5,
                  sm: 4,
                },

                borderRadius: 4,

                border:
                  '1px solid rgba(207,194,212,0.3)',

                bgcolor: 'background.default',
              }}
            >
              {/* Form title */}

              <Typography
                variant="h3"
                sx={{
                  fontSize: '20px',
                  mb: 3,
                  textAlign: {
                    xs: 'center',
                    md: 'left',
                  },
                }}
              >
                Request a Service Consultation
              </Typography>

              {/* =================================================
                  CSS GRID FORM
              ================================================== */}

              <Box
                sx={{
                  display: 'grid',

                  // One column on mobile
                  // Two columns on tablet/desktop
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'minmax(0, 1fr) minmax(0, 1fr)',
                  },

                  gap: 2.5,

                  width: '100%',
                }}
              >
                {/* =================================================
                    FIRST NAME
                ================================================== */}

                <TextField
                  fullWidth
                  label="First Name"
                  placeholder="John"
                  value={form.firstName}
                  onChange={handleChange('firstName')}
                  error={Boolean(errors.firstName)}
                  helperText={errors.firstName}
                />

                {/* =================================================
                    LAST NAME
                ================================================== */}

                <TextField
                  fullWidth
                  label="Last Name"
                  placeholder="Doe"
                  value={form.lastName}
                  onChange={handleChange('lastName')}
                  error={Boolean(errors.lastName)}
                  helperText={errors.lastName}
                />

                {/* =================================================
                    COMPANY NAME
                    SPAN BOTH COLUMNS
                ================================================== */}

                <Box
                  sx={{
                    gridColumn: {
                      xs: '1',
                      sm: '1 / -1',
                    },
                    width: '100%',
                  }}
                >
                  <TextField
                    fullWidth
                    label="Company Name"
                    placeholder="Organization Inc."
                    value={form.company}
                    onChange={handleChange('company')}
                    error={Boolean(errors.company)}
                    helperText={errors.company}
                  />
                </Box>

                {/* =================================================
                    SERVICE OF INTEREST
                    SPAN BOTH COLUMNS
                ================================================== */}

                <Box
                  sx={{
                    gridColumn: {
                      xs: '1',
                      sm: '1 / -1',
                    },
                    width: '100%',
                  }}
                >
                  <FormControl fullWidth>
                    <InputLabel id="service-label">
                      Service of Interest
                    </InputLabel>

                    <Select
                      labelId="service-label"
                      label="Service of Interest"
                      value={form.service}
                      onChange={handleChange('service')}
                    >
                      <MenuItem value="Corporate Catering">
                        Corporate Catering
                      </MenuItem>

                      <MenuItem value="Healthcare Catering">
                        Healthcare Catering
                      </MenuItem>

                      <MenuItem value="Event Management">
                        Event Management
                      </MenuItem>

                      <MenuItem value="Other Services">
                        Other Services
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                {/* =================================================
                    MESSAGE
                    SPAN BOTH COLUMNS
                ================================================== */}

                <Box
                  sx={{
                    gridColumn: {
                      xs: '1',
                      sm: '1 / -1',
                    },
                    width: '100%',
                  }}
                >
                  <TextField
                    fullWidth
                    multiline
                    minRows={4}
                    label="Message"
                    placeholder="Tell us about your needs..."
                    value={form.message}
                    onChange={handleChange('message')}
                    error={Boolean(errors.message)}
                    helperText={errors.message}
                  />
                </Box>

                {/* =================================================
                    SUBMIT BUTTON
                    SPAN BOTH COLUMNS
                ================================================== */}

                <Box
                  sx={{
                    gridColumn: {
                      xs: '1',
                      sm: '1 / -1',
                    },
                    width: '100%',
                  }}
                >
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={
                      <SendIcon fontSize="small" />
                    }
                    sx={{
                      minHeight: 52,
                      mt: 0.5,
                      borderRadius: 2,
                    }}
                  >
                    Submit Request
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* =======================================================
          SUCCESS MESSAGE
      ======================================================== */}

      <Snackbar
        open={success}
        autoHideDuration={5000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Alert
          onClose={() => setSuccess(false)}
          severity="success"
          variant="filled"
          sx={{
            width: '100%',
          }}
        >
          Thank you! Your consultation request has been received.
          Our team will be in touch shortly.
        </Alert>
      </Snackbar>
    </Box>
  );
}