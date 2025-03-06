import React from 'react';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import { Box, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';

export default function HomeGridGallery(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
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
      rest: { scale: 1},
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
  
    const ImageItem = ({ src, style, rowSpan = 1 }) => (
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
          overflow: 'hidden',
          borderRadius: '8px',
          gridRow: `span ${rowSpan}`,
          boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
          perspective: '1000px',
          ...style
        }}
      >
        <m.img
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
          src={src}
          alt="Gallery image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
            transform: 'translateZ(50px)',
            borderRadius: '8px'
          }}
        />
      </m.div>
    );
  
    return (
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
            pb:6
          }}>
            <Grid 
              container 
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(3, 300px)',
                width: '100%',
                gap:1,
              }}
            >
              {/* First Row */}
              <Grid item sx={{ gridColumn: '1 / 2', gridRow: '1 / 2' }}>
                <DescriptionBox title="#No 1" description="In Bangladesh"/>
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
                <DescriptionBox title="#15" description="Worldwide"/>
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
    );
};

