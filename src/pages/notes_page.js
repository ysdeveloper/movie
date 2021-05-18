import React from 'react'
import { motion } from 'framer-motion'

const NotesPage = (props) => {
    return (
        <motion.div className="notes" initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1}}} exit={{opacity: 0}}>
            <h6 className="title">Notes</h6>
        </motion.div>
    );
}

export default NotesPage