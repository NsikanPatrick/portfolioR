// Motion
import { motion } from "framer-motion";
// Variant
import { fadeIn } from "../variants";
// Images
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section -mt-46 sm:mt-28" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae inventore totam magni possimus laborum facere
                obcaecati est maxime, quaerat sunt.
              </p>
              <button className="btn btn-sm">View All Projects</button>
            </div>
            {/* Image */}
            <div className="group relative overflow-hidden border-2 border-accent rounded-3xl">
              {/* Background overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-500"></div>
              {/* Image1 */}
              <img
                src={Img1}
                alt="Image 1"
                className="group-hover:scale-125 transition-all duration-500"
              />
              {/* Pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* Title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex flex-col gap-y-10"
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* 2  Image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-3xl">
              {/* Background overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-500"></div>
              {/* Image2 */}
              <img
                src={Img2}
                alt="Image 1"
                className="group-hover:scale-125 transition-all duration-500"
              />
              {/* Pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* Title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>

            {/* 2 Image 2 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-3xl">
              {/* Background overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-500"></div>
              {/* Image3 */}
              <img
                src={Img3}
                alt="Image 1"
                className="group-hover:scale-125 transition-all duration-500"
              />
              {/* Pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* Title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
