import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import '../css/Main.css'

export default function NavBar() {

    const pages = ['HOME', 'BAND', 'TOUR', 'CONTACT', 'MORE'];
    return (

        <>
            <Box flexGrow={1}>
                <AppBar
                    className='start-center'
                    sx={{
                        height: '50px',

                    }}>
                    <Toolbar >
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}
