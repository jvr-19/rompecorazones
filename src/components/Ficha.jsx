import React from 'react'
import '../App.css'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import { useState } from 'react'


function Ficha({ animal, atribute, imageUrl, imageSize, description }) {

    // const datos = {
    //     animal: '',
    //     atribute: '',
    //     imageUrl: '',
    //     imageSize:{},
    //     description:'',
    // }

    const [count, setCount] = useState(0)

    function handleClick() {
        //alert('Eres un puto perro')
        setCount(count + 1)
    }

    return (
        <>

            <Stack
                direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'column' }}
                spacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                <Typography variant='h6'>
                    Hola soy un {animal} {atribute}
                </Typography>

                <Avatar
                    alt={description}
                    src={imageUrl}
                    width={imageSize}
                    height={imageSize}
                />

                {/* <Button variant='text' onClick={handleClick} size='medium' color='secondary'>Tocame la pita: {count} pitos</Button> */}
                {/* <Button variant='contained' onClick={handleClick} size='large' sx={{ color: 'white', backgroundColor: 'green' }}>Tocame la pita: {count} pitos</Button> */}
                <Button variant='outlined' onClick={handleClick} color='secondary'>Tocame la pita: {count} pitos</Button>

            </Stack>

        </>
    )
}

export default Ficha