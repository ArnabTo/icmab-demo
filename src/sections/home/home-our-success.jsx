import { m } from 'framer-motion';
import React, { useRef } from 'react'

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Stack } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import { CONFIG } from 'src/config-global';
import { varAlpha, bgGradient } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import {varFade, varContainer, MotionViewport } from 'src/components/animate';
import {
    Carousel,
    useCarousel,
    CarouselDotButtons,
    CarouselArrowFloatButtons,
} from 'src/components/carousel';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatPlusIcon } from './components/svg-elements';


// ----------------------------------------------------------------------

const VIDEOS = [
    {
        id: 1,
        title: 'CMA Success Stories',
        videoUrl: `${CONFIG.assetsDir}/assets/background/video.mp4`,
    },
    {
        id: 2,
        title: 'Campus Life',
        videoUrl: `${CONFIG.assetsDir}/assets/background/video.mp4`,
    },
    {
        id: 3,
        title: 'Student Testimonials',
        videoUrl: `${CONFIG.assetsDir}/assets/background/video.mp4`,
    },
    {
        id: 4,
        title: 'Student Testimonials',
        videoUrl: `${CONFIG.assetsDir}/assets/background/video.mp4`,
    },
];

export default function HomeOurSuccessStories() {

    const scrollRef = useRef(null);

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
        dragFree: true,
        slideSpacing: '20px',
        slidesToShow: { xs: 1, sm: 2, md: '36%' },
    });

    return (
        <Stack
        ref={scrollRef}
        variants={varContainer()}>
            <Box
                component="section"
                sx={{
                    py: { xs: 10, md: 15 },
                    overflow: 'hidden'
                }}
                variants={varFade({ distance: 24 }).inUp}
                // variants={getVariant('slideInUp')}
            >
                <MotionViewport>
                    {renderLines}

                    <Container sx={{ position: 'relative', alignItems: 'center', maxWidth: { xl: '1300px !important' }, margin: 'auto' }}>
                        <SectionTitle
                            caption="Success"
                            title="Our Success"
                            txtGradient="Stories"
                            sx={{ mb: { xs: 5 }, textAlign: { xs: 'center', md: 'left' } }}
                        />
                        <Box sx={{ position: 'relative' }}>
                            <Carousel carousel={carousel} sx={{ p: 2 }}>
                                {VIDEOS.map((item) => (
                                    <CarouselItem key={item.id} item={item} />
                                ))}
                            </Carousel>

                            <CarouselArrowFloatButtons {...carousel.arrows} options={carousel.options} />
                        </Box>

                        <CarouselDotButtons
                            variant="number"
                            scrollSnaps={carousel.dots.scrollSnaps}
                            selectedIndex={carousel.dots.selectedIndex}
                            onClickDot={carousel.dots.onClickDot}
                            sx={{ mt: 5, mb: 2, width: 1, justifyContent: 'center' }}
                        />
                    </Container>
                </MotionViewport>
            </Box>
        </Stack>
    );
}

// ----------------------------------------------------------------------

function CarouselItem({ item }) {
    const [isHovered, setIsHovered] = React.useState(false);
    const videoRef = React.useRef(null);

    React.useEffect(() => {
        if (videoRef.current) {
            if (isHovered) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }, [isHovered]);

    return (
        <Box
            sx={{
                borderRadius: 2,
                overflow: 'hidden',
                position: 'relative',
                aspectRatio: '8/12',
                maxWidth: 350,
                mx: 'auto',
                transition: 'transform 0.3s ease',
                '&:hover': {
                    transform: 'scale(1.05)',
                }
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Box
                component="video"
                ref={videoRef}
                muted
                loop
                playsInline
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'filter 0.3s ease',
                    filter: isHovered ? 'brightness(1)' : 'brightness(0.7)',
                }}
            >
                <source src={item.videoUrl} type="video/mp4" />
            </Box>

            <CardContent
                sx={(theme) => ({
                    ...bgGradient({
                        color: `to top, ${theme.vars.palette.grey[900]} 25%, ${varAlpha(theme.vars.palette.grey['900Channel'], 0)} 100%`,
                    }),
                    width: 1,
                    bottom: 0,
                    zIndex: 9,
                    textAlign: 'left',
                    position: 'absolute',
                    color: 'common.white',
                    opacity: isHovered ? 1 : 0.8,
                    transition: 'opacity 0.3s ease',
                    p: 2,
                })}
            >
                <Typography
                    variant="subtitle1"
                    sx={{
                        mb: 1,
                        fontWeight: 'bold',
                    }}
                >
                    {item.title}
                </Typography>

                <Link
                    color="inherit"
                    variant="caption"
                    sx={(theme) => ({
                        gap: 0.5,
                        opacity: 0.72,
                        alignItems: 'center',
                        display: 'inline-flex',
                        transition: theme.transitions.create(['opacity']),
                        '&:hover': { opacity: 1 },
                    })}
                >
                    Learn more
                    <Iconify width={14} icon="eva:arrow-forward-fill" />
                </Link>
            </CardContent>
        </Box>
    );
}
