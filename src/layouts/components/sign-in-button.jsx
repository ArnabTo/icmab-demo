import Button from '@mui/material/Button';

import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/config-global';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function SignInButton({ sx, ...other }) {
  return (
    <Button
      component={RouterLink}
      href={CONFIG.auth.redirectPath}
      variant="contained"
      color="blue"
      size="large"
      startIcon={<Iconify icon="solar:arrow-right-up-line-duotone" />}
      sx={sx}
      {...other}
    >
      Sign in
    </Button>
  );
}
