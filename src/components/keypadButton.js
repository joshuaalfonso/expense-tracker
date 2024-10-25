





const KeypadButton = ( {value, background, onClick} ) => {
    return (
        <div 
            className={`bg-[${background}] p-6 rounded-[30px] text-center text-4xl font-light`}
            onClick={() => onClick(value)}
        >
            {value}
        </div>
    )
}


export default KeypadButton