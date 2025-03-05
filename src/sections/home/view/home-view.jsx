'use client';

import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { HomeHero } from '../home-hero';
import { HomeFAQs } from '../home-faqs';
import { HomeZoneUI } from '../home-zone-ui';
import { HomeMinimal } from '../home-minimal';
import { HomePricing } from '../home-pricing';
import { HomeForDesigner } from '../home-for-designer';
import { HomeTestimonials } from '../home-testimonials';
import { HomeIntegrations } from '../home-integrations';
import { HomeAdvertisement } from '../home-advertisement';
import { HomeHugePackElements } from '../home-hugepack-elements';
import { HomeHighlightFeatures } from '../home-highlight-features';
import HomeLandingSection from '../home-landing-section';
import HomeProgramsEvents from '../home-programs-events';
import HomeGridGallery from '../home-gallery-comp';
import HomeLanding from '../home-landing';

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

        <HomeGridGallery/>
        
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
