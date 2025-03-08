import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient, stylesMode, varAlpha } from 'src/theme/styles';
import { AnimateBorder, MotionViewport } from 'src/components/animate';
import {
    Carousel,
    useCarousel,
    CarouselDotButtons,
    CarouselArrowBasicButtons,
} from 'src/components/carousel';
import { FloatLine, FloatPlusIcon } from './components/svg-elements';

// ----------------------------------------------------------------------

const QUOTES = [
    {
        id: 1,
        text: "CMA qualification has opened doors to opportunities I never thought possible. It's not just about numbers; it's about strategic thinking and leadership.",
        author: "Mohammad Rahman",
        position: "CFO, Leading Tech Company"
    },
    {
        id: 2,
        text: "The journey to becoming a CMA was challenging, but the knowledge and skills I gained are invaluable in today's business world.",
        author: "Fatima Ahmed",
        position: "Financial Controller, Multinational Corporation"
    },
    {
        id: 3,
        text: "ICMAB provided me with more than just education; it gave me a network of professionals and mentors who continue to inspire me.",
        author: "Abdul Karim",
        position: "Managing Director, Consulting Firm"
    },
    {
        id: 4,
        text: "The practical approach of CMA education prepared me for real-world challenges in ways I couldn't have imagined.",
        author: "Nusrat Jahan",
        position: "Senior Cost Accountant, Manufacturing Industry"
    }
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
                            // boxShadow: (theme) =>
                            //     `-40px 40px 80px 0px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
                            // [stylesMode.dark]: {
                            //     boxShadow: (theme) =>
                            //         `-40px 40px 80px 0px ${varAlpha(theme.vars.palette.common.blackChannel, 0.16)}`,
                            // },
                        }}
                    >
                        <Carousel carousel={carousel}>
                            {QUOTES.map((quote, index) => (
                                <CarouselItem key={quote.id} item={quote} selected={carousel.dots.selectedIndex === index} />
                            ))}
                        </Carousel>

                        <Box sx={{ py: 5, display: 'flex', justifyContent: 'center' }}>
                            <CarouselDotButtons
                                sx={{
                                    color: theme.palette.mode === 'light' ? 'primary.main' : 'primary.light'
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
                transition: (theme) =>
                    theme.transitions.create('opacity', {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.short,
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
                <Typography
                    variant="h3"
                    component="h1"
                    sx={{
                        py: 5,
                        color: theme.palette.mode === 'dark' ? 'common.white' : 'common.black',
                        fontWeight: 'light',
                        fontStyle: 'italic',
                    }}
                >
                    &ldquo;{item.text}&rdquo;
                </Typography>

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
