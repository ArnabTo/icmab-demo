'use client';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import HomeQuote from './home-quote';
import HomeLanding from './home-landing';
import { HomeMinimal } from './home-minimal';
import HomeGridGallery from './home-gallery-comp';
import HomeTabComponent from './home-tab-component';
import HomeBangladeshMap from './home-bangladesh-map';

const GridPattern = styled('div')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
  background:
    'linear-gradient(to right, #4f4f4f2e 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f2e 1px, transparent 1px)',
  backgroundSize: '54px 54px',
  maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
});

// Figure component for skewed images
const Figure = styled('figure')(({ skewX = 0 }) => ({
  display: 'grid',
  placeContent: 'center',
  transform: `skewX(${skewX}deg)`,
}));

// Image component
const StyledImg = styled('img')({
  transition: 'all 0.3s',
  alignSelf: 'bottom',
  objectFit: 'cover',
});

export default function SmoothScroll() {
  return (
    <Box component="main" sx={{ bgcolor: 'black' }}>
      <Box className="wrapper">
        <Box
          component="section"
          sx={{
            color: 'white',
            height: '100vh',
            width: '100%',
            bgcolor: '#0f172a',
            display: 'grid',
            placeContent: 'center',
            position: 'sticky',
            top: 0,
            overflow: 'hidden',
          }}
        >
          <HomeLanding />
        </Box>

        <Box
          component="section"
          sx={{
            bgcolor: 'rgb(209, 213, 219)',
            color: 'black',
            display: 'grid',
            placeContent: 'center',
            height: '100vh',
            position: 'sticky',
            top: 0,
            borderTopLeftRadius: '1rem',
            borderTopRightRadius: '1rem',
            overflow: 'hidden',
          }}
        >
          <HomeBangladeshMap />
        </Box>

        <Box
          component="section"
          sx={{
            bgcolor: 'background.default',
            color: 'black',
            display: 'grid',
            placeContent: 'center',
            height: '100vh',
            position: 'sticky',
            top: 0,
            borderTopLeftRadius: '1rem',
            borderTopRightRadius: '1rem',
            overflow: 'hidden',
          }}
        >
          <HomeTabComponent />
        </Box>

        <Box
          component="section"
          sx={{
            color: 'white',
            height: '100vh',
            width: '100%',
            bgcolor: '#0f172a',
            display: 'grid',
            placeContent: 'center',
            position: 'sticky',
            top: 0,
          }}
        >
          <HomeGridGallery />
        </Box>

        <Box
          component="section"
          sx={{
            bgcolor: 'background.default',
            color: 'black',
            height: '100vh',
            position: 'sticky',
            top: 0,
            borderTopLeftRadius: '1rem',
            borderTopRightRadius: '1rem',
            overflow: 'hidden',
          }}
        >
          <HomeMinimal />
        </Box>
      </Box>

      <Box
        component="section"
        sx={{
          bgcolor: 'background.default',
          color: 'black',
          height: '100vh',
          position: 'sticky',
          top: 0,
          borderTopLeftRadius: '1rem',
          borderTopRightRadius: '1rem',
          overflow: 'hidden',
        }}
      >
        <HomeQuote />
      </Box>
    </Box>
  );
}
