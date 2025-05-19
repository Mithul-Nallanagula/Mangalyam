import React, { useState } from 'react';
import { Box, Typography, TextField, Button, MenuItem, Grid } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import ReligionData from '../Data/Religion.json';

const AdvancedSearch = () => {
  const [filters, setFilters] = useState({
    ageFrom: '',
    ageTo: '',
    heightFrom: '',
    heightTo: '',
    religion: '',
    caste: '',
    subCaste: '',
    occupation: '',
    income: '',
  });
  const [view, setView] = useState(false);
  const motherTongueOptions = [
  'Hindi', 'English', 'Bengali', 'Telugu', 'Marathi', 'Tamil', 'Urdu',
  'Gujarati', 'Kannada', 'Odia', 'Punjabi', 'Malayalam', 'Assamese',
  'Maithili', 'Santali', 'Kashmiri', 'Nepali', 'Konkani', 'Sindhi',
  'Dogri', 'Manipuri', 'Bodo', 'Santhali', 'Tulu', 'Other'
];
const maritalStatusOptions = [
  'Never Married', 'Divorced', 'Widowed', 'Separated'
];


  const ageOptions = ['18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40+'];
  const heightOptions = ["4'0\"", "4'1\"", "4'2\"", "4'3\"", "4'4\"", "4'5\"", "4'6\"", "4'7\"", "4'8\"", "4'9\"", "5'0\"", "5'1\"", "5'2\"", "5'3\"", "5'4\"", "5'5\"", "5'6\"", "5'7\"", "5'8\"", "5'9\"", "6'0\"", "6'1\"", "6'2\"", "6'3\"", "6'4\"+"];

  const handleFilterChange = (field) => (e) => {
    setFilters((prev) => {
      const newValue = e.target.value;
      const updated = { ...prev, [field]: newValue };

      // Reset dependent fields
      if (field === 'religion') {
        updated.caste = '';
        updated.subCaste = '';
      } else if (field === 'caste') {
        updated.subCaste = '';
      }

      return updated;
    });
  };

  const filteredHeightToOptions = filters.heightFrom
    ? heightOptions.slice(heightOptions.indexOf(filters.heightFrom) + 1)
    : heightOptions;

  const filteredAgeToOptions = filters.ageFrom
    ? ageOptions.slice(ageOptions.indexOf(filters.ageFrom) + 1)
    : ageOptions;

 const casteOptions = filters.religion ? ReligionData[filters.religion] || [] : [];
const selectedCaste = casteOptions.find(c => c.name === filters.caste);
const subCasteOptions = selectedCaste?.subcaste || [];

  return (
    <Box
      sx={{
        p: { xs: 0, md: 1 },
        borderRadius: 2,
        width: { xs: '100%', md: '230px' },
        flexShrink: 0,
        bgcolor: '#fff',
      }}
    >
      <Typography fontWeight="bold" gutterBottom fontSize={{ xs: 16, md: 18 }}>
        Advance Search
      </Typography>

      <Typography fontWeight="bold" sx={{ color: 'orange', mb: 1 }} fontSize={{ xs: 14, md: 16 }}>
        Basic Details
      </Typography>

      <Grid container spacing={1} sx={{ mb: 2 }}>
        <Grid item xs={6}>
          <TextField
            select
            fullWidth
            size="small"
            sx={{ minWidth:{xs:'150px',md:'110px' }}}
            
            value={filters.ageFrom}
            onChange={handleFilterChange('ageFrom')}
            label="Age From"
          >
            {ageOptions.map((age) => (
              <MenuItem key={age} value={age}>{age}</MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            select
            fullWidth
            size="small"
            sx={{minWidth:{xs:'150px',md:'110px' }}}
            value={filters.ageTo}
            onChange={handleFilterChange('ageTo')}
            label="Age To"
          >
            {filteredAgeToOptions.map((age) => (
              <MenuItem key={age} value={age}>{age}</MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      <Grid container spacing={1} sx={{ mb: 3 }}>
        <Grid item xs={6}>
          <TextField
            select
            fullWidth
            size="small"
sx={{minWidth:{xs:'150px',md:'110px' }}}
            value={filters.heightFrom}
            onChange={handleFilterChange('heightFrom')}
            label="Height From"
          >
            {heightOptions.map((h) => (
              <MenuItem key={h} value={h}>{h}</MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            select
            
            fullWidth
            size="small"
          sx={{minWidth:{xs:'150px',md:'110px' }}}
            value={filters.heightTo}
            onChange={handleFilterChange('heightTo')}
            label="Height To"
          >
            {filteredHeightToOptions.map((h) => (
              <MenuItem key={h} value={h}>{h}</MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      <TextField
  select
  fullWidth
  size="small"
   
  value={filters.motherTongue}
  onChange={handleFilterChange('motherTongue')}
  label="Mother Tongue"
>
  {motherTongueOptions.map((lang) => (
    <MenuItem key={lang} value={lang}>{lang}</MenuItem>
  ))}
</TextField>

<TextField
  select
  fullWidth
  sx={{marginTop:'15px', marginBottom:'5px'}}
  size="small"
  value={filters.maritalStatus}
  onChange={handleFilterChange('maritalStatus')}
  label="Marital Status"
>
  {maritalStatusOptions.map((status) => (
    <MenuItem key={status} value={status}>{status}</MenuItem>
  ))}
</TextField>


      <Typography fontWeight="bold" sx={{ color: 'orange', mb: 1 }} fontSize={{ xs: 14, md: 16 }}>
        Caste & Religion
      </Typography>
      <TextField
  select
  fullWidth
  size="small"
  value={filters.religion}
  onChange={handleFilterChange('religion')}
  sx={{ mb: 2 }}
  label="Religion"
>
  {Object.keys(ReligionData).map((religion) => (
    <MenuItem key={religion} value={religion}>{religion}</MenuItem>
  ))}
</TextField>

      {casteOptions.length > 0 && (
        <TextField
          select
          fullWidth
          size="small"
          value={filters.caste}
          onChange={handleFilterChange('caste')}
          sx={{ mb: 2 }}
          label="Caste"
        >
          {casteOptions.map((c) => (
            <MenuItem key={c.name} value={c.name}>{c.name}</MenuItem>
          ))}
        </TextField>
      )}

      {subCasteOptions.length > 0 && (
        <TextField
          select
          fullWidth
          size="small"
          value={filters.subCaste}
          onChange={handleFilterChange('subCaste')}
          sx={{ mb: 2 }}
          label="Sub-Caste"
        >
          {subCasteOptions.map((s) => (
            <MenuItem key={s} value={s}>{s}</MenuItem>
          ))}
        </TextField>
      )}

      {view && (
        <>
          <Typography fontWeight="bold" sx={{ color: 'orange', mb: 1 }} fontSize={{ xs: 14, md: 16 }}>
            Professional Details
          </Typography>
          <TextField
            placeholder="Occupation"
            fullWidth
            size="small"
            value={filters.occupation}
            onChange={handleFilterChange('occupation')}
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="Income"
            fullWidth
            size="small"
            value={filters.income}
            onChange={handleFilterChange('income')}
            sx={{ mb: 2 }}
          />
        </>
      )}

      {!view ? (
        <Button
          fullWidth
          onClick={() => setView(true)}
          endIcon={<ArrowDropDown />}
          variant="contained"
          sx={{
            backgroundColor: '#f9a825',
            color: '#fff',
            fontSize: { xs: 12, md: 14 },
            textTransform: 'none',
          }}
        >
          Show More
        </Button>
      ) : (
        <Box sx={{ display: 'flex', gap: { xs: 1, md: 1.5 }, flexDirection: { xs: 'column', sm: 'row' }, mt: 1 }}>
          <Button
            fullWidth
            onClick={() => setView(false)}
            endIcon={<ArrowDropUpIcon />}
            sx={{
              backgroundColor: '#f9a825',
              color: '#fff',
              height: '40px',
              fontSize: { xs: 11, md: 13 },
              textTransform: 'none',
            }}
          >
            Show Less
          </Button>
          <Button
            fullWidth
            onClick={() => setView(false)}
            endIcon={<EditCalendarOutlinedIcon />}
            sx={{
              backgroundColor: 'gray',
              color: '#fff',
              height: '40px',
              fontSize: { xs: 11, md: 13 },
              textTransform: 'none',
            }}
          >
            Edit
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default AdvancedSearch;