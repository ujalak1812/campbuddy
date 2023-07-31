import Header from "layout/Header";
import Button from "components/Button";

const Hero = () => {
  return (
    <section className="bg-hero bg-fixed bg-left-bottom bg-no-repeat bg-cover">
      <Header />
      <div className="py-52 sm:py-60 xl:py-72 px-6 text-center text-white 2xl:container">
        <h1 className="mb-6">Discover the best Campgrounds</h1>
        <p className="mb-6 mx-auto sm:w-3/5">
          Find and review your favourite campgrounds in USA National Parks
        </p>
        <Button url="#" classes="inline-block w-11/12 sm:max-w-fit">
          Start Exploring
        </Button>
      </div>
    </section>
  );
};

export default Hero;
