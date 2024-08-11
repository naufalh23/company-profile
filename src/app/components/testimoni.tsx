import CardSlider from '../components/testimonialslider';

const Home: React.FC = () => {
  return (
    <div className="container w-[80%] mx-auto p-4">
      <h1 className="font-bold underline underline-offset-4 decoration-4 text-3xl text-center mb-8 text-text1">Apa Kata Mereka?</h1>
      <CardSlider />
    </div>
  );
};

export default Home;
