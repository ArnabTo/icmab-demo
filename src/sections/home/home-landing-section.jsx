import React from 'react'

import { Box, Button, Container, Typography } from '@mui/material'

import { CONFIG } from 'src/config-global';

import { varFade, MotionContainer } from 'src/components/animate';

export default function HomeLandingSection() {
    return (
        <MotionContainer initial="hidden" animate="visible" exit="hidden" variants={varFade().in}>
            <Box sx={{
                position: "relative",
                width: "100%",
                height: "80vh",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <video autoPlay loop muted playsInline crossOrigin='anonymous'
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: -2,
                    }}
                >
                    <source src={`${CONFIG.assetsDir}/assets/background/video.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Box sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "common.white",
                    opacity: 0.7,
                    zIndex: -1,
                }} />
                <Container maxWidth="md" sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography variant="h3" sx={{ color: "primary.main", zIndex: 1 }}>Welcome to Raktch</Typography>
                    <Typography variant="h1" sx={{ color: "common.black", zIndex: 1 }}>Connect your Everything</Typography>
                    <Typography variant='body1' sx={{ color: "common.black", zIndex: 1 }}>Raktch Technology & Software is a trailblazing technology company at the forefront of innovation, offering cutting-edge solutions to businesses worldwide.</Typography>
                    <Button variant="contained" size="large" sx={{ mt: 2, zIndex: 1 }}>Get Started</Button>
                </Container>

            </Box>
        </MotionContainer>
    )
}

