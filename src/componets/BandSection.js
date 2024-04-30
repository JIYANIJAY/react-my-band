import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import CARDIMAGE from '../img/1.jpg'

export default function BandSection() {

    const cards = [{
        "image": { CARDIMAGE },
        "name": "image1"
    },
    {
        "image": { CARDIMAGE },
        "name": "image2"
    },
    {
        "image": { CARDIMAGE },
        "name": "image3"
    }]

    return (
        <>
            <Box
                sx={{
                    height: '700px'
                }}
            >
                <Container>
                    <Box className='flex-center-vertical' >
                        <Typography variant='h3' marginTop={10}>THE BAND</Typography>
                        <Typography color={'black'} marginTop={2}>
                            We have created a fictional band website.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                    </Box>

                    <Box marginTop={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-around'
                        }}
                    >
                        {cards.map((card, index) => (
                            <Card
                                sx={{ width: 350 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={CARDIMAGE}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                                        {card.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Container>
            </Box>
        </>
    )
}
