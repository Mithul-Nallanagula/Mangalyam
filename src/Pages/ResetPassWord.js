import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import loginImage from '../images/Mangalyam_text.png'; // Replace with correct path

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (newPassword !== reEnterPassword) {
      setError(true);
    } else {
      setError(false);
      // Submit password logic here
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#fff"
      px={2}
    >
      <Box
        component="img"
        src={loginImage}
        alt="Maangalyam Logo"
        sx={{ height: 60, marginBottom: 2 }}
      />
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Reset Password
      </Typography>
      <Typography variant="body2" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur
      </Typography>

      <Box width="100%" maxWidth="350px" mt={2}>
        <TextField
          fullWidth
          label="Email"
          placeholder="Your mail ID"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="New Password"
          placeholder="Enter here"
          type="password"
          variant="outlined"
          margin="normal"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <TextField
          fullWidth
          label="Re Enter"
          placeholder="Enter here"
          type="password"
          variant="outlined"
          margin="normal"
          value={reEnterPassword}
          onChange={(e) => setReEnterPassword(e.target.value)}
          error={error}
          helperText={error ? "Doesn't match" : ''}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, backgroundColor: '#f6b301', color: '#fff' }}
          onClick={handleSubmit}
        >
          Set Password
        </Button>
      </Box>
    </Box>
  );
};

export default ResetPassword;
