'use client';

import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { HomeHero } from '../home-hero';
import { HomeFAQs } from '../home-faqs';
import SmoothScroll from '../smooth-scroll';
import ExploreCMA from '../home-explore-cma';
import HomeTabComponent from '../home-tab-component';
import HomeOurSuccessStories from '../home-our-success';
import { HomeAdvertisement } from '../home-advertisement';

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
        <SmoothScroll />

        <HomeTabComponent />

        <HomeOurSuccessStories />

        <ExploreCMA />

        {/* <HomeHugePackElements /> */}

        {/* <HomeForDesigner /> */}

        {/* <HomeHighlightFeatures /> */}

        {/* <HomeIntegrations /> */}

        {/* <HomePricing /> */}

        <HomeFAQs />

        {/* <HomeZoneUI /> */}

        <HomeAdvertisement />
      </Stack>
    </>
  );
}
