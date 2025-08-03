import React, { useRef } from 'react';
import { m, useInView } from 'framer-motion';

import { useTheme } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';

import { CONFIG } from 'src/config-global';

import { MotionViewport } from 'src/components/animate';

export default function HomeLanding() {
  const theme = useTheme();
  const ref = useRef(null);

  // Detect when section is 10% visible
  const isInView = useInView(ref, { amount: 0.1, once: true });

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 10, md: 15 },
        height: { xs: '100vh', md: 'calc(100vh - 64px)' },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <MotionViewport>
        <Box sx={{ display: 'flex' }}>
          {/* Left Side - Text */}
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 5,
              position: 'relative',
            }}
          >
            {/* Triangle pointing to video */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                right: -32,
                transform: 'translateY(-50%)',
                width: 0,
                height: 0,
                borderTop: '32px solid transparent',
                borderBottom: '32px solid transparent',
                borderLeft: `32px solid ${theme.palette.secondary.main}`,
                zIndex: 4,
              }}
            />
            <m.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{ width: '100%', height: '100%' }}
            >
              <Box
                sx={{
                  background: theme.palette.secondary.main,
                  opacity: 0.9,
                  padding: theme.spacing(3),
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
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
                    mt: 3,
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
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <m.video
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '100%',
                objectFit: 'cover',
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
        </Box>
      </MotionViewport>
    </Box>
  );
}
