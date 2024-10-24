




const Modal = ({ open, onClose, children }) => {
    return (
        <div 
            className={`p-4 absolute top-0 left-0 w-full inset-0 flex justify-center items-center transition-colors ${ open ? 'visible bg-zinc-900' : 'invisible '}`} 
            onClick={onClose}
        >
            <div className="bg-zinc-800 p-5 w-full rounded" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;