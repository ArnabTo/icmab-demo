import { Box, Container, Paper, Tab, Grid, Link, CardMedia, CardContent, Card, Button, useTheme } from '@mui/material'
import React from 'react'
import { Iconify } from 'src/components/iconify';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { Theme } from '@fullcalendar/core/internal';

export default function HomeTabComponent() {
  const [value, setValue] = React.useState(0);

  const theme = useTheme();
  console.log(theme)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Blog post component with hover effect
  const BlogPost = ({ image, title }) => (
    <Card sx={{
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      '&:hover .thumbnail': {
        transform: 'scale(1.05)'
      }
    }}>
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="400"
          image={image}
          alt={title}
          className="thumbnail"
          sx={{
            transition: 'transform 0.3s ease-in-out',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.7) 100%)',
              pointerEvents: 'none'
            }
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
            p: 2
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              pb: 1,
              fontWeight: 'bold',
              fontStyle: 'underline',
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Card>
  );

  // Content link with styling
  const ContentLink = ({ title, bgColor }) => (
    <Paper
      sx={{
        p: 3,
        width: '50%',
        height: '100%',
        backgroundColor: bgColor,
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 2,
        '&:hover': {
          boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
          transform: 'translateY(-4px)'
        }
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <Button variant='contained' sx={{ width: 'fit-content' }}>Read more...</Button>
    </Paper>
  );

  // New tab structure with three tabs
  const tabsData = [
    {
      label: 'Students',
      icon: 'hugeicons:students',
      content: (
        <Grid container spacing={3}>
          {/* Left Column */}
          <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {/* Row 1 - Two Boxes in Flex */}
            <Box sx={{ display: "flex", gap: 3 }}>
              <ContentLink title="Cost and Management Accountants Act-2018 (Authentic English Text)" bgColor={theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.grey[400]} />
              <ContentLink title="Scholarship Programs" bgColor={theme.palette.mode === 'dark' ? theme.palette.grey[400] : theme.palette.secondary.main} />
            </Box>

            {/* Rows 2-4 (Spanning 3 Rows) - Blog Post */}
            <Grid item sx={{ flexGrow: 1 }}>
              <BlogPost image="https://icmab.gov.bd/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-07-at-12.16.27-AM.jpeg" title="10 Study Tips Every CMA Student Should Know" />
            </Grid>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {/* Rows 1-3 (Spanning 3 Rows) - Blog Post */}
            <Grid item sx={{ flexGrow: 1 }}>
              <BlogPost image="https://icmab.gov.bd/wp-content/uploads/2025/03/IMG_1810-scaled.jpg" title="Top Study Hacks for CMA Students" />
            </Grid>

            {/* Row 4 - Two Boxes in Flex */}
            <Box sx={{ display: "flex", gap: 3 }}>
              <ContentLink title="Cost and Management Accountants Act-2018 (Authentic English Text)" bgColor={theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.grey[400]} />
              <ContentLink title="Scholarship Programs" bgColor={theme.palette.mode === 'dark' ? theme.palette.grey[400] : theme.palette.secondary.main} />
            </Box>
          </Grid>
        </Grid>
      )
    },
    {
      label: 'Become a CMA',
      icon: 'duo-icons:certificate',
      content: (
        <Grid container spacing={3}>
          {/* Left Column */}
          <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
               {/* Rows 2-4 (Spanning 3 Rows) - Blog Post */}
               <Grid item sx={{ flexGrow: 1 }}>
              <BlogPost image="https://icmab.gov.bd/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-07-at-12.16.27-AM.jpeg" title="10 Study Tips Every CMA Student Should Know" />
            </Grid>
           
            {/* Row 1 - Two Boxes in Flex */}
            <Box sx={{ display: "flex", gap: 3 }}>
              <ContentLink title="Cost and Management Accountants Act-2018 (Authentic English Text)" bgColor={theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.grey[400]} />
              <ContentLink title="Scholarship Programs" bgColor={theme.palette.mode === 'dark' ? theme.palette.grey[400] : theme.palette.secondary.main} />
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {/* Row 4 - Two Boxes in Flex */}
            <Box sx={{ display: "flex", gap: 3 }}>
              <ContentLink title="Cost and Management Accountants Act-2018 (Authentic English Text)" bgColor={theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.grey[400]} />
              <ContentLink title="Scholarship Programs" bgColor={theme.palette.mode === 'dark' ? theme.palette.grey[400] : theme.palette.secondary.main} />
            </Box>

            {/* Rows 1-3 (Spanning 3 Rows) - Blog Post */}
            <Grid item sx={{ flexGrow: 1 }}>
              <BlogPost image="https://icmab.gov.bd/wp-content/uploads/2025/03/IMG_1810-scaled.jpg" title="Top Study Hacks for CMA Students" />
            </Grid>
          </Grid>
        </Grid>
      )
    },
    {
      label: 'Public Practice',
      icon: 'solar:buildings-outline',
      content: (
        <Grid container spacing={3}>
        {/* Left Column */}
        <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
             {/* Rows 2-4 (Spanning 3 Rows) - Blog Post */}
             <Grid item sx={{ flexGrow: 1 }}>
            <BlogPost image="https://icmab.gov.bd/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-07-at-12.16.27-AM.jpeg" title="10 Study Tips Every CMA Student Should Know" />
          </Grid>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Row 4 - Two Boxes in Flex */}
          <Box sx={{ display: "flex", gap: 3 }}>
            <ContentLink title="Cost and Management Accountants Act-2018 (Authentic English Text)" bgColor={theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.grey[400]} />
            <ContentLink title="Scholarship Programs" bgColor={theme.palette.mode === 'dark' ? theme.palette.grey[400] : theme.palette.secondary.main} />
          </Box>
         {/* Row 1 - Two Boxes in Flex */}
         <Box sx={{ display: "flex", gap: 3 }}>
            <ContentLink title="Scholarship Programs" bgColor={theme.palette.mode === 'dark' ? theme.palette.grey[400] : theme.palette.secondary.main} />
            <ContentLink title="Cost and Management Accountants Act-2018 (Authentic English Text)" bgColor={theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.grey[400]} />
          </Box>

        </Grid>
      </Grid>
      )
    }
  ];



  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          sx={{ mb: 3 }}
        >
          {tabsData.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              iconPosition="top"
              icon={<Iconify icon={tab.icon} width={24} />}
            />
          ))}
        </Tabs>

        {/* Tab content */}
        <Box sx={{ mt: 2 }}>
          {tabsData[value].content}
        </Box>
      </Container>
    </Box>
  )
}