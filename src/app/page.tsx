import AboutMain from "./components/aboutmain";
import DetailAbout from "./components/detailabout";
import MainPage from "./components/main";




export default function Home() {
  return (
    <div className="static">
      <MainPage />
      <AboutMain />
      <DetailAbout />
    </div>
  );
}
