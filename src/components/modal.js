import { motion } from "framer-motion"




const Modal = ({ open, onClose, children }) => {
    return ( 
        <div 
            className={`p-2 absolute top-0 left-0 w-full h-full overflow-y-hidden flex justify-center items-end transition-colors bg-zinc-900/80 visible }`} 
            onClick={onClose}
        >
            <motion.div 
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                className="bg-white p-5 w-full rounded-t-3xl" 
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </motion.div>

        </div>
    )
}

export default Modal;

// ${ open ? 'visible bg-zinc-900/80' : 'invisible '