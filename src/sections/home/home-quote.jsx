import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { varAlpha, stylesMode } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { MotionViewport } from 'src/components/animate';
import { Carousel, useCarousel, CarouselDotButtons } from 'src/components/carousel';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatPlusIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

const QUOTES = [
  {
    id: 1,
    text: "CMA qualification has opened doors to opportunities I never thought possible. It's not just about numbers; it's about strategic thinking and leadership.",
    author: 'Mohammad Rahman',
    position: 'CFO, Leading Tech Company',
  },
  {
    id: 2,
    text: "The journey to becoming a CMA was challenging, but the knowledge and skills I gained are invaluable in today's business world.",
    author: 'Fatima Ahmed',
    position: 'Financial Controller, Multinational Corporation',
  },
  {
    id: 3,
    text: 'ICMAB provided me with more than just education; it gave me a network of professionals and mentors who continue to inspire me.',
    author: 'Abdul Karim',
    position: 'Managing Director, Consulting Firm',
  },
  {
    id: 4,
    text: "The practical approach of CMA education prepared me for real-world challenges in ways I couldn't have imagined.",
    author: 'Nusrat Jahan',
    position: 'Senior Cost Accountant, Manufacturing Industry',
  },
];

export default function HomeQuote() {
  const theme = useTheme();

  const renderLines = (
    <>
      <FloatPlusIcon sx={{ top: 72, left: 72 }} />
      <FloatPlusIcon sx={{ bottom: 72, left: 72 }} />
      <FloatLine sx={{ top: 80, left: 0 }} />
      <FloatLine sx={{ bottom: 80, left: 0 }} />
      <FloatLine vertical sx={{ top: 0, left: 80 }} />
    </>
  );

  const carousel = useCarousel({
    loop: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  });

  return (
    <Box
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        py: { xs: 10, md: 15 },
      }}
    >
      <MotionViewport>
        {renderLines}
        <Container>
          <Box
            sx={{
              position: 'relative',
              textAlign: 'center',
              bgcolor: 'background.default',
              borderRadius: 2,
              boxShadow: (lightTheme) =>
                `-40px 40px 80px 0px ${varAlpha(lightTheme.vars.palette.grey['500Channel'], 0.16)}`,
              [stylesMode.dark]: {
                boxShadow: (darkTheme) =>
                  `-40px 40px 80px 0px ${varAlpha(darkTheme.vars.palette.common.blackChannel, 0.16)}`,
              },
            }}
          >
            <Carousel carousel={carousel}>
              {QUOTES.map((quote, index) => (
                <CarouselItem
                  key={quote.id}
                  item={quote}
                  selected={carousel.dots.selectedIndex === index}
                />
              ))}
            </Carousel>

            <Box sx={{ py: 5, display: 'flex', justifyContent: 'center' }}>
              <CarouselDotButtons
                sx={{
                  color: theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                }}
                scrollSnaps={carousel.dots.scrollSnaps}
                selectedIndex={carousel.dots.selectedIndex}
                onClickDot={carousel.dots.onClickDot}
              />
            </Box>
          </Box>
        </Container>
      </MotionViewport>
    </Box>
  );
}

// ----------------------------------------------------------------------

function CarouselItem({ item, selected }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        opacity: 0,
        width: '100%',
        pt: 3,
        transition: (transitionTheme) =>
          transitionTheme.transitions.create('opacity', {
            easing: transitionTheme.transitions.easing.easeInOut,
            duration: transitionTheme.transitions.duration.short,
          }),
        ...(selected && {
          opacity: 1,
        }),
      }}
    >
      <m.div
        animate={{
          scale: selected ? [0.5, 1] : 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <SectionTitle
          caption="Inspiration"
          title="Quotes"
          txtGradient="Motivation"
          sx={{ mb: { xs: 3 }, textAlign: { xs: 'center' } }}
        />
        <Stack direction="row" spacing={1}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              color: theme.palette.mode === 'dark' ? 'common.white' : 'common.black',
              fontWeight: 'light',
              fontStyle: 'italic',
            }}
          >
            <Iconify
              icon="gravity-ui:quote-open"
              width={45}
              sx={{ mt: -5, color: 'primary.main', opacity: 0.35 }}
            />
            {item.text}
          </Typography>
        </Stack>

        <Typography
          variant="h6"
          sx={{
            color: 'primary.main',
            fontWeight: 'bold',
            mb: 0.5,
          }}
        >
          {item.author}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: theme.palette.mode === 'dark' ? 'common.white' : 'common.black',
            opacity: theme.palette.mode === 'dark' ? 0.72 : 0.64,
          }}
        >
          {item.position}
        </Typography>
      </m.div>
    </Box>
  );
}
