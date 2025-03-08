import { m } from 'framer-motion';
import { useEffect, useState } from 'react';


import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

import { CONFIG } from 'src/config-global';
import { varAlpha, stylesMode } from 'src/theme/styles';

import {Chart, useChart } from 'src/components/chart';
import { SvgColor } from 'src/components/svg-color';
import { LoadingScreen } from 'src/components/loading-screen';
import { varFade, MotionViewport } from 'src/components/animate';

import { SectionTitle } from './components/section-title';
import { CircleSvg, FloatLine, FloatPlusIcon } from './components/svg-elements';
import { ChartRadialBar } from '../_examples/extra/chart-view/chart-radial-bar';


// ----------------------------------------------------------------------

export function HomeMinimal({ sx, ...other }) {

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
      name: `${row.dimensionValues[1].value}`,
      value: parseInt(row.metricValues[0].value, 10),
      city: row.dimensionValues[1].value
    }));
  };

  // const locationData = data ? prepareLocationData(data) : [];

  const locationData = [
    {
      "name": "Dhaka",
      "value": 1,
      "city": "Dhaka"
    },
    {
      "name": "Narsingdi",
      "value": 2,
      "city": "Narsingdi"
    },
    {
      "name": "Dhaka",
      "value": 20,
      "city": "Dhaka"
    },
    {
      "name": "Dhaka",
      "value": 20,
      "city": "Dhaka"
    },
 
  ];

  const renderLines = (
    <>
      <FloatPlusIcon sx={{ top: 72, left: 72 }} />
      <FloatPlusIcon sx={{ bottom: 72, left: 72 }} />
      <FloatLine sx={{ top: 80, left: 0 }} />
      <FloatLine sx={{ bottom: 80, left: 0 }} />
      <FloatLine vertical sx={{ top: 0, left: 80 }} />
    </>
  );

  const renderDescription = (
    <>
      <SectionTitle
        caption="Visualizing Success"
        title="Our"
        txtGradient="Community"
        sx={{ mb: { xs: 5, md: 8 }, textAlign: { xs: 'center', md: 'left' } }}
      />

      <Stack
        spacing={6}
        sx={{
          maxWidth: { sm: 560, md: 400 },
          mx: { xs: 'auto', md: 'unset' },
        }}
      >
        {ITEMS.map((item) => (
          <Box
            component={m.div}
            key={item.title}
            variants={varFade({ distance: 24 }).inUp}
            gap={3}
            display="flex"
          >
            <SvgColor src={item.icon} sx={{ width: 40, height: 40 }} />
            <Stack spacing={1}>
              <Typography variant="h5" component="h6">
                {item.title}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>
            </Stack>
          </Box>
        ))}
      </Stack>
    </>
  );

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
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
            {entry.city} ({(entry.value / locationData.reduce((sum, item) => sum + item.value, 0) * 100).toFixed(0)}%)
          </Typography>
        </Box>
      ))}
    </Box>
  );

  const chartOptions = useChart({
    stroke: { width: 0 },
    xaxis: { 
      categories: locationData.map(item => item.city) 
    },
    tooltip: {
      y: {
        formatter: (value) => value,
        title: { formatter: () => '' },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '30%',
        borderRadius: 2,
      },
    },
  });

  return (
    <Box
      component="section"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        py: { xs: 10, md: 20 },
        ...sx,
      }}
      {...other}
    >
      <MotionViewport>
        {renderLines}

        <Container sx={{ position: 'relative', alignItems: 'center' }}>
          <Grid container columnSpacing={{ xs: 0, md: 8 }} sx={{ position: 'relative', zIndex: 9, alignItems: 'center' }}>
            <Grid xs={12} md={6} lg={7}>
              {renderDescription}
            </Grid>

            {
              loading ? <Box><LoadingScreen /></Box>
                :
                <Grid item md={6} lg={5} sx={{ display: { xs: 'none', md: 'block' } }}>
                  <m.div variants={itemVariants}>
                    <Box height={300}>
                      <Chart 
                        type="bar" 
                        series={[{ 
                          data: locationData.map(item => item.value) 
                        }]} 
                        options={chartOptions} 
                        height={320}
                        sx={{
                          '& .apexcharts-canvas': {
                            bgcolor: 'background.default',
                            borderRadius: 2,
                            boxShadow: (theme) =>
                              `-40px 40px 80px 0px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
                            [stylesMode.dark]: {
                              boxShadow: (theme) =>
                                `-40px 40px 80px 0px ${varAlpha(theme.vars.palette.common.blackChannel, 0.16)}`,
                            },
                          },
                        }}
                      />
                    </Box>
                  </m.div>

                  {/* <m.div variants={itemVariants}>
                    <Box height={300}>
                      <ChartRadialBar 
                        chart={{
                          series: locationData.map(item => item.value),
                          categories: locationData.map(item => item.city),
                        }}
                        sx={{
                          '& .apexcharts-canvas': {
                            bgcolor: 'background.default',
                            borderRadius: 2,
                            p: 3,
                            boxShadow: (theme) =>
                              `-40px 40px 80px 0px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
                            [stylesMode.dark]: {
                              boxShadow: (theme) =>
                                `-40px 40px 80px 0px ${varAlpha(theme.vars.palette.common.blackChannel, 0.16)}`,
                            },
                          },
                        }}
                      />
                    </Box>
                  </m.div> */}
                </Grid>
            }

          </Grid>

          <CircleSvg variants={varFade().in} sx={{ display: { xs: 'none', md: 'block' } }} />
        </Container>
      </MotionViewport>
    </Box>
  );
}

// ----------------------------------------------------------------------

const ITEMS = [
  {
    icon: `${CONFIG.assetsDir}/assets/icons/home/ic-make-brand.svg`,
    title: 'User Analytics',
    description: 'Track and analyze user engagement across different locations in Bangladesh.',
  },
  {
    icon: `${CONFIG.assetsDir}/assets/icons/home/ic-design.svg`,
    title: 'Geographic Reach',
    description: 'Visualize our growing community distribution across major cities.',
  },
  {
    icon: `${CONFIG.assetsDir}/assets/icons/home/ic-development.svg`,
    title: 'Active Members',
    description: 'Monitor real-time user activity and engagement metrics by region.',
  },
];
