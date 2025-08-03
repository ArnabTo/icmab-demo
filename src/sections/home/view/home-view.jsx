'use client';

import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import HomeQuote from '../home-quote';
import { HomeHero } from '../home-hero';
import { HomeFAQs } from '../home-faqs';
import HomeLanding from '../home-landing';
import ExploreCMA from '../home-explore-cma';
import { HomeMinimal } from '../home-minimal';
import HomeGridGallery from '../home-gallery-comp';
import HomeTabComponent from '../home-tab-component';
import HomeBangladeshMap from '../home-bangladesh-map';
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
        <HomeLanding />

        <HomeBangladeshMap />

        {/* <HomeProgramsEvents/> */}

        {/* <OurUsers/> */}

        <HomeGridGallery />

        <HomeTabComponent />

        <HomeMinimal />

        <HomeOurSuccessStories />

        <HomeQuote />

        <ExploreCMA />

        {/* <HomeHugePackElements /> */}

        {/* <HomeForDesigner /> */}

        {/* <HomeHighlightFeatures /> */}

        {/* <HomeIntegrations /> */}

        {/* <HomePricing /> */}

        {/* <HomeTestimonials /> */}

        <HomeFAQs />

        {/* <HomeZoneUI /> */}

        <HomeAdvertisement />
      </Stack>
    </>
  );
}
