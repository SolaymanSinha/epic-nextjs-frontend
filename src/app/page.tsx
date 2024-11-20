import { HeroSection } from "@/components/custom/HeroSection";
import { Button } from "@/components/ui/button";
import qs from "qs";

const homePageQuery = qs.stringify(
  {
    populate: {
      blocks: {
        on: {
          "layout.hero-section": {
            populate: {
              image: {
                fields: ["url", "alternativeText"] 
              },
              link: {
                populate: true
              }
            }
          }
        }
      }
    },
  }
)

async function getStrapiData(path: string) {
  const baseURL = "http://localhost:1337";
  
  const url = new URL(path, baseURL);
  url.search = homePageQuery;
  console.log(url);

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const strapiData = await getStrapiData("/api/home-page");
  console.log(strapiData);
  
  return (
    <HeroSection data={strapiData?.data?.blocks[0]} />
  );
}
