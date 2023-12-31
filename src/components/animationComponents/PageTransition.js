  import { motion } from "framer-motion"
  
  export default function PageTransition({children}){
    return(
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
            {children}
        </motion.div>
    )
  }
  