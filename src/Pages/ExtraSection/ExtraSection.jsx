
import { motion } from "framer-motion"
// import img1 from '../../assets/images/banner.jpg'
import { useState } from "react";



const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
const ExtraSection = () => {
    
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <button onClick={() => setIsOpen(isOpen => !isOpen)} />
       <p>hghghghg</p>
      </motion.nav>
    );
};

export default ExtraSection;



