import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
} from '@mui/material';
import user1 from "../images/user1.png";
import user2 from "../images/user2.png";
import user3 from "../images/user3.png";
import user4 from "../images/user4.png";
import user5 from "../images/user5.png";
import user6 from "../images/user6.png";
import { ArrowDropDown } from '@mui/icons-material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import { useNavigate } from 'react-router-dom';

function Advsearch() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    age: '',
    height: '',
    religion: '',
    caste: '',
    subCaste: '',
    occupation: '',
    income: '',
  });
  const [search, setSearch] = useState('');
  const [view, setView] = useState(false);

  const ages = ['All', '18-25', '26-35', '36-45', '46+'];

  const users = [
    { name: 'Sravani Reddykonda', age: 26, height: "5ft 6in", phone: '912177', email: 'sravani@gmail.com', caste: 'Reddy', occupation: 'Engineer', religion: 'Hindu', image: user1 },
    { name: 'Anjali Mehta', age: 24, height: "5ft 2in", phone: '912199', email: 'anjali@gmail.com', caste: 'Patel', occupation: 'Doctor', religion: 'Hindu', image: user2 },
    { name: 'Ritika Sharma', age: 27, height: "5ft 3in", phone: '912122', email: 'ritika@gmail.com', caste: 'Brahmin', occupation: 'Teacher', religion: 'Hindu', image: user3 },
    { name: 'Priya Das', age: 25, height: "5ft 4in", phone: '912155', email: 'priya@gmail.com', caste: 'Kayastha', occupation: 'Designer', religion: 'Christian', image: user4 },
    { name: 'Neha Kumar', age: 28, height: "5ft 5in", phone: '912188', email: 'neha@gmail.com', caste: 'Kshatriya', occupation: 'Lawyer', religion: 'Muslim', image: user5 },
    { name: 'Pooja Iyer', age: 29, height: "5ft 7in", phone: '912166', email: 'pooja@gmail.com', caste: 'Iyer', occupation: 'Architect', religion: 'Hindu', image: user6 },
    { name: 'Meera Joshi', age: 30, height: "5ft 1in", phone: '912144', email: 'meera@gmail.com', caste: 'Joshi', occupation: 'Journalist', religion: 'Hindu', image: user3 },
    { name: 'Fatima Khan', age: 26, height: "5ft 5in", phone: '912199', email: 'fatima@gmail.com', caste: 'Syed', occupation: 'Data Analyst', religion: 'Muslim', image: user5 },
  ];

  const checkAgeRange = (age, range) => {
    if (range === 'All' || range === '') return true;
    if (range === '46+') return age >= 46;
    const [min, max] = range.split('-').map(Number);
    return age >= min && age <= max;
  };

  const filterUsers = () => {
    return users.filter((user) => {
      const ageMatch = checkAgeRange(user.age, filters.age);
      const heightMatch = !filters.height || user.height.includes(filters.height);
      const religionMatch = !filters.religion || user.religion.toLowerCase().includes(filters.religion.toLowerCase());
      const casteMatch = !filters.caste || user.caste.toLowerCase().includes(filters.caste.toLowerCase());
      const subCasteMatch = !filters.subCaste || user.caste.toLowerCase().includes(filters.subCaste.toLowerCase());
      const occupationMatch = !filters.occupation || user.occupation.toLowerCase().includes(filters.occupation.toLowerCase());
      const searchMatch = `${user.name} ${user.caste} ${user.occupation}`.toLowerCase().includes(search.toLowerCase());
      return ageMatch && heightMatch && religionMatch && casteMatch && subCasteMatch && occupationMatch && searchMatch;
    });
  };

  const filteredUsers = filterUsers();

  const handleFilterChange = (field) => (e) => {
    setFilters({ ...filters, [field]: e.target.value });
  };

  return (
    <Box sx={{ backgroundColor: '#fff', p: 2 }}>
      <Typography variant="h4" textAlign="center" fontWeight="600" mt={4}>Discover Your Perfect Match</Typography>
      <Typography variant="body1" textAlign="center" mt={1} mb={4} mx="auto" width={{ xs: '100%', sm: '70%' }}>
        Unlock a world of possibilities with our powerful features designed to make your journey to love seamless and joyful.
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
        {/* Left Filters */}
        <Box sx={{ p: 2, borderRadius: 2, width: { xs: '100%', md: '300px' }, flexShrink: 0 }}>
          <Typography fontWeight="bold" gutterBottom>Advance Search</Typography>

          <Typography fontWeight="bold" sx={{ color: 'orange', mb: 1 }}>Basic Details</Typography>
          <TextField select fullWidth size="small" value={filters.age} onChange={handleFilterChange('age')} sx={{ mb: 2 }}>
            {ages.map((range) => <MenuItem value={range} key={range}>{range}</MenuItem>)}
          </TextField>
          <TextField placeholder="e.g. 5ft 4in" fullWidth size="small" value={filters.height} onChange={handleFilterChange('height')} sx={{ mb: 3 }} />

          <Typography fontWeight="bold" sx={{ color: 'orange', mb: 1 }}>Caste & Religion</Typography>
          <TextField placeholder="Religion" fullWidth size="small" value={filters.religion} onChange={handleFilterChange('religion')} sx={{ mb: 2 }} />
          <TextField placeholder="Caste" fullWidth size="small" value={filters.caste} onChange={handleFilterChange('caste')} sx={{ mb: 2 }} />
          <TextField placeholder="Sub-Caste" fullWidth size="small" value={filters.subCaste} onChange={handleFilterChange('subCaste')} sx={{ mb: 2 }} />

          {view && (
            <>
              <Typography fontWeight="bold" sx={{ color: 'orange', mb: 1 }}>Professional Details</Typography>
              <TextField placeholder="Occupation" fullWidth size="small" value={filters.occupation} onChange={handleFilterChange('occupation')} sx={{ mb: 2 }} />
              <TextField placeholder="Income" fullWidth size="small" value={filters.income} onChange={handleFilterChange('income')} sx={{ mb: 2 }} />
            </>
          )}

          {!view ? (
            <Button fullWidth onClick={() => setView(true)} endIcon={<ArrowDropDown />} variant="contained" color="primary">Show More</Button>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button fullWidth onClick={() => setView(false)} endIcon={<ArrowDropUpIcon />} sx={{ backgroundColor: '#f9a825', color: '#fff' }}>Show Less</Button>
              <Button fullWidth onClick={() => setView(false)} endIcon={<EditCalendarOutlinedIcon />} sx={{ backgroundColor: 'gray', color: '#fff' }}>Edit</Button>
            </Box>
          )}
        </Box>

        {/* Right Results */}
        <Box sx={{ flex: 2 }}>
          <Typography variant="h6" fontWeight="600" mb={2}>
            Based on your preference
          </Typography>

          <TextField
            placeholder="Search by name, caste, or occupation"
            fullWidth
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ mb: 2 }}
          />

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              justifyContent: 'flex-start',
            }}
          >
            {filteredUsers.slice(0, 4).map((user, idx) => (
              <Box
                onClick={() => navigate('/login')}
                key={idx}
                sx={{
                  cursor: 'pointer',
                  display: 'flex',
                  width: { xs: '100%', sm: 'calc(50% - 8px)' },
                  border: '1px solid #e0e0e0',
                  borderRadius: 2,
                  p: 1,
                  backgroundColor: '#fff',
                  boxShadow: '0px 1px 5px rgba(0,0,0,0.1)',
                  minHeight: 150,
                }}
              >
                <Box
                  component="img"
                  src={user.image}
                  alt={user.name}
                  sx={{
                    width: '30%',
                    height: '100%',
                    borderRadius: '10%',
                    objectFit: 'cover',
                    mr: 2,
                  }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography fontWeight={600}>{user.name}</Typography>
                  <Typography fontSize="0.875rem" color="text.secondary">
                    {user.age} yrs | {user.height}
                  </Typography>
                  <Typography fontSize="0.875rem" mt={1}>📞 {user.phone}</Typography>
                  <Typography fontSize="0.875rem">📧 {user.email}</Typography>
                  <Typography fontSize="0.875rem">{user.caste}</Typography>
                  <Typography fontSize="0.875rem">{user.occupation}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Advsearch;
