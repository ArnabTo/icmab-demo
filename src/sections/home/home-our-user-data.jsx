import { m } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import { Pie, Cell, Legend, PieChart, ResponsiveContainer } from 'recharts'

import { Box, Card, CardContent, CircularProgress, Grid, Paper, Tooltip, Typography, useTheme, Container } from '@mui/material'

export default function OurUsers() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const theme = useTheme();

    // Define colors for the pie chart
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#8dd1e1'];

    useEffect(() => {
        const fetchAnalyticsData = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/analytics');
                if (!response.ok) {
                    throw new Error('Failed to fetch analytics data');
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAnalyticsData();
    }, []);

    // Process the data for visualization
    const prepareLocationData = (analyticsData) => {
        if (!analyticsData || !analyticsData.rows) return [];

        // Combine country and city for display
        return analyticsData.rows.map(row => ({
            name: `${row.dimensionValues[0].value}, ${row.dimensionValues[1].value}`,
            value: parseInt(row.metricValues[0].value, 10),
            country: row.dimensionValues[0].value,
            city: row.dimensionValues[1].value
        }));
    };

    const locationData = data ? prepareLocationData(data) : [];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    // Custom tooltip component
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <Paper
                    elevation={3}
                    sx={{
                        p: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        border: `1px solid ${theme.palette.primary.main}`
                    }}
                >
                    <Typography variant="subtitle2" color="textPrimary">
                        {payload[0].payload.country}, {payload[0].payload.city}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Active Users: {payload[0].value}
                    </Typography>
                </Paper>
            );
        }
        return null;
    };

    const renderCustomLegend = () => (
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    mb: 2,
                    gap: 1
                }}
            >
                {locationData.map((entry, index) => (
                    <Box
                        key={`legend-${index}`}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mx: 1,
                            mb: 1
                        }}
                        component={m.div}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Box
                            sx={{
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                backgroundColor: COLORS[index % COLORS.length],
                                mr: 1
                            }}
                        />
                        <Typography variant="body2">
                            {entry.country}, {entry.city} ({(entry.value / locationData.reduce((sum, item) => sum + item.value, 0) * 100).toFixed(0)}%)
                        </Typography>
                    </Box>
                ))}
            </Box>
        );

    if (loading) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="300px"
            >
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="300px"
            >
                <Typography color="error" variant="h6">Error: {error}</Typography>
            </Box>
        );
    }



    return (
        <Box sx={{ my: 16 }}>
            <Container>
                <m.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Card component={m.div} variants={itemVariants}>
                        <CardContent>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Our User in Bangladesh
                            </Typography>
                            <Typography variant="body2" color="textSecondary" paragraph>
                                Active users by location over the last 30 days
                            </Typography>

                            <Grid container spacing={3} sx={{ alignItems: 'center', flexDirection: 'row-reverse' }}>
                                {/* Pie Chart */}
                                <Grid item xs={12} md={6}>
                                    <m.div variants={itemVariants}>
                                        <Box height={300}>

                                            {renderCustomLegend()}

                                            <ResponsiveContainer width="100%" height="70%">
                                                <PieChart>
                                                    <Pie
                                                        data={locationData}
                                                        cx="50%"
                                                        cy="50%"
                                                        outerRadius={80}
                                                        innerRadius={40}
                                                        fill="#8884d8"
                                                        paddingAngle={5}
                                                        dataKey="value"
                                                        labelLine={false}
                                                        animationBegin={0}
                                                        animationDuration={1500}
                                                    >
                                                        {locationData.map((entry, index) => (
                                                            <Cell
                                                                key={`cell-${index}`}
                                                                fill={COLORS[index % COLORS.length]}
                                                            />
                                                        ))}
                                                    </Pie>
                                                    <Tooltip content={<CustomTooltip />} />
                                                    <Legend />
                                                </PieChart>
                                            </ResponsiveContainer>
                                        </Box>
                                    </m.div>
                                </Grid>

                                {/* Stats Cards */}
                                <Grid item xs={12} md={6}>
                                    <Box>
                                        {locationData.map((location, index) => (
                                            <m.div
                                                key={`location-${index}`}
                                                variants={itemVariants}
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Paper
                                                    sx={{
                                                        p: 2,
                                                        mb: 2,
                                                        borderLeft: `4px solid ${COLORS[index % COLORS.length]}`,
                                                    }}
                                                    elevation={2}
                                                >
                                                    <Typography variant="h6" component="h3">
                                                        {location.country}
                                                    </Typography>
                                                    <Typography variant="body1">
                                                        {location.city}
                                                    </Typography>
                                                    <Typography variant="h5" sx={{ mt: 1 }}>
                                                        {location.value} <Typography component="span" variant="body2" color="textSecondary">active users</Typography>
                                                    </Typography>
                                                </Paper>
                                            </m.div>
                                        ))}
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </m.div>
            </Container>
        </Box>
    )
}
