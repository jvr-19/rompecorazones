import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

function App() {
  const datos = {
    uno: 'perro',
    dos: 'soy',
    imageUrl: '/mercedes_clase_a_005_1920x1600c-1024x576.jpeg',
  }

  const [count, setCount] = useState(0)

  function handleClick() {
    //alert('Eres un puto perro')
    setCount(count + 1)
  }

  return (
    <>

      {/*<h1>Hola {datos.dos} un {datos.uno}</h1>*/}
      {/*<img className='avatar' src={datos.imageUrl} alt='coche'/>*/}
      <Stack
        direction={{ xs: 'column', sm: 'row', md: 'column', lg: 'column', xl: 'column' }}
        spacing={{ xs: 1, sm: 2, md: 4, lg: 4, xl: 4 }}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>

        <Typography variant='h1'>
          Hola {datos.dos} un {datos.uno}
        </Typography>

        <Avatar
          alt='Coche'
          src={datos.imageUrl}
          sx={{ width: 150, height: 150 }}
        />

        <Button variant='text' onClick={handleClick} size='medium' color='secondary'>Tocame la pita: {count} pitos</Button>
        <Button variant='contained' onClick={handleClick} size='large' sx={{ color: 'green', backgroundColor: 'green' }} disabled>Tocame la pita: {count} pitos</Button>
        <Button variant='outline' onClick={handleClick} size='small' color='error'>Tocame la pita: {count} pitos</Button>


        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={8}>
              <Button variant="outlined">size={8}</Button>
            </Grid>
            <Grid size={4}>
              <Button variant="outlined">size={4}</Button>
            </Grid>
            <Grid size={4}>
              <Button variant="outlined">size={4}</Button>
            </Grid>
            <Grid size={8}>
              <Button variant="outlined">size={8}</Button>
            </Grid>
          </Grid>
        </Box>
      </Stack>

    </>
  )
}

export default App
