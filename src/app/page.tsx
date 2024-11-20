import { FeatureSection } from '@/components/custom/FeatureSection';
import { HeroSection } from '@/components/custom/HeroSection';
import { getHomePageData } from '@/data/loaders';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blockRenderer = (block: any) => {
  switch (block.__component) {
    case 'layout.hero-section':
      return <HeroSection key={block.id} data={block} />;
    case 'layout.feature-section':
      return <FeatureSection key={block.id} data={block} />;
  }
};

export default async function Home() {
  const strapiData = await getHomePageData();
  // console.log(strapiData);
  const { blocks } = strapiData?.data;
  return <>{blocks?.map((block: unknown) => blockRenderer(block))}</>;
}
