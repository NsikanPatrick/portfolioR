// Icon
import { BsArrowUpRight } from "react-icons/bs";
// Motion
import { motion } from "framer-motion";
// Variant
import { fadeIn } from "../variants";

// Services Data
import {services}  from "../Constants";
const Services = () => {
  return (
    <section className="section -mt-36 sm:mt-24" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Text */}
          <motion.div variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }} className="flex-1 lg:bg-services lg-bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">What I do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I am a Freelance Front-end Developer, with over 5 years of
              experience.
            </h3>
            <button className="btn btn-sm">See My Work</button>
          </motion.div>
          {/* Services */}
          <motion.div className="flex-1" variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}>
            {/* List of Services */}
            <div>
                {services.map((service, index) => {
                    // Destructuring service
                    const {name, description, link} = service;
                    return(
                        <div key={index} className=" flex hover:bg-purple-900 p-4 hover:rounded-2xl border-b border-white/20 h-[146px] mb-[38px]">
                            <div className="max-w-[476px]">
                                <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{name}</h4>
                                <p className="font-secondary leading-tight">{description}</p>
                            </div>
                            <div className="flex flex-col flex-1 items-end">
                                <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                                    <BsArrowUpRight />
                                </a>
                                <a href="3" className="text-gradient text-sm">{link}</a>
                            </div>
                        </div>
                    )
                })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
