import { Box } from '@mui/material'
import React from 'react'
import CITY from '../img/3.jpg'

export default function MiddelImage() {
    return (
        <>
            <Box component={'img'} src={CITY} width={'100%'} marginTop={10} />
        </>
    )
}
