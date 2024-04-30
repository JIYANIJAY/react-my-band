import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Container, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import '../css/Main.css'
import CARDIMAGE from '../img/1.jpg'

export default function TourDates() {

    const tours = ['sold out', 'Ssold out', 'Dec'];
    const cards = [{
        "image": { CARDIMAGE },
        "name": "image1",
        "date": "27/05/2024"
    },
    {
        "image": { CARDIMAGE },
        "name": "image2",
        "date": "28/05/2024"
    },
    {
        "image": { CARDIMAGE },
        "name": "image3",
        "date": "29/05/2024"
    }]
    return (
        <>
            <Box
                className='tour-section'
            >
                <Container>
                    <Box className='flex-center-vertical'>
                        <Typography variant='h3' color={'white'} marginTop={5}>
                            TOUR DATES
                        </Typography>
                        <Typography marginTop={2} fontStyle={'italic'} color={'white'}>
                            Remember to book your tickets!
                        </Typography>
                    </Box>

                    <Box
                        className="flex-center-vertical"
                        marginTop={5}
                    >
                        <Box
                            sx={{
                                bgcolor: 'white',
                                width: '70%'
                            }}
                        >
                            <Stack

                                marginLeft={2} spacing={2} marginTop={2} marginBottom={2} marginRight={2}>
                                {tours.map((tour, index) => (
                                    <React.Fragment key={index}>
                                        <Stack
                                            className='flex-start-center'
                                            direction={'row'} spacing={2}>
                                            <Typography>{tour}</Typography> <Chip label="Chip Filled" />
                                        </Stack>
                                        {index !== tours.length - 1 && <Divider component={'p'} />}
                                    </React.Fragment>
                                ))}
                            </Stack>
                        </Box>
                    </Box>
                    <Box marginTop={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-evenly'
                        }}
                    >
                        {cards.map((card, index) => (
                            <Card
                                sx={{ width: 250 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={CARDIMAGE}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" >
                                        {card.name}
                                    </Typography>
                                    <Typography component="div" fontSize={12} >
                                        {card.date}
                                    </Typography>
                                    <Typography fontSize={13}>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" size="small">Buy Ticket</Button>
                                </CardActions>
                            </Card>
                        ))}
                    </Box>
                </Container>
            </Box>
        </>
    )
}
