import React from 'react'
import { motion, useScroll } from 'framer-motion'


const ScrollProgress: React.FC = () => {
    const { scrollYProgress } = useScroll()
  
    return (
        <motion.div className="fixed z-[99] top-0 left-0 right-0 h-1 bg-primary" style={{ scaleX: scrollYProgress, transformOrigin: '0%' }} />  
    )
}

export default ScrollProgress