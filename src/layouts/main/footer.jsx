import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { _socials } from 'src/_mock';
import { TwitterIcon, FacebookIcon, LinkedinIcon, InstagramIcon } from 'src/assets/icons';

import { Logo } from 'src/components/logo';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'About Us',
    children: [
      { name: 'The Institute', href: paths.about },
      { name: 'Corporate Headquarters', href: paths.contact },
      { name: 'International Global Affiliations', href: paths.faqs },
      { name: 'New Curriculum Structure', href: paths.faqs },
    ],
  },
  {
    headline: 'Students',
    children: [
      { name: 'Student Statistics', href: '#' },
      { name: 'Student Directory', href: '#' },
      { name: 'Student Notice Board', href: '#' },
      { name: 'Download Forms', href: '#' },
    ],
  },
  {
    headline: 'Members',
    children: [
      { name: 'Membership', href: '#' },
      { name: `Desk of Member's Affair`, href: '#' },
      { name: 'Membership Form', href: '#' },
    ],
  },
];

// ----------------------------------------------------------------------

export function Footer({ layoutQuery, sx }) {
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ position: 'relative', bgcolor: 'background.default', ...sx }}>
      {/* <Divider /> */}
      <Container
        sx={{
          pb: 5,
          pt: 10,
          textAlign: 'center',
          [theme.breakpoints.up(layoutQuery)]: { textAlign: 'unset' },
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            mt: 3,
            justifyContent: 'center',
            [theme.breakpoints.up(layoutQuery)]: { justifyContent: 'space-between' },
          }}
        >
          <Grid item xs={12} md={3}>
            <Logo />
            <Typography
              variant="body2"
              sx={{
                mx: 'auto',
                maxWidth: 280,
                mt:2,
                [theme.breakpoints.up(layoutQuery)]: { mx: 'unset' },
              }}
            >
              The starting point for your next project with Minimal UI Kit, built on the newest
              version of Material-UI &copy;, ready to be customized to your style.
            </Typography>

            <Stack
              direction="row"
              sx={{
                mt: 3,
                mb: 5,
                justifyContent: 'center',
                [theme.breakpoints.up(layoutQuery)]: { mb: 0, justifyContent: 'flex-start' },
              }}
            >
              {_socials.map((social) => (
                <IconButton key={social.label} color="inherit">
                  {social.value === 'twitter' && <TwitterIcon />}
                  {social.value === 'facebook' && <FacebookIcon />}
                  {social.value === 'instagram' && <InstagramIcon />}
                  {social.value === 'linkedin' && <LinkedinIcon />}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Stack
              spacing={2}
              sx={{
                flexDirection: 'column',
                alignItems: 'center',
                [theme.breakpoints.up(layoutQuery)]: { flexDirection: 'row', alignItems: 'flex-start' },
              }}
            >
              {LINKS.slice(0, 1).map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  sx={{
                    width: 1,
                    alignItems: 'center',
                    [theme.breakpoints.up(layoutQuery)]: { alignItems: 'flex-start' },
                  }}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack
              spacing={2}
              sx={{
                flexDirection: 'column',
                alignItems: 'center',
                [theme.breakpoints.up(layoutQuery)]: { flexDirection: 'row', alignItems: 'flex-start' },
              }}
            >
              {LINKS.slice(1, 2).map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  sx={{
                    width: 1,
                    alignItems: 'center',
                    [theme.breakpoints.up(layoutQuery)]: { alignItems: 'flex-start' },
                  }}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Stack
              spacing={2}
              sx={{
                flexDirection: 'column',
                alignItems: 'center',
                [theme.breakpoints.up(layoutQuery)]: { flexDirection: 'row', alignItems: 'flex-start' },
              }}
            >
              {LINKS.slice(2).map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  sx={{
                    width: 1,
                    alignItems: 'center',
                    [theme.breakpoints.up(layoutQuery)]: { alignItems: 'flex-start' },
                  }}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      href={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="body2">
          © All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

export function HomeFooter({ sx }) {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'background.default',
        ...sx,
      }}
    >
      <Container>
        {/* <Logo /> */}
        <Footer />
        {/* <Box sx={{ mt: 1, typography: 'caption' }}>
          © All rights reserved.
          <br /> made by
          <Link href="https://minimals.cc/"> minimals.cc </Link>
        </Box> */}
      </Container>
    </Box>
  );
}
