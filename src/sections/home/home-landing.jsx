import { useRef } from 'react';
import { ReactTyped } from 'react-typed';
import { m, useInView } from 'framer-motion';

import { useTheme } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';

import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, AnimateBorder, MotionViewport } from 'src/components/animate';

export default function HomeLanding() {
  const theme = useTheme();
  const ref = useRef(null);

  const isInView = useInView(ref, { amount: 0.1, once: true });

  return (
    <Box
      ref={ref}
      sx={{
        height: '70vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <MotionViewport>
        <Box sx={{ display: 'flex', height: '100vh', width: '100%' }}>
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
                borderLeft: `32px solid ${theme.palette.blue.main}`,
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
                  background: theme.palette.blue.main,
                  opacity: 0.9,
                  padding: theme.spacing(10),
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}
              >
                <Typography variant="h3">
                  Institute of Cost and Management Accountants of Bangladesh (ICMAB)
                </Typography>
                <Box mt={2} mb={4} sx={{ width: '100%' }}>
                  <ReactTyped
                    strings={[
                      'ICMAB is the national professional body of Cost and Management Accountants in Bangladesh.',
                      'Dedicated to promoting and regulating the profession.',
                      'Playing a vital role in industrial and economic development.',
                      'Producing highly qualified accountants who provide leadership.',
                      'Helping businesses achieve greater efficiency and competitiveness.',
                      'Expertise in effective cost management strategies.',
                    ]}
                    typeSpeed={40}
                    backSpeed={20}
                    loop
                    style={{ fontSize: '1.2rem', color: theme.palette.common.white }}
                  />
                </Box>

                <Box
                  component={m.div}
                  variants={varFade({ distance: 24 }).inLeft}
                  sx={{
                    display: 'flex',
                    borderRadius: 1.25,
                    position: 'relative',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <AnimateBorder
                    animate={{
                      duration: 12,
                      distance: 40,
                      color: [theme.vars.palette.common.white, theme.vars.palette.common.white],
                      outline: `135deg, ${varAlpha(theme.vars.palette.common.whiteChannel, 0.04)}, ${varAlpha(theme.vars.palette.common.whiteChannel, 0.04)}`,
                    }}
                    sx={{ width: 1, height: 1, position: 'absolute' }}
                  />

                  <Button
                    size="large"
                    variant="text"
                    target="_blank"
                    rel="noopener"
                    href={paths.components}
                    endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
                    sx={{ px: 2, color: 'common.white' }}
                  >
                    Get Started
                  </Button>
                </Box>
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
