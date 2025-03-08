import React, { useRef } from "react";
import { m, useInView } from "framer-motion";

import { useTheme } from "@mui/material/styles";
import { Box, Button, Container, Typography } from "@mui/material";

import { CONFIG } from "src/config-global";

import { MotionViewport } from "src/components/animate";

import { FloatLine, FloatPlusIcon } from "./components/svg-elements";


export default function HomeLanding() {
    const theme = useTheme();
    const ref = useRef(null);

    const renderLines = (
        <>
            <FloatPlusIcon sx={{ top: 72, left: 72 }} />
            <FloatPlusIcon sx={{ bottom: 72, left: 72 }} />
            <FloatLine sx={{ top: 80, left: 0 }} />
            <FloatLine sx={{ bottom: 80, left: 0 }} />
            <FloatLine vertical sx={{ top: 0, left: 80 }} />
        </>
    );

    // Detect when section is 10% visible
    const isInView = useInView(ref, { amount: 0.1, once: true });

    return (
        <Box
            ref={ref}
            sx={{
                py: { xs: 10, md: 15 },
                height: { xs: "100vh", md: "calc(100vh - 64px)" },
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                alignItems: "center", // Ensures both sides align
                position: "relative",
                overflow: "hidden",
            }}
        >
            <MotionViewport>
                <Container sx={{ display: 'flex' }}>
                {renderLines}
                    {/* Left Side - Text */}
                    <Box
                        sx={{
                            width: "100%",
                            // height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 5
                        }}
                    >
                        <m.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{ width: "100%", height: '100%' }}
                        >
                            <Box
                                sx={{
                                    background: theme.palette.secondary.main,
                                    opacity: 0.9,
                                    padding: theme.spacing(3),
                                    height: "100%"
                                }}
                            >
                                <Typography variant="h3" color="common.white">
                                    Welcome to ICMAB
                                </Typography>
                                <Typography variant="h3" color="common.white">
                                    Enter into Lifetime profession with CMA Certificate.
                                </Typography>
                                <Typography variant="body1" color="common.white">
                                    Enter into Lifetime profession with CMA Certificate.
                                </Typography>

                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: theme.palette.common.white,
                                        color: theme.palette.common.black,
                                        mt: 3
                                    }}
                                >
                                    Get Started
                                </Button>
                            </Box>
                        </m.div>
                    </Box>

                    {/* Right Side - Video */}
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center", // Aligns with left side
                        }}
                    >
                        <m.video
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{
                                width: "100%",
                                height: "100%", // Adjusts height to match left box
                                maxHeight: "100%", // Prevents overflow
                                objectFit: "cover",
                                zIndex: 1,
                            }}
                            autoPlay
                            loop
                            muted
                            playsInline
                            crossOrigin="anonymous"
                        >
                            <source src={`${CONFIG.assetsDir}/assets/background/video.mp4`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </m.video>
                    </Box>
                </Container>
            </MotionViewport>
        </Box>
    );
}
