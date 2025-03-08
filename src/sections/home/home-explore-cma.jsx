import React from 'react';
import { useTheme } from '@emotion/react';

import { Box, Grid, Card, Link, Button, Container, Typography, CardContent } from '@mui/material';

import { Image } from 'src/components/image';
import { MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { FloatLine, FloatPlusIcon } from './components/svg-elements';

const posts = [
    {
        id: 1,
        title: 'What is CMA?',
        content: 'The Certified Management Accountant (CMA) is a professional certification in financial management and accounting.',
    },
    {
        id: 2,
        title: 'CMA vs. CPA',
        content: 'The Certified Public Accountant (CPA) and Certified Management Accountant (CMA) are both professional certifications in accounting, but they have different focuses and requirements.',
    },
    {
        id: 3,
        title: 'CMA Exam Format',
        content: 'The CMA exam consists of two parts, each with 100 multiple-choice questions and two 30-minute essay questions.',
    },
    {
        id: 4,
        title: 'CMA Exam Questions',
        content: 'The CMA exam questions are designed to test a candidate\'s knowledge and skills in financial management, accounting, and other related areas.',
        image: 'https://wallstreetmojo-files.s3.ap-south-1.amazonaws.com/2021/02/CMA-Exam.jpg',
    },
    {
        id: 5,
        title: 'CMA Certification Requirements',
        content: 'The CMA certification requires a bachelor\'s degree from an accredited institution and two years of experience in financial management or accounting.',
        image: 'https://cmaexamacademy.com/wp-content/uploads/2018/08/CMA_CertificationBBlogPost.png',
    },
    {
        id: 6,
        title: 'CMA Curriculum',
        content: 'The CMA exam fees vary depending on the country and the type of exam.',
        image: 'https://www.vsijaipur.com/wp-content/uploads/2023/04/CMA-Course-Syllabus.webp',
    },
];

export default function ExploreCMA() {

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

    return (

        <Box sx={{ py: 8, px: 4 }}>
            <MotionViewport>
                {renderLines}

                <Container>
                    <SectionTitle
                        caption="Exploration"
                        title="Explore"
                        txtGradient="CMA"
                        sx={{ mb: { xs: 5 }, textAlign: { xs: 'center', md: 'left' } }}
                    />
                    <Grid container spacing={4} justifyContent="center" sx={{ my: 4 }}>
                        {posts.map((post) => (
                            <Grid key={post.id} item xs={12} md={6} lg={4}>
                                <Card sx={{ borderRadius: 2, boxShadow: 3, position: 'relative' }}>
                                    {post.image && 
                                    <Image src={post.image} alt="Post Image" style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'cover' }} />
                                    }
                                    <CardContent>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: theme.palette.mode === 'dark' ? 'common.white' : '#34495e' }}>
                                            {post.title}
                                        </Typography>
                                        <Typography variant="body1" sx={{ mb: 3, color: theme.palette.text.secondary, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                            {post.content}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            component={Link}
                                            to={`/cma-${post.id}`} // Replace with your route
                                            sx={{
                                                backgroundColor: theme.palette.secondary.main,
                                                '&:hover': { backgroundColor: theme.palette.secondary.dark },
                                            }}
                                        >
                                            Read More
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </MotionViewport>
        </Box>
    );
}

