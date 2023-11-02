import CustomButton from '../CustomButton';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollTo = () => {
    const ele: HTMLElement | null =
      document.getElementById('catalogue');

    ele?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x max-h-[920px]">
        <h1 className="hero__title">
        Feel the Freedom, Start the Journey!
        </h1>
        <p className="hero__subtitle text-gray-200">
        Ready for an unforgettable journey with gold standard service
           will you? Experience car rental with Gold Options
           You can make every moment special by crowning it.
        </p>

        <CustomButton
          title="Discover Cars"
          designs="mt-10"
          handleClick={scrollTo}
        />
      </div>
      <div className="w-100 flex justify-center">
        <motion.img
          src="/hero.png"
          className="img-fluid object-contain"
          initial={{ translateX: 200, scale: 0.5 }}
          whileInView={{ translateX: 0, scale: 1.2 }}
          transition={{ duration: 2 }}
        />
      </div>
    </div>
  );
};

export default Hero;
