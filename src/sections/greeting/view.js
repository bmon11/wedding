"use client";

import MainLayout from "src/layouts/main";
import HeroImage from "src/components/image/hero-image";
import ServiceItem from "../home/service-item";
import GreetingItem from "../home/greeting-item";

export default function GreetingView(params) {
  return (
    <MainLayout>
      <HeroImage
        imgURL={
          "https://images.adsttc.com/media/images/5f17/35c7/b357/65da/b000/0006/large_jpg/TGWM_065_DC76368_L.jpg?1595356596"
        }
        description={""}
        title={""}
      />
      <GreetingItem />
      <ServiceItem />
    </MainLayout>
  );
}
