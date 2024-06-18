// Search.js
import React, { useState } from 'react';
import { TextField, MenuItem, Grid } from '@mui/material';

const Search = ({ onSearch, onSort }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value, category, sortOption);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onSearch(searchTerm, e.target.value, sortOption);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    onSort(e.target.value);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={4}>
        <TextField
          fullWidth
          variant="outlined"
          label="Search Juices"
          value={searchTerm}
          onChange={handleSearch}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          select
          fullWidth
          variant="outlined"
          label="Filter by Category"
          value={category}
          onChange={handleCategoryChange}
        >
          <MenuItem value="">All Categories</MenuItem>
          <MenuItem value="Ordinary Drink">Ordinary Drink</MenuItem>
          <MenuItem value="Cocktail">Cocktail</MenuItem>
          {/* Add more categories as needed */}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          select
          fullWidth
          variant="outlined"
          label="Sort by"
          value={sortOption}
          onChange={handleSortChange}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="strDrink">Name (A-Z)</MenuItem>
          <MenuItem value="-strDrink">Name (Z-A)</MenuItem>
          {/* Add more sorting options */}
        </TextField>
      </Grid>
    </Grid>
  );
};

export default Search;
