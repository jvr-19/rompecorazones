import React from 'react';
import './App.css'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';

function AppGrid() {

  return (
    <>
        <Grid container>
          <Grid size={{xs: 12, sm: 4, md: 6, lg: 2, xl: 12}}>
            <Button variant="outlined" fullWidth>1</Button>
          </Grid>
          <Grid size={{xs: 12, sm: 4, md: 6, lg: 2, xl: 12}}>
            <Button variant="contained" fullWidth>2</Button>
          </Grid>
          <Grid size={{xs: 12, sm: 4, md: 6, lg: 2, xl: 12}}>
            <Button variant="contained" fullWidth>3</Button>
          </Grid>
        </Grid>
    </>
  )
}

export default AppGrid
