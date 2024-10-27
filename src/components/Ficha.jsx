import React from 'react'
import '../App.css'
import { CustomButton } from 'libreria';
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

                <CustomButton
                    text={`Tocame la pita: ${count} pitos`}
                    txtcolor='white'
                    bgcolor='purple'
                    size='medium'
                    onClick={handleClick}
                />

            </Stack>

        </>
    )
}

export default Ficha