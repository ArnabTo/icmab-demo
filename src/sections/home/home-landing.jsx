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
                display: "flex",
                justifyContent: "center",
                alignItems: "center", // Ensures both sides align
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Left Side - Text */}
            <Box
                sx={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center", // Ensures it wraps content properly
                    position: "relative",
                    zIndex: 5,

                    "&::before": {
                        content: '""',
                        position: "absolute",
                        width: "30px", // Adjust for dome size
                        height: "40px", // Half of width for dome effect
                        backgroundColor: theme.palette.secondary.main, // Same as text box
                        bottom: "50%", // Center vertically
                        right: "-30px", // Slight overlap on the right
                        transform: "translateY(50%)", // Rotate the shape
                        zIndex: 6, // Keep it above the video
                        clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)",

                    },
                }}
            >
                <m.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ width: "100%" }}
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

            {/* Right Side - Video */}
            <Box
                sx={{
                    width: "50%",
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
                        height: "auto", // Adjusts height to match left box
                        maxHeight: "100%", // Prevents overflow
                        objectFit: "cover",
                        zIndex: 1,
                        borderRadius: "10px",
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
        </Box>
    );
}
