"use client";
import MainLayout from "src/layouts/main";
import HeroImageService from "src/components/image/hero-image-service";
import TextWithImage from "src/components/text-with-image/text-with-image";

export default function TranparencyCompanyView(params) {
  return (
    <MainLayout>
      <HeroImageService
        imgURL={
          "https://images.adsttc.com/media/images/5f17/35c7/b357/65da/b000/0006/large_jpg/TGWM_065_DC76368_L.jpg?1595356596"
        }
        description={
          "The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style."
        }
        title={"Байгууллагын ил тод байдал"}
      />
      <TextWithImage
        imgURL={
          "https://www.pinsight.com/wp-content/uploads/2023/02/PlanandOrganizeWork-notext.png"
        }
        title={"Байгууллагын ил тод байдал"}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qu officia deserunt mollit anim id est laborum."
        }
      />
    </MainLayout>
  );
}
