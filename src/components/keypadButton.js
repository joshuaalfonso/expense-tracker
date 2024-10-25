import { motion } from "framer-motion"





const KeypadButton = ( {value, background, onClick} ) => {
    return (
        <motion.div 
            whileTap={{scale: 1.1}}
            className={`bg-[${background}] p-6 rounded-[30px] text-center text-4xl font-light`}
            onClick={() => onClick(value)}
        >
            {value}
        </motion.div>
    )
}


export default KeypadButton