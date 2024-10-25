import { useState } from "react";
import useAddTransaction from "../../hooks/useAddTransactions";
import useGetTransactions from "../../hooks/useGetTransactions";
import Header from "../../components/header";
import Modal from "../../components/modal";
import tags from "../../hooks/useGetTags";
import { format } from "date-fns";
import { motion } from "framer-motion";
import KeypadButton from "../../components/keypadButton";
import NavBar from "../../components/navbar";


const ExpenseTracker = () => {
    const { addTransaction } = useAddTransaction();
    const { transactions, transactionsTotal } = useGetTransactions();
    
    const [description, setDescription] = useState(null);
    const [transactionAmount, setTransactionAmount] = useState('');
    // const [transactionType, setTransactionType] = useState('expense');

    const [open, setOpen] = useState(false);
    const [pending, setPending] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        setPending(!pending);

        addTransaction({
            description, 
            transactionAmount, 
        }).then(
            response => {
                console.log(response)
            }, err => {
                console.log(err)
            }
        ).finally(() => {
            setOpen(false)
            setPending(false);
        });

    };


        // Function to handle button clicks
    const handleKeypadClick = (value) => {
        // If the value is a number or ".", update the input
        if (!isNaN(value) || value === ".") {
            setTransactionAmount((prev) => prev + value);
        }
    };

    const handleRemoveClick = () => {
        setTransactionAmount((prev) => prev.slice(0, -1));
    };
    

    return (
        <>
            <div 
                className=""
            >
                <div className="container">

                    {open && (
                        <Modal open={open} onClose={() => setOpen(false)}> 
                        <form className="add-transaction " onSubmit={onSubmit}>
                            
                            {/* <input 
                                type="number" 
                                className="text-center text-2xl bg-white px-2 py-2 outline-none w-full text-black rounded-lg border-1 transition-colors duration-100 border-solid focus:border-[#596A95] border-white mb-3"
                                placeholder="Amount" 
                                required
                                onChange={(e) => setTransactionAmount(e.target.value)}
                            ></input> */}

                            <h1 className="text-center text-6xl font-medium">
                                {transactionAmount || '0'}
                            </h1>


                            {description ? (
                                <div className="text-center">
                                    <p> {description.emoji} </p>
                                    <h1 className="text-black"> {description.title} </h1>
                                </div>
                            ) : <h1 className="text-black mb-8 text-center">Please select a tag</h1>}

                            {/* <ul className="grid grid-cols-4 gap-4 mb-4">
                                {tags.map((tag, index) => (
                                    <motion.li 
                                        whileHover={{ scale: 1.1 }}
                                        key={index} 
                                        className="flex flex-col items-center cursor-pointer" 
                                        onClick={() => setDescription(tag)}
                                    >
                                        <p className="text-2xl">{tag.emoji}</p> 
                                        <h1 className="text-black text-sm">{tag.title}</h1>
                                    </motion.li>
                                ))}
                            </ul> */}

                            <div className=" grid grid-cols-4  mb-4 gap-1">

                                <KeypadButton 
                                    value="1"
                                    background="#F5F5F5"
                                    onClick={handleKeypadClick}
                                />

                                <KeypadButton 
                                    value="2"
                                    background="#F5F5F5"
                                    onClick={handleKeypadClick}
                                />

                                <KeypadButton 
                                    background="#F5F5F5"
                                    value="3"
                                    onClick={handleKeypadClick}
                                />

                                {/* <KeypadButton 
                                    value="⌫"
                                    background="#fee2e2"
                                    // onClick={handleKeypadClick}
                                /> */}

                                <div 
                                    className="bg-red-100 p-6 rounded-[30px] text-center text-4xl"
                                    onClick={handleRemoveClick }
                                ><i className='bx bx-x'></i></div>

                                <KeypadButton 
                                    background="#F5F5F5"
                                    value="4"
                                    onClick={handleKeypadClick}
                                />
                                <KeypadButton 
                                    background="#F5F5F5"
                                    value="5"
                                    onClick={handleKeypadClick}
                                />
                                <KeypadButton 
                                    background="#F5F5F5"
                                    value="6"
                                    onClick={handleKeypadClick}
                                />

                                <button 
                                    className="bg-blue-100 p-6 rounded-[30px] text-center text-4xl"
                                ><i className='bx bx-calendar font-light'></i></button>

                                <KeypadButton 
                                    background="#F5F5F5"
                                    value="7"
                                    onClick={handleKeypadClick}
                                />
                                <KeypadButton 
                                    background="#F5F5F5"
                                    value="8"
                                    onClick={handleKeypadClick}
                                />
                                <KeypadButton 
                                    background="#F5F5F5"
                                    value="9"
                                    onClick={handleKeypadClick}
                                />

                                <button className="bg-black text-white p-6 rounded-[30px] text-center text-4xl font-light row-span-2 grid place-items-center">
                                    <i className='bx bx-check'></i>
                                </button>

                                <button className=" p-6 rounded-[30px] text-center text-4xl"></button>
                                <button className="bg-[#F5F5F5] p-6 rounded-[30px] text-center text-4xl font-light">0</button>
                                <button className=" p-6 bg-[#F5F5F5] rounded-[30px] text-center text-4xl font-light">.</button>

                                
                            </div>

                            {/* <button 
                                type="submit"
                                className={`w-full  cursor-pointer text-center rounded border bg-black text-white px-4 h-10 font-semibold   mb-3 ${pending ? ' opacity-30 pointer-events-none' : ''}`}
                            >
                                {pending ? (
                                    <i className='bx bx-loader bx-spin text-xl '></i>
                                )  : 'Submit'}
                                
                            </button> */}

                        </form>
                        </Modal>
                    )}

                    

                    <button
                        onClick={() => setOpen(true)} 
                        className="absolute bottom-20 right-6 bg-zinc-800 px-4 py-3 rounded-full text-white"
                    >
                        < i className="bx bx-plus" />
                    </button>

                    <Header/>

                    <div className="summary">

                        <div className="expenses px-4 py-20 flex flex-col justify-center items-center">
                            <p className="text-[#979797] text-sm">Spent this month</p>
                            <h1 className="text-5xl text-[#FF745D] font-medium">₱ - {transactionsTotal}.00</h1>
                        </div>

                    </div>



                </div>
            </div>
            
            <div className="transactions px-4">
                <ul className="">
                    {/* {transactions.map((transaction, index) => {
                        const {description, transactionAmount, createdAt} = transaction;

                        return (
                            
                            <li key={index} className="bg-zinc-800 rounded mb-3 flex flex-col px-4 py-4">

                                <h3 className="text-white/40 mb-3 text-sm"> 
                                { format(createdAt, "MMMM dd, yyyy") || '' } 
                                </h3>

                                <div className="flex">
                                    <div className="text-white flex flex-1 gap-2">
                                        
                                        <span className="text-4xl grid place-items-center">{description.emoji}</span>

                                        <div>
                                            <h1>{description.title}</h1>
                                            <p className="text-white/40 text-sm"> { format(createdAt, "H:mma") } </p>
                                        </div>
                                        
                                    </div>
                                    <p className="text-red-500 grid place-items-center">
                                        - {transactionAmount} ₱ 
                                    </p>
                                </div>
                            </li>
                        )
                    })} */}

                    {transactions.map((days, index) => (
                        <li key={index} className="mb-6"> 
                            <div>
                                <h1 className="text-[#979797] text-sm mb-3">
                                    {format(days.day, 'MMM dd, yyyy')} 
                                </h1>
                            </div>
                            <ul className="flex flex-col gap-2">
                                {days.transactions.map((transaction, index) => (
                                    <li key={index} className="bg-[#F5F5F5] flex rounded p-4">

                                        <div className="flex flex-1 gap-3">
                                            <div className="w-12 grid place-items-center text-3xl"> 
                                                {transaction.description.emoji} 
                                            </div>
                                            <div>
                                                <h1 className="text-black font-semibold"> {transaction.description.title} </h1>
                                                <p className="text-[#979797] text-sm"> { format(transaction.createdAt, "H:mm a") } </p>
                                            </div>
                                        </div>

                                        <span className="text-[#FF745D] font-semibold grid place-items-center">
                                            - {transaction.transactionAmount} ₱
                                        </span> 
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>

            <nav className="absolute bg-white bottom-0 left-0 w-full py-3 px-10 shadow">
                <NavBar />
            </nav>
        </> 
    )
}

export default ExpenseTracker;