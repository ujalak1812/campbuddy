import Header from "layout/Header";
import Button from "components/Button";

const Hero = () => {
  return (
    <section className="bg-hero bg-fixed bg-left-bottom bg-no-repeat bg-cover">
      <Header />
      <div className="py-52 sm:py-60 xl:py-72 px-6 text-center text-white 2xl:container">
        <h1 className="xl:text-6xl sm:text-5xl text-4xl mb-6 font-serif font-bold">
          Discover the best Campgrounds
        </h1>
        <p className="mb-6 mx-auto font-sans sm:w-3/5">
          Find, Add and review your favourite campgrounds in USA National Parks
        </p>
        <Button url="#" classes="inline-block w-11/12 sm:max-w-fit">
          Start Exploring
        </Button>
      </div>
    </section>
  );
};

export default Hero;
