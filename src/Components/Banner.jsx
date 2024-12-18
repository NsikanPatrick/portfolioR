// Images
import AvatarImage from "../assets/avatar.svg";
// Icons
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// Type animation
import { TypeAnimation } from "react-type-animation";
// Motion
import { motion } from "framer-motion";
// Variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section flex items-center min-h-[75vh] lg:min-h-[68vh] mt-24 sm:mt-12" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-8 lg:items-center lg:gap-x-12">
          {/* Text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} className="text-[45px] font-bold leading-[0.8] lg:text-[60px] mb-2">
              Nsikan <span>Adaowo</span>
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} className="mb-6 text-[34px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white mr-4">I am </span>
              <TypeAnimation
                sequence={[
                  "A Developer",
                  2000,
                  "A Designer",
                  2000,
                  "A Researcher",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
              </motion.div>
              <motion.p variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} className="mb-8 max-w-lg max-auto lg:mx-0 text-[17px] capitalize">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae inventore totam magni possimus laborum facere
                obcaecati est maxime, quaerat sunt.
              </motion.p>
              <motion.div variants={fadeIn('down', 0.6)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
                <button className="btn btn-lg">Contact Me</button>
                <a href="" className="text-gradient btn-link">My Portfolio</a>
              </motion.div>
              {/* Socials */}
              <motion.div variants={fadeIn('down', 0.7                                                                                                                                                                                                                                                                                                                                                                                                       )} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                <a href="">
                    <FaGithub />
                </a>
                <a href="">
                    <FaLinkedin />
                </a>
                <a href="">
                    <FaTwitter />
                </a>
              </motion.div>
            
          </div>
          {/* Image */}
          <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <img src={AvatarImage} alt="Avatar" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
