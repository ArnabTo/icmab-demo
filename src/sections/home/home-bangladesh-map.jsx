'use client';

import { useRef, useState } from 'react';
import { Marker, Geography, Geographies, ComposableMap, ZoomableGroup } from 'react-simple-maps';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

// Bangladesh GeoJSON simplified for better performance
const BANGLADESH_GEO_URL = `${CONFIG.assetsDir}/map/bangladesh_geojson.json`;

const LOCATIONS = [
  {
    id: '1',
    name: 'Dhaka',
    address: 'The Capital City',
    coordinates: [90.4125, 23.8103],
    description: 'ICMAB Head Office',
  },
  {
    id: '2',
    name: 'Chittagong',
    address: 'Port City',
    coordinates: [91.7832, 22.3569],
    description: 'ICMAB Regional Office',
  },
  {
    id: '3',
    name: 'Sylhet',
    address: 'Tea Gardens',
    coordinates: [91.8687, 24.8949],
    description: 'ICMAB Branch Office',
  },
  {
    id: '4',
    name: 'Rajshahi',
    address: 'Silk City',
    coordinates: [88.6042, 24.3745],
    description: 'ICMAB Training Center',
  },
];

export default function HomeBangladeshMap() {
  const theme = useTheme();
  const paragraphRef = useRef(null);
  const mapBoxRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        position: 'relative',
        backgroundImage: 'url(/assets/background/background-3-blur.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          zIndex: 1,
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 9 }}>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            mb: 8,
            color: 'common.white',
          }}
        >
          Who Are We
        </Typography>

        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ color: 'common.white', flex: 1 }} ref={paragraphRef}>
              <Typography variant="h4" paragraph>
                Institute of Cost and Management Accountants of Bangladesh
              </Typography>

              <Typography sx={{ mb: 3 }}>
                The Institute of Cost and Management Accountants of Bangladesh (ICMAB) is the
                national professional body of Cost and Management Accountants in Bangladesh. It was
                established with the prime objective of promoting and regulating the Cost and
                Management Accounting profession in the country.
              </Typography>

              <Typography sx={{ mb: 3 }}>
                Since its establishment, ICMAB has been playing a vital role in the industrial and
                economic development of Bangladesh. The Institute produces highly qualified and
                skilled professional accountants who are well equipped to provide leadership in the
                fields of cost and management accounting.
              </Typography>

              <Typography sx={{ mb: 3 }}>
                ICMAB is dedicated to helping businesses achieve greater efficiency and
                competitiveness through effective cost management strategies. Our members are
                trained to identify cost-saving opportunities, optimize resource allocation, and
                improve financial performance.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={7} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box
              sx={{ flex: 1, overflow: 'hidden', borderRadius: 2, position: 'relative' }}
              ref={mapBoxRef}
            >
              <Paper
                sx={{
                  height: '100%',
                  width: '100%',
                  position: 'relative',
                  backgroundColor: theme.palette.primary.dark,
                }}
              >
                <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{
                    scale: 4800,
                    center: [90.4125, 23.8103], // Centered on Dhaka
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <ZoomableGroup center={[90.4125, 23.8103]} zoom={1}>
                    <Geographies geography={BANGLADESH_GEO_URL}>
                      {({ geographies }) =>
                        geographies.map((geo) => (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={theme.palette.primary.lighter}
                            stroke={theme.palette.primary.main}
                            strokeWidth={0.5}
                            style={{
                              default: {
                                fill: theme.palette.primary.lighter,
                                stroke: theme.palette.primary.main,
                                strokeWidth: 0.5,
                                outline: 'none',
                              },
                              hover: {
                                fill: theme.palette.primary.light,
                                stroke: theme.palette.primary.main,
                                strokeWidth: 0.5,
                                outline: 'none',
                              },
                              pressed: {
                                fill: theme.palette.primary.main,
                                stroke: theme.palette.primary.dark,
                                strokeWidth: 0.5,
                                outline: 'none',
                              },
                            }}
                          />
                        ))
                      }
                    </Geographies>

                    {LOCATIONS.map((location) => (
                      <Marker
                        key={location.id}
                        coordinates={location.coordinates}
                        onClick={() =>
                          setSelectedLocation(location.id === selectedLocation ? null : location.id)
                        }
                      >
                        {/* Location Pin SVG */}
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ cursor: 'pointer' }}
                        >
                          <path
                            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
                            fill={
                              location.id === selectedLocation
                                ? theme.palette.error.main
                                : theme.palette.primary.main
                            }
                            stroke={theme.palette.common.white}
                            strokeWidth={1}
                          />
                        </svg>
                        {location.id === selectedLocation && (
                          <g>
                            <rect
                              x={10}
                              y={-30}
                              width={150}
                              height={60}
                              rx={5}
                              fill={theme.palette.background.paper}
                              stroke={theme.palette.divider}
                            />
                            <text
                              textAnchor="start"
                              x={18}
                              y={-10}
                              style={{
                                fill: theme.palette.text.primary,
                                fontSize: 14,
                                fontWeight: 'bold',
                                fontFamily: theme.typography.fontFamily,
                              }}
                            >
                              {location.name}
                            </text>
                            <text
                              textAnchor="start"
                              x={18}
                              y={5}
                              style={{
                                fill: theme.palette.text.secondary,
                                fontSize: 12,
                                fontFamily: theme.typography.fontFamily,
                              }}
                            >
                              {location.address}
                            </text>
                            <text
                              textAnchor="start"
                              x={18}
                              y={20}
                              style={{
                                fill: theme.palette.primary.main,
                                fontSize: 12,
                                fontFamily: theme.typography.fontFamily,
                              }}
                            >
                              {location.description}
                            </text>
                          </g>
                        )}
                      </Marker>
                    ))}
                  </ZoomableGroup>
                </ComposableMap>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
