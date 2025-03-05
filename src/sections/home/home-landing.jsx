import React, { useRef } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { m, useScroll, useTransform } from "framer-motion";

export default function HomeLanding() {
    const theme = useTheme();
    const ref = useRef(null);

    // Scroll-based animation
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"], // Animation starts when section enters and ends when it leaves
    });

    // Slide moves from right (100%) to left (-100%) and disappears
    const slideX = useTransform(scrollYProgress, [0, 1], ["100%", "-400%"]);

    // Video is revealed first
    const videoOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
    const videoScale = useTransform(scrollYProgress, [0.2, 0.5], [0.95, 1]);

    // Text fades in after video is revealed
    const textOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
    const textX = useTransform(scrollYProgress, [0.5, 0.8], [50, 50]);

    return (
        <Box ref={ref} sx={{ px: { xs: 2, md: 5 }, py: { xs: 10, md: 15 }, height: "100vh", position: "relative", overflow: "hidden" }}>
            <Grid container spacing={0} sx={{ height: "100vh", position: "relative", overflow: "hidden" }}>

                {/* Left Side - Text (Revealed Last) */}
                <Grid item xs={12} md={6} sx={{ position: "relative", zIndex: 5 }}>
                    <m.div
                        style={{
                            // opacity: textOpacity,
                            // x: textX,
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            sx={{
                                background: theme.palette.info.main,
                                opacity: 0.9,
                                borderRadius: 2,
                                padding: theme.spacing(3),
                            }}
                        >
                            <Typography variant="h3" color="common.white">
                                Welcome to ICMAB
                            </Typography>
                            <Typography variant="h2" color="common.white">
                            Enter into Lifetime profession with CMA Certificate.
                            </Typography>
                            <Typography variant="body1" color="common.white">
                                Enter into Lifetime profession with CMA Certificate.
                            </Typography>

                            <Button varient='contained' sx={{ backgroundColor: "common.white", color: "info.main", mt: 3 }}>Get Started</Button>
                        </Box>
                    </m.div>
                </Grid>

                {/* Right Side - Video (Revealed First) */}
                <Grid item xs={12} md={6} sx={{ position: "relative" }}>
                    <m.video
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '50%',
                            objectFit: "cover",
                            zIndex: 1,
                            opacity: videoOpacity,
                            scale: videoScale,
                            borderRadius: "10px",
                        }}
                        autoPlay
                        loop
                        muted
                        playsInline
                        crossOrigin="anonymous"
                    >
                        <source src="/assets/background/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </m.video>
                </Grid>
            </Grid>
        </Box>
    );
}