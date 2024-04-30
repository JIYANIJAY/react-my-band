import { Box, Typography } from '@mui/material'
import React from 'react'
import band from '../img/2.jpg'
export default function Hero() {
    return (
        <>
            <Box >
                <Box sx={{ position: 'relative', zIndex:-1}} className='hero-image' component={'img'} src={band} />
                <Box className='flex-center-vertical' marginTop={-12}>
                    <Typography variant='h4' color={'white'}>
                        New York
                    </Typography>
                    <Typography color={'white'}>
                        The atmosphere in New York is lorem ipsum.
                    </Typography>
                </Box>
            </Box>
        </>
    )
}
