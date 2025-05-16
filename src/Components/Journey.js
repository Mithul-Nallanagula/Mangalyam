import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  InputAdornment,
  FormHelperText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function JourneyFlexForm() {
  const [form, setForm] = useState({
    profile: '',
    gender: '',
    firstName: '',
    secondName: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (field) => (event) => {
    let value = event.target.value;

    if (field === 'phone') {
      value = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
      if (value.length > 10) {
        value = value.slice(0, 10); // Truncate to 10 digits
      }
    }

    setForm({ ...form, [field]: value });
    setErrors({ ...errors, [field]: '' }); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};
    if (!form.profile) newErrors.profile = 'Profile is required';
    if (!form.gender) newErrors.gender = 'Gender is required';
    if (!form.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!form.secondName.trim()) newErrors.secondName = 'Second name is required';

    const phoneTrimmed = form.phone.trim();
    if (!phoneTrimmed) {
      newErrors.phone = 'Phone number is required';
    } else if (phoneTrimmed.length !== 10) { // changed the regex to a length check
      newErrors.phone = 'Phone number must be 10 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      navigate('/create-account', { state: form });
    }
  };

  return (
    <Box
      sx={{
        minHeight: '80vh',
        px: 2,
        py: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#fff',
      }}
    >
      <Typography variant="caption" sx={{ color: 'orange', fontWeight: 600 }}>
        JOIN US TODAY
      </Typography>

      <Typography variant="h4" sx={{ fontWeight: 700, mt: 1, textAlign: 'center' }}>
        Your Journey to Love Starts Here
      </Typography>

      <Typography variant="body2" sx={{ mt: 1, mb: 4, textAlign: 'center', maxWidth: 500 }}>
        Unlock the Door to Love: Register Now for a Journey of Connections and Compatibility.
      </Typography>

      <Box
        sx={{
          width: '100%',
          maxWidth: 700,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
          <FormControl fullWidth size="small" error={!!errors.profile}>
            <InputLabel>Profile</InputLabel>
            <Select value={form.profile} label="Profile" onChange={handleChange('profile')}>
              <MenuItem value="self">My Self</MenuItem>
              <MenuItem value="parent">My Son/Daughter</MenuItem>
            </Select>
            <FormHelperText>{errors.profile}</FormHelperText>
          </FormControl>

          <FormControl fullWidth size="small" error={!!errors.gender}>
            <InputLabel>Gender</InputLabel>
            <Select value={form.gender} label="Gender" onChange={handleChange('gender')}>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
            <FormHelperText>{errors.gender}</FormHelperText>
          </FormControl>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
          <TextField
            fullWidth
            size="small"
            label="First Name"
            value={form.firstName}
            onChange={handleChange('firstName')}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
          <TextField
            fullWidth
            size="small"
            label="Second Name"
            value={form.secondName}
            onChange={handleChange('secondName')}
            error={!!errors.secondName}
            helperText={errors.secondName}
          />
        </Box>

        <TextField
          fullWidth
          size="small"
          label="Phone number"
          value={form.phone}
          onChange={handleChange('phone')}
          error={!!errors.phone}
          helperText={errors.phone}
          InputProps={{
            startAdornment: <InputAdornment position="start">IN +91 -</InputAdornment>,
          }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button variant="contained" sx={{ backgroundColor: '#f9a825', px: 4 }} onClick={handleSubmit}>
            Get started
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
