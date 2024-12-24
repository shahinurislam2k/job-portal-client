import React from "react";
import { motion } from "motion/react";
import team1 from '../../assets/tem/tem1.jpg';
import team2 from '../../assets/tem/tem2.jpg';

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96 pb-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Image container */}
        <div className="flex-1">
          <motion.img
            src={team1}
            animate={{y: [50, 100,50]}}
            transition={{duration: 10, repeat: Infinity}}

            className="max-w-sm w-64 rounded-t-3xl rounded-br-3xl border-primary border-l-8 border-b-8  shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{x: [100, 150, 100]}}
            transition={{duration: 10, delay:5, repeat: Infinity}}

            className="max-w-sm w-64 rounded-t-3xl rounded-br-3xl border-primary border-l-8 border-b-8  shadow-2xl"
          />


          
        </div>
        {/* Text container */}
        <div className="flex-1">
          <motion.h1
          animate={{x:50, color:['#aaa2f1']}}
          transition={{duration:2, delay:1, ease: "easeInOut", repeat:Infinity}}
           className="text-5xl font-bold">Latest <motion.span
           animate={{color:['#77c5ff','#33ffe3', '#ff33f6', '#8fff33']}}
           transition={{duration:1.5, repeat: Infinity}}
           >Jobs </motion.span>For You</motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
