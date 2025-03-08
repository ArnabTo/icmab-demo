import React from 'react';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import { Box, Typography, Grid, useTheme, useMediaQuery, Container } from '@mui/material';
import { FloatLine, FloatPlusIcon } from './components/svg-elements';
import { MotionViewport } from 'src/components/animate';
import { SectionTitle } from './components/section-title';

export default function HomeGridGallery() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const renderLines = (
    <>
      <FloatPlusIcon sx={{ top: 72, left: 72 }} />
      <FloatPlusIcon sx={{ bottom: 72, left: 72 }} />
      <FloatLine sx={{ top: 80, left: 0 }} />
      <FloatLine sx={{ bottom: 80, left: 0 }} />
      <FloatLine vertical sx={{ top: 0, left: 80 }} />
    </>
  );

  // Sample images and boxes (replace with your actual content)
  const images = [
    'https://icmab.gov.bd/wp-content/uploads/2024/12/Picture-7.jpg',
    'https://www.icmab.gov.bd/wp-content/uploads/2019/12/lifeaticmab.jpg',
    'https://icmab.gov.bd/wp-content/uploads/2023/11/r1.jpg',
    'https://icmab.gov.bd/wp-content/uploads/2025/03/ICMAB-MoU-with-HR-scaled.jpg',
  ];

  // Unique scroll animations
  const scrollVariants = {
    offscreen: {
      opacity: 0,
      y: 100,
      scale: 0.8
    },
    onscreen: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const hoverVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const DescriptionBox = ({ title, style, description }) => (
    <m.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      variants={scrollVariants}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'yellow',
        padding: '20px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        perspective: '1000px',
        ...style
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: '2rem',
          fontWeight: 'bold',
          transition: 'transform 0.3s',
          ':hover': { transform: 'scale(1.1)' }
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginTop: '10px',
          transition: 'transform 0.3s',
          ':hover': { transform: 'scale(1.1)' }
        }}
      >
        {description}
      </Typography>
    </m.div>
  );

  const ImageItem = ({ src, style, rowSpan = 1 }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
      <m.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={scrollVariants}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          borderRadius: '8px',
          gridRow: `span ${rowSpan}`,
          boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
          perspective: '1000px',
          position: 'relative',
          ...style
        }}
      >
        <m.img
          animate={{
            scale: isHovered ? 1.05 : 1,
            filter: isHovered ? 'brightness(0.7)' : 'brightness(1)',
          }}
          transition={{ duration: 0.3 }}
          src={src}
          alt="Gallery image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px'
          }}
        />

        <m.div
          animate={{
            y: isHovered ? 0 : 100,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '20px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
            color: 'white',
            pointerEvents: 'none',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -4,
                left: 0,
                width: '100%',
                height: 2,
                bgcolor: 'primary.main',
                transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                transition: 'transform 0.3s ease',
                transformOrigin: 'left',
              }
            }}
          >
            ICMAB Gallery
          </Typography>
        </m.div>
      </m.div>
    );
  };

  return (
    <Box
      component="section">

      <MotionViewport>
        {renderLines}

        <Container sx={{ position: 'relative', alignItems: 'center' }}>
          <SectionTitle
            caption="Success"
            title="Our Success"
            txtGradient="Stories"
            sx={{ mb: { xs: 5, md: 8 }, textAlign: { xs: 'center', md: 'left' } }}
          />
          <LazyMotion features={domAnimation}>
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  staggerChildren: 0.2
                }
              }}
              viewport={{ once: true }}
              style={{ width: '100%' }}
            >
              <Box sx={{
                overflow: 'hidden',
                margin: 'auto',
                width: '100%',
                pb: 6
              }}>
                <Grid
                  container
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gridTemplateRows: 'repeat(3, 300px)',
                    width: '100%',
                    gap: 1,
                  }}
                >
                  {/* First Row */}
                  <Grid item sx={{ gridColumn: '1 / 2', gridRow: '1 / 2' }}>
                    <DescriptionBox title="#No 1" description="In Bangladesh" />
                  </Grid>
                  <Grid item sx={{ gridColumn: '2 / 3', gridRow: '1 / 2' }}>
                    <ImageItem src={images[0]} />
                  </Grid>
                  <Grid item sx={{ gridColumn: '3 / 4', gridRow: '1 / 2' }}>
                    <ImageItem src={images[1]} />
                  </Grid>

                  {/* Second Row */}
                  <Grid item sx={{ gridColumn: '1 / 2', gridRow: '2 / 4' }}>
                    <ImageItem src={images[2]} rowSpan={2} />
                  </Grid>
                  <Grid item sx={{ gridColumn: '2 / 3', gridRow: '2 / 3' }}>
                    <DescriptionBox title="#15" description="Worldwide" />
                  </Grid>
                  <Grid item sx={{ gridColumn: '3 / 4', gridRow: '2 / 4' }}>
                    <ImageItem src={images[3]} rowSpan={2} />
                  </Grid>

                  {/* Third Row */}
                  <Grid item sx={{ gridColumn: '2 / 3', gridRow: '3 / 4' }}>
                    <ImageItem src={images[0]} />
                  </Grid>

                </Grid>
              </Box>
            </m.div>
          </LazyMotion>
        </Container>
      </MotionViewport>
    </Box>
  );
};

