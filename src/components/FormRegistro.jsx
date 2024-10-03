import React from 'react'
import '../App.css'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid2'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'

import { useState } from 'react'


function FormRegistro() {
    const [data, setData] = useState({ name: '', breed: '' })

    const handleSubmit = (e) => {
        //Para que no mande el formulario, sino que haga lo que yo le diga
        e.preventDefault();
        // console.log(data)

    }

    const handleChangeName = (e) => {
        setData({
            ...data,
            name: e.target.value
        })
        //console.log(data)
    }


    const handleChangeBreed = (e) => {
        setData({
            ...data,
            breed: e.target.value
        })
    }

    return (
        <Container>
            <Paper elevation={3} square={false} sx={{ textAlign: 'center' }} >
                <Typography variant='h6' color='secondary' sx={{ mt: 2, mb: 2 }}>Registra tu mascota</Typography>
                <Box
                    component='form'
                    onSubmit={handleSubmit}
                >
                    <Grid container spacing={2} padding={1}>
                        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                            <TextField
                                required
                                label='Nombre Mascota'
                                variant='outlined'
                                fullWidth
                                color="secondary"
                                value={data.name}
                                onChange={handleChangeName}

                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
                            <TextField
                                label='Raza'
                                variant='outlined'
                                fullWidth
                                color="secondary"
                                value={data.breed}
                                onChange={handleChangeBreed}

                            />
                        </Grid>
                        <Grid size={12}>
                            <Button type='submit' variant='outlined' color='secondary' fullWidth>Registrar</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>

    )

}

export default FormRegistro