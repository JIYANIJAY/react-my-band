import { Box, Button, Container, Grid, Icon, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import '../css/Main.css'

export default function Contact() {
    return (
        <>
            <Box sx={{
                height: '400px'
            }}>

                <Container>
                    <Box className='flex-center-vertical' >
                        <Typography variant='h3' marginTop={5}>CONTACT</Typography>
                        <Typography fontStyle={'italic'}>Fan? Drop a note!</Typography>
                    </Box>
                    <Box>
                        <Stack direction={'row'}>
                            <Grid
                                width={'40%'}
                                paddingLeft={5}
                                sx={{

                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    height: '300px'
                                }}
                            >
                                <Stack spacing={2}>
                                    <Stack direction={'row'} spacing={2} >
                                        <Icon component={PlaceIcon} />
                                        <Typography> Chicago, US</Typography>
                                    </Stack>
                                    <Stack direction={'row'} spacing={2}>
                                        <Icon component={PhoneAndroidIcon} />
                                        <Typography> Phone: +00 151515</Typography>
                                    </Stack>
                                    <Stack direction={'row'} spacing={2}>
                                        <Icon component={EmailIcon} />
                                        <Typography> Email: mail@mail.com</Typography>
                                    </Stack>
                                </Stack>
                            </Grid>
                            <Box mt={4} className='flex-center-vertical' component={'form'}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField label="Name" size='small' variant="outlined" fullWidth />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField label="Email" size='small' variant="outlined" fullWidth />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            size='small'
                                            label="Message"
                                            variant="outlined"
                                            multiline
                                            rows={4}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} display={'flex'} justifyContent={'flex-end'} >
                                        <Button variant="contained" color="primary">
                                            SEND
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
