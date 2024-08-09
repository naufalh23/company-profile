import AboutMain from "./components/aboutmain";
import DetailAbout from "./components/detailabout";
import MainPage from "./components/main";
import ProductCard from "./components/productcard";
import { Testimoni } from "./components/testimoni";




export default function Home() {
  return (
    <>
      <MainPage />
      <AboutMain />
      <DetailAbout />
      <ProductCard />
      <Testimoni />
    </>
  );
}
