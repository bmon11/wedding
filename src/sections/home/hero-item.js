import CarouselAnimation from "../carousel-view/carousel-animation";
import { dataPlaceholder } from "../carousel-view/data-placeholder";

// Placeholder

export default function HeroItem(params) {
  // return <>haha</>;
  return <CarouselAnimation data={dataPlaceholder.slice(4, 8)} />;
}
