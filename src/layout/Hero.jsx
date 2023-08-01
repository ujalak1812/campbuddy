import Header from "layout/Header";
import Button from "components/Button";

const Hero = () => {
  return (
    <section className="bg-hero bg-cover bg-fixed bg-left-bottom bg-no-repeat">
      <Header />
      <div className="px-6 py-52 text-center text-white 2xl:container sm:py-60 xl:py-72">
        <h1 className="mb-6">Discover the best Campgrounds</h1>
        <p className="mx-auto mb-6 sm:w-3/5">
          Find and review your favourite campgrounds in USA National Parks
        </p>
        <Button
          url="#"
          classes="inline-block w-11/12 hover:bg-h-white sm:max-w-fit"
        >
          Start Exploring
        </Button>
      </div>
    </section>
  );
};

export default Hero;
