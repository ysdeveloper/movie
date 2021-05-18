import React from 'react'
import { motion } from 'framer-motion' 

const MembersPage = () => {
    return <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1}}} exit={{opacity: 0}}>Hello this is members page</motion.div>
}

export default MembersPage