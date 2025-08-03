import React from 'react';
import { m } from 'framer-motion';
import RouterLink from 'next/link';

import { Box, Card, Link, Button, Typography, CardContent } from '@mui/material';

import { Image } from 'src/components/image';

const posts = [
  {
    id: 1,
    title: 'Post One',
    content:
      'This is the first post. It contains a detailed description.This is the third post with another brief description.',
    image: 'https://icmab.gov.bd/wp-content/uploads/2024/12/Picture-7.jpg',
  },
  {
    id: 2,
    title: 'Post Two',
    content:
      'This is the second post. A brief description here.This is the third post with another brief description.',
    image: 'https://icmab.gov.bd/wp-content/uploads/2024/12/Picture-7.jpg',
  },
  {
    id: 3,
    title: 'Post Three',
    content:
      'This is the third post with another brief description.This is the third post with another brief description.',
    image: 'https://icmab.gov.bd/wp-content/uploads/2024/12/Picture-7.jpg',
  },
];

export default function HomeProgramsEvents() {
  return (
    <Box sx={{ py: 14, px: 3 }}>
      <Typography
        sx={{
          width: '100%',
          fontSize: '24px',
          fontWeight: 700,
          lineHeight: '32px',
          textAlign: 'start',
          mb: 4,
        }}
      >
        Programs & Events
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch', // Change to stretch to maintain equal height
          gap: '20px',
        }}
      >
        <Box
          sx={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <m.div style={{ height: '100%' }}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box sx={{ position: 'relative', height: '70%' }}>
                <Image
                  alt={posts[0].title}
                  src={posts[0].image}
                  ratio="5/2"
                  sx={{ height: '100%' }}
                />
              </Box>
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box>
                  <Link component={RouterLink} href="#" color="inherit" variant="subtitle2">
                    {posts[0].title}
                  </Link>
                  <Typography variant="body2">{posts[0].content}</Typography>
                </Box>
              </CardContent>
            </Card>
          </m.div>
        </Box>
        <Box sx={{ width: '50%' }}>
          <m.div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              gap: '20px',
            }}
          >
            {posts.slice(1).map((post) => (
              <m.div key={post.id} style={{ height: '50%' }}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100%',
                  }}
                >
                  <Box sx={{ position: 'relative', maxWidth: '40%' }}>
                    <Image alt={post.title} src={post.image} ratio="4/2" sx={{ height: '100%' }} />
                  </Box>
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%',
                      }}
                    >
                      <Typography variant="subtitle2">{post.title}</Typography>
                      <Typography variant="body2">{post.content}</Typography>
                      <Button
                        size="small"
                        variant="contained"
                        color="inherit"
                        sx={{ width: 'fit-content' }}
                      >
                        Read more
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </m.div>
            ))}
          </m.div>
        </Box>
      </Box>
    </Box>
  );
}
