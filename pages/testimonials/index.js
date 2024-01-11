import { motion } from "framer-motion";
import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center ">
      <div className="container mx-auto h-full flex flex-col justify-center  ">
        {/* title */}
        <motion.h2 
          variants={fadeIn("up", 0.2)} 
          initial="hidden" 
          animate="show" 
          exit="hidden" 
          className="text-[35px] leading-tight md:text-[54px] md:leading-[1.3] mb-8 font-semibold xl:mb-0 "
        >
          what clients <span className="text-accent">say.</span> 
        </motion.h2>
        {/* slider */}
        <motion.div 
          variants={fadeIn("up", 0.4)} 
          initial="hidden" 
          animate="show" 
          exit="hidden"         
        >
          <TestimonialSlider/>
        </motion.div>
      </div>
    </div>
  )
};

export default Testimonials;
