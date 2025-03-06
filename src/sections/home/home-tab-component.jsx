import { Box, Container, Paper, Tab, Grid, Link, CardMedia, CardContent, Card } from '@mui/material'
import React from 'react'
import { Iconify } from 'src/components/iconify';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

export default function HomeTabComponent() {
  const [value, setValue] = React.useState(0);

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
        height: '100%', 
        backgroundColor: bgColor,
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
          transform: 'translateY(-4px)'
        }
      }}
    >
      <Link 
        href="#" 
        underline="hover" 
        sx={{ 
          display: 'block',
          fontWeight: 'medium',
          color: bgColor === '#f5f5f5' ? 'text.primary' : 'white'
        }}
      >
        <Typography variant="h6">{title}</Typography>
      </Link>
    </Paper>
  );

  // New tab structure with three tabs
  const tabsData = [
    { 
      label: 'Students', 
      icon: 'hugeicons:students', 
      content: (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <BlogPost 
              image="/api/placeholder/800/500" 
              title="10 Study Tips Every CMA Student Should Know"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContentLink 
              title="Student Resources" 
              bgColor="#f5f5f5"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ContentLink 
              title="Scholarship Programs" 
              bgColor="#3f51b5"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ContentLink 
              title="Student Membership" 
              bgColor="#f5f5f5"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ContentLink 
              title="Campus Events" 
              bgColor="#3f51b5"
            />
          </Grid>
        </Grid>
      )
    },
    { 
      label: 'Become a CMA', 
      icon: 'duo-icons:certificate', 
      content: (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <BlogPost 
              image="https://www.icmab.gov.bd/icmab-new-curriculum/final-syllabus-structure-subject-titles-of-new-syllabus2021/" 
              title="How I Passed the CMA Exam on My First Try"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContentLink 
              title="CMA Certification Process" 
              bgColor="#f5f5f5"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ContentLink 
              title="Exam Information" 
              bgColor="#3f51b5"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ContentLink 
              title="Study Resources" 
              bgColor="#f5f5f5"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ContentLink 
              title="Experience Requirements" 
              bgColor="#3f51b5"
            />
          </Grid>
        </Grid>
      )
    },
    { 
      label: 'Public Practice', 
      icon: 'solar:buildings-outline', 
      content: (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <BlogPost 
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRQQcftTPt28d0nRqJa3iiuux92a5HDEwNNw&s" 
              title="Building a Successful Accounting Practice: A Case Study"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContentLink 
              title="Firm Directory" 
              bgColor="#f5f5f5"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ContentLink 
              title="Regulatory Updates" 
              bgColor="#3f51b5"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ContentLink 
              title="Practice Resources" 
              bgColor="#f5f5f5"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ContentLink 
              title="Professional Development" 
              bgColor="#3f51b5"
            />
          </Grid>
        </Grid>
      )
    }
  ];


  
  return (
    <Box sx={{ py:10 }}>
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