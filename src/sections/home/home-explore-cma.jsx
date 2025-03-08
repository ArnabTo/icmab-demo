import React from 'react';

import { Grid, Typography, Card, CardContent, Button, Box, Container, Link } from '@mui/material';

import { Image } from 'src/components/image';
import { MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { CircleSvg, FloatLine, FloatPlusIcon } from './components/svg-elements';

export default function ExploreCMA() {

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
                        sx={{ mb: { xs: 5, md: 8 }, textAlign: { xs: 'center', md: 'left' } }}
                    />

                    <Grid container spacing={4} justifyContent="center">
                        {/* Curriculum Overview Card */}
                        <Grid item xs={12} md={4}>
                            <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 3 }}>
                                <CardContent>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#34495e' }}>
                                        Curriculum Overview
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 3, color: '#7f8c8d' }}>
                                        The CMA curriculum is designed to equip students with the skills and knowledge required
                                        to excel in the field of cost and management accounting. It covers a wide range of
                                        topics, including financial planning, analysis, control, and decision-making.
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        component={Link}
                                        to="/cma-curriculum" // Replace with your route
                                        sx={{
                                            backgroundColor: '#3498db',
                                            '&:hover': { backgroundColor: '#2980b9' },
                                        }}
                                    >
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Exam Structure Card */}
                        <Grid item xs={12} md={4}>
                            <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 3 }}>
                                <CardContent>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#34495e' }}>
                                        Exam Structure
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 3, color: '#7f8c8d' }}>
                                        The CMA exam consists of two parts, each focusing on different aspects of cost and
                                        management accounting. Part 1 covers financial reporting and planning, while Part 2
                                        focuses on strategic financial management.
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        component={Link}
                                        to="/cma-exam-structure" // Replace with your route
                                        sx={{
                                            backgroundColor: '#3498db',
                                            '&:hover': { backgroundColor: '#2980b9' },
                                        }}
                                    >
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Career Opportunities Card */}
                        <Grid item xs={12} md={4}>
                            <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 3 }}>
                                <CardContent>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#34495e' }}>
                                        Career Opportunities
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 3, color: '#7f8c8d' }}>
                                        CMA certification opens doors to a wide range of career opportunities in finance,
                                        accounting, and management. CMAs are highly sought after for roles in financial
                                        analysis, budgeting, and strategic decision-making.
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        component={Link}
                                        to="/cma-career-opportunities" // Replace with your route
                                        sx={{
                                            backgroundColor: '#3498db',
                                            '&:hover': { backgroundColor: '#2980b9' },
                                        }}
                                    >
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    {/* Eye-catching Grid Layout for Posts */}
                    <Grid container spacing={4} justifyContent="center" sx={{ my: 4 }}>
                        <Grid item xs={12} md={6} lg={4}>
                            <Card sx={{ borderRadius: 2, boxShadow: 3, position: 'relative' }}>
                                <Image src="https://www.vsijaipur.com/wp-content/uploads/2023/04/CMA-Course-Syllabus.webp" alt="Post Image" style={{ width: '100%', height: 'auto' }} />
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#34495e' }}>
                                        Learn More About CMA Curriculum
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 3, color: '#7f8c8d' }}>
                                        Explore the benefits of CMA certification and how it can boost your career in finance and accounting.
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        component={Link}
                                        to="/cma-career-benefits" // Replace with your route
                                        sx={{
                                            backgroundColor: '#3498db',
                                            '&:hover': { backgroundColor: '#2980b9' },
                                        }}
                                    >
                                        Read More
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Card sx={{ borderRadius: 2, boxShadow: 3, position: 'relative' }}>
                                <Image src="https://cdn.prod.website-files.com/645aa2e27789bd5dc9627211/653bd4b655d7359bc014dfff_CMA%20KC%20Home.jpg" alt="Post Image" style={{ width: '100%', height: 'auto' }} />
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#34495e' }}>
                                        Stay Ahead in the Industry
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 3, color: '#7f8c8d' }}>
                                        Learn how CMA certification can help you stay updated with the latest industry trends and best practices.
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        component={Link}
                                        to="/cma-industry-insights" // Replace with your route
                                        sx={{
                                            backgroundColor: '#3498db',
                                            '&:hover': { backgroundColor: '#2980b9' },
                                        }}
                                    >
                                        Read More
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Card sx={{ borderRadius: 2, boxShadow: 3, position: 'relative' }}>
                                <Image src="https://www.newlawjournal.co.uk/images/default-source/woodwing/163900.png?sfvrsn=c7509847_2" alt="Post Image" style={{ width: '100%', height: 'auto' }} />
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#34495e' }}>
                                        Explore CMA Exam Prep
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 3, color: '#7f8c8d' }}>
                                        Get insights into the CMA exam preparation process and how to increase your chances of success.
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        component={Link}
                                        to="/cma-exam-prep" // Replace with your route
                                        sx={{
                                            backgroundColor: '#3498db',
                                            '&:hover': { backgroundColor: '#2980b9' },
                                        }}
                                    >
                                        Read More
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </MotionViewport>
        </Box>
    )
}


