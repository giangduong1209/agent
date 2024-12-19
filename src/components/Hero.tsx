import Button from "./ui/Button";
import DownArrow from "../assets/chevron-right-svgrepo-com (5) 1.png";
import RightArrow from "../assets/chevron-right-svgrepo-com (5) 1 (1).png";
import HeroImg from "../assets/Hero.png";

const Hero = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
      <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
        <div className="text-center md:text-left space-y-10 lg:max-w-[547px]">
          <h1 className="font-bold text-4xl">
            Close More Deals by{" "}
            <span className="text-[#676FC5]">Instantly Matching</span> Buyers to
            the Right Properties
          </h1>
          <p className="font-medium text-[#787EA2] text-xl mt-2 lg:max-w-[400px]">
            Revolutionize how you find and present properties - save time and
            impress client with professional presentation
          </p>
          <div className="flex justify-center lg:justify-normal items-center gap-10">
            <Button className="flex items-center justify-between gap-10">
              <span>Get Started</span>
              <img src={DownArrow} alt="down arrow" />
            </Button>
            <Button
              mode="default"
              className="flex justify-between items-center gap-10"
            >
              <span className="text-[#676FC5]">Try Playground</span>
              <img src={RightArrow} alt="right arrow" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={HeroImg} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
