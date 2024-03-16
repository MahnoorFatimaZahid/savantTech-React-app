import styles from "../style";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section id="home" className={`flex justify-center items-center flex-col ${styles.paddingY} m-4`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} font-normal text-[28px] mr-2 text-[#33C6AB] `}>
            Join the success stories
          </p>
          <FiArrowUpRight className="text-[#33C6AB]"/>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Revolutionize Your<br className="sm:block hidden" />{" "}
            <span className="text-gradient">Digital Footprint </span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          With SavantTech
        </h1>
        <p className={`${styles.paragraph} max-w-[490px] mx-auto mt-5`}>
          Dive into a realm where technology <br /> precisely orbits your needs.
        </p>
      </div>
    </section>
  );
};

export default Hero;
