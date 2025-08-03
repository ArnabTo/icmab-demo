import { useRef, useState } from 'react';
import { m, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import { varAlpha, textGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionContainer } from 'src/components/animate';

import { HeroBackground } from './components/hero-background';

// ----------------------------------------------------------------------

const mdKey = 'md';

export function HomeHero({ sx, ...other }) {
  const theme = useTheme();

  const scroll = useScrollPercent();

  const mdUp = useResponsive('up', mdKey);

  const distance = mdUp ? scroll.percent : 0;

  const y1 = useTransformY(scroll.scrollY, distance * -7);
  const y2 = useTransformY(scroll.scrollY, distance * -6);
  const y3 = useTransformY(scroll.scrollY, distance * -5);
  const y4 = useTransformY(scroll.scrollY, distance * -4);
  const y5 = useTransformY(scroll.scrollY, distance * -3);

  const opacity = useTransform(
    scroll.scrollY,
    [0, 1],
    [1, mdUp ? Number((1 - scroll.percent / 100).toFixed(1)) : 1]
  );

  const renderHeading = (
    <AnimatedDiv>
      <Box
        component="h1"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        sx={{
          ...theme.typography.h2,
          my: 0,
          mx: 'auto',
          maxWidth: 1080,
          color: theme.palette.common.white,
          fontFamily: theme.typography.fontSecondaryFamily,
          fontSize: { xs: 36, sm: 48, md: 56, lg: 72 },
          lineHeight: { xs: '54px', sm: '72px', md: '84px', lg: '90px' },
        }}
      >
        Creating the competitive edge for your
        <Box
          component={m.span}
          animate={{
            backgroundPosition: '200% center',
          }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          sx={{
            ...textGradient(
              `300deg, ${theme.vars.palette.info.main} 0%, ${theme.vars.palette.secondary.main} 25%, ${theme.vars.palette.info.main} 50%, ${theme.vars.palette.secondary.main} 75%, ${theme.vars.palette.primary.main} 100%`
            ),
            backgroundSize: '400%',
            ml: { xs: 0.75, md: 1, xl: 1.5 },
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
              animation: 'shimmer 3s infinite',
              '@keyframes shimmer': {
                '0%': { transform: 'translateX(-100%)' },
                '100%': { transform: 'translateX(100%)' },
              },
            },
          }}
        >
          Business and Accounting Profession
        </Box>
      </Box>
    </AnimatedDiv>
  );

  const renderButtons = (
    <Box display="flex" flexWrap="wrap" justifyContent="center" gap={{ xs: 2, sm: 3 }}>
      <AnimatedDiv>
        <Stack alignItems="center" spacing={3}>
          <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center">
            <Button
              component={RouterLink}
              href={paths.dashboard.root}
              variant="contained"
              size="large"
              startIcon={<Iconify width={24} icon="iconoir:flash" />}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 3,
                background: `linear-gradient(135deg, ${theme.vars.palette.primary.main} 0%, ${theme.vars.palette.secondary.main} 100%)`,
                backdropFilter: 'blur(10px)',
                color: 'white',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: `linear-gradient(135deg, ${theme.vars.palette.secondary.main} 0%, ${theme.vars.palette.primary.main} 100%)`,
                },
              }}
            >
              Get Started With Us
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<Iconify width={24} icon="solar:play-bold" />}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 3,
                color: 'white',
                borderColor: 'rgba(255,255,255,0.3)',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'rgba(255,255,255,0.6)',
                  background: 'rgba(255,255,255,0.2)',
                },
              }}
            >
              Watch Demo
            </Button>
          </Box>

          {/* Trust indicators */}
          <Box
            display="flex"
            alignItems="center"
            gap={3}
            sx={{
              mt: 3,
              color: 'rgba(255,255,255,0.8)',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Iconify icon="material-symbols:star" sx={{ color: '#FFD700' }} />
              <span>4.9/5 Rating</span>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Iconify
                icon="material-symbols:group"
                sx={{ color: theme.vars.palette.primary.main }}
              />
              <span>10,000+ Students</span>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Iconify icon="material-symbols:verified" sx={{ color: '#4CAF50' }} />
              <span>Industry Certified</span>
            </Box>
          </Box>
        </Stack>
      </AnimatedDiv>
    </Box>
  );

  return (
    <Box
      ref={scroll.elementRef}
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        [theme.breakpoints.up(mdKey)]: {
          minHeight: '100vh',
          height: 'fit-content',
          maxHeight: '100vh',
          display: 'block',
          backgroundColor: varAlpha(theme.palette.common.blackChannel, 0.7),
          willChange: 'opacity',
          mt: 'calc(var(--layout-header-desktop-height) * -1)',
        },
        ...sx,
      }}
      {...other}
    >
      {/* Video Background */}
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2,
          transition: 'opacity 1s ease-in-out',
        }}
      >
        <source src="/assets/background/video2.mp4" type="video/mp4" />
      </Box>

      <Box
        component={m.div}
        style={{ opacity }}
        sx={{
          width: 1,
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          transition: theme.transitions.create(['opacity']),
          [theme.breakpoints.up(mdKey)]: {
            height: 1,
            position: 'fixed',
            maxHeight: 'inherit',
          },
        }}
      >
        <Container
          component={MotionContainer}
          sx={{
            py: 3,
            gap: 5,
            zIndex: 9,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'relative',
            [theme.breakpoints.up(mdKey)]: {
              flex: '1 1 auto',
              justifyContent: 'center',
              py: 'var(--layout-header-desktop-height)',
            },
          }}
        >
          <Stack spacing={5} sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <m.div style={{ y: y2 }}>{renderHeading}</m.div>
          </Stack>

          <m.div style={{ y: y4 }}>{renderButtons}</m.div>
        </Container>
        <Box
          component={m.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        >
          <HeroBackground />
        </Box>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

function AnimatedDiv({ children, component = m.div }) {
  return (
    <Box component={component} variants={varFade({ distance: 24 }).inUp}>
      {children}
    </Box>
  );
}

// ----------------------------------------------------------------------

function useTransformY(value, distance) {
  const physics = {
    mass: 0.1,
    damping: 20,
    stiffness: 300,
    restDelta: 0.001,
  };

  return useSpring(useTransform(value, [0, 1], [0, distance]), physics);
}

function useScrollPercent() {
  const elementRef = useRef(null);

  const { scrollY } = useScroll();

  const [percent, setPercent] = useState(0);

  useMotionValueEvent(scrollY, 'change', (scrollHeight) => {
    let heroHeight = 0;

    if (elementRef.current) {
      heroHeight = elementRef.current.offsetHeight;
    }

    const scrollPercent = Math.floor((scrollHeight / heroHeight) * 100);

    if (scrollPercent >= 100) {
      setPercent(100);
    } else {
      setPercent(Math.floor(scrollPercent));
    }
  });

  return { elementRef, percent, scrollY };
}
