import AboutMain from "./components/aboutmain";
import MainPage from "./components/main";
import ProjectMain from "./components/projectmain";



export default function Home() {
  return (
    <div className="static">
      <MainPage />
      <AboutMain />
      <ProjectMain />
    </div>
  );
}
