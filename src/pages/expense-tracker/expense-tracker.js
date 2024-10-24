import { useState } from "react";
import useAddTransaction from "../../hooks/useAddTransactions";
import useGetTransactions from "../../hooks/useGetTransactions";
import Header from "../../components/header";
import Modal from "../../components/modal";
import tags from "../../hooks/useGetTags";
import { format } from "date-fns";


const ExpenseTracker = () => {
    const { addTransaction } = useAddTransaction();
    const { transactions, transactionsTotal } = useGetTransactions();
    
    const [description, setDescription] = useState(null);
    const [transactionAmount, setTransactionAmount] = useState(0);
    // const [transactionType, setTransactionType] = useState('expense');

    const [open, setOpen] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            description, 
            transactionAmount, 
            // transactionType
        });
    };
    

    return (
        <>
            <div 
                className=""
            >
                <div className="container">

                    <Modal open={open} onClose={() => setOpen(false)}> 
                        <form className="add-transaction px-4" onSubmit={onSubmit}>
                            
                            {/* <input 
                                type="text" 
                                className="bg-zinc-800 px-2 py-2 outline-none w-full text-white rounded-lg border-1 transition-colors duration-100 border-solid focus:border-[#596A95] border-white mb-3"
                                placeholder="Description" 
                                required 
                                onChange={(e) => setDescription(e.target.value)}
                            ></input> */}
                            
                            <input 
                                type="number" 
                                className="text-center bg-zinc-800 px-2 py-2 outline-none w-full text-white rounded-lg border-1 transition-colors duration-100 border-solid focus:border-[#596A95] border-white mb-3"
                                placeholder="Amount" 
                                required
                                onChange={(e) => setTransactionAmount(e.target.value)}
                            ></input>


                            {description ? (
                                <div className="text-center mb-4">
                                    <p> {description.emoji} </p>
                                    <h1 className="text-white"> {description.title} </h1>
                                </div>
                            ) : <h1 className="text-white mb-4 text-center">Please select a tag</h1>}

                            <ul className="grid grid-cols-4 gap-4 mb-4">
                                {tags.map((tag, index) => (
                                    <li key={index} className="flex flex-col items-center" onClick={() => setDescription(tag)}>
                                        <p className="text-2xl">{tag.emoji}</p> 
                                        <h1 className="text-white text-sm">{tag.title}</h1>
                                    </li>
                                ))}
                            </ul>

                            <button 
                                type="submit"
                                className="w-full inline-flex cursor-pointer items-center justify-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100 mb-3"
                            >
                                Add transaction
                            </button>

                        </form>
                    </Modal>

                    <button
                        onClick={() => setOpen(true)} 
                        className="absolute bottom-6 right-6 bg-zinc-800 px-4 py-3 rounded-full text-white"
                    >
                        < i className="bx bx-plus" />
                    </button>

                    <Header />

                    <div className="summary">

                        <div className="expenses px-4 py-20 flex flex-col justify-center items-center">
                            <p className="text-white/70 text-sm">Spent this month</p>
                            <h1 className="text-5xl text-red-500">₱ - {transactionsTotal}.00</h1>
                        </div>

                    </div>



                </div>
            </div>
            
            <div className="transactions px-4">
                <ul>
                    {/* {transactions.map((transaction, index) => {
                        const {description, transactionAmount, createdAt} = transaction;

                        return (
                            
                            <li key={index} className="bg-zinc-800 rounded mb-3 flex flex-col px-4 py-4">

                                <h3 className="text-white/40 mb-3 text-sm"> { format(createdAt, "MMMM dd, yyyy") } </h3>

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
                                <h1 className="text-white/40 text-sm mb-3">
                                    {days.day}
                                </h1>
                            </div>
                            <ul className="flex flex-col gap-2">
                                {days.transactions.map((transaction, index) => (
                                    <li key={index} className="bg-zinc-800 flex rounded p-4">

                                        <div className="flex flex-1 gap-3">
                                            <div className="w-12 grid place-items-center text-3xl"> 
                                                {transaction.description.emoji} 
                                            </div>
                                            <div>
                                                <h1 className="text-white"> {transaction.description.title} </h1>
                                                <p className="text-white/40 text-sm"> { format(transaction.createdAt, "H:mma") } </p>
                                            </div>
                                        </div>

                                        <span className="text-red-500 grid place-items-center">
                                            - {transaction.transactionAmount} ₱
                                        </span> 
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </> 
    )
}

export default ExpenseTracker;