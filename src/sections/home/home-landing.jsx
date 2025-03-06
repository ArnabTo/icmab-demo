import React, { useRef } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { m, useInView } from "framer-motion";
import { CONFIG } from "src/config-global";

export default function HomeLanding() {
    const theme = useTheme();
    const ref = useRef(null);

    // Detect when section is 10% visible
    const isInView = useInView(ref, { amount: 0.1, once: true });

    return (
        <Box
            ref={ref}
            sx={{
                px: { xs: 2, md: 5 },
                py: { xs: 10, md: 15 },
                height: "100vh",
                display:"flex",
                justifyContent:"center",
                position: "relative",
                overflow: "hidden",
                gap:2
            }}
        >
                {/* Left Side - Text (Revealed Last) */}
                <Box sx={{width: "50%", position: "relative", zIndex: 5}}>
                    <m.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{ height: "100%" }}
                    >
                        <Box
                            sx={{
                                background: theme.palette.secondary.main,
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

                            <Button variant="outlined" sx={{ backgroundColor: "common.white", mt: 3 }}>
                                Get Started
                            </Button>
                        </Box>
                    </m.div>
                </Box>

                {/* Right Side - Video (Revealed First) */}
                <Box sx={{ width: "50%", height:"100%" }}>
                <m.video
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            zIndex: 1,
                            borderRadius: "10px",
                            maxHeight: "100%",
                        }}
                        autoPlay
                        loop
                        muted
                        playsInline
                        crossOrigin="anonymous"
                    >
                        <source src={`${CONFIG.assetsDir}/assets/background/video.mp4`}
                        type="video/mp4" />
                        Your browser does not support the video tag.
                </m.video>
                </Box>

        </Box>
    );
}
