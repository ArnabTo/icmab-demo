'use client';

import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { HomeHero } from '../home-hero';
import { HomeFAQs } from '../home-faqs';
import HomeLanding from '../home-landing';
import { HomeZoneUI } from '../home-zone-ui';
import OurUsers from '../home-our-user-data';
import { HomeMinimal } from '../home-minimal';
import { HomePricing } from '../home-pricing';
import HomeGridGallery from '../home-gallery-comp';
import HomeTabComponent from '../home-tab-component';
import { HomeForDesigner } from '../home-for-designer';
import { HomeTestimonials } from '../home-testimonials';
import { HomeIntegrations } from '../home-integrations';
import { HomeAdvertisement } from '../home-advertisement';
import { HomeHugePackElements } from '../home-hugepack-elements';
import { HomeHighlightFeatures } from '../home-highlight-features';

// ----------------------------------------------------------------------

export function HomeView() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTop />

      <HomeHero />

      {/* <HomeLandingSection/> */}

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>

        <HomeLanding/>
        {/* <HomeProgramsEvents/> */}

        <OurUsers/>

        <HomeGridGallery/>
        
        <HomeTabComponent/>

        <HomeMinimal />

        <HomeHugePackElements />

        <HomeForDesigner />

        <HomeHighlightFeatures />

        <HomeIntegrations />

        <HomePricing />

        <HomeTestimonials />

        <HomeFAQs />

        <HomeZoneUI />

        <HomeAdvertisement />
      </Stack>
    </>
  );
}
