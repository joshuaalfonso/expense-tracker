import { useState } from "react";
import useAddTransaction from "../../hooks/useAddTransactions";
import useGetTransactions from "../../hooks/useGetTransactions";
import Header from "../../components/header";


const ExpenseTracker = () => {
    const { addTransaction } = useAddTransaction();
    const { transactions, transactionsTotal } = useGetTransactions();
    
    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [transactionType, setTransactionType] = useState('expense');

    const onSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            description, 
            transactionAmount, 
            transactionType
        });
    };

    return (
        <>
            <div className="">
                <div className="container">

                    {/* <h1 className="text-white">Expense Tracker</h1> */}
                    <Header />

                    {/* <div className="balance">
                        <h3> Balance </h3>
                        <h2> P 0.00 </h2>
                    </div> */}

                    <div className="summary">

                        {/* <div className="income">
                            <h3>Income</h3>
                            <p>P 0.00</p>
                        </div> */}

                        <div className="expenses px-4 py-20 flex flex-col justify-center items-center">
                            <p className="text-white/70 text-sm">Spent this month</p>
                            <h1 className="text-5xl text-red-500">₱ - {transactionsTotal}</h1>
                        </div>

                    </div>

                    <form className="add-transaction px-4" onSubmit={onSubmit}>
                        {/* <label>Amount</label> */}
                        <input 
                            type="text" 
                            className="bg-zinc-800 px-2 py-2 outline-none w-full text-white rounded-lg border-1 transition-colors duration-100 border-solid focus:border-[#596A95] border-white mb-3"
                            placeholder="Description" 
                            required 
                            onChange={(e) => setDescription(e.target.value)}
                        ></input>
                        
                        <input 
                            type="number" 
                            className="bg-zinc-800 px-2 py-2 outline-none w-full text-white rounded-lg border-1 transition-colors duration-100 border-solid focus:border-[#596A95] border-white mb-3"
                            placeholder="Amount" 
                            required
                            onChange={(e) => setTransactionAmount(e.target.value)}
                        ></input>

                        {/* <label htmlFor="expense">Expense</label>
                        <input 
                            type="radio" 
                            id="expense" 
                            value="expense"
                            checked={transactionType === 'expense'}
                            onChange={(e) => setTransactionType(e.target.value)}
                        ></input> */}

                        {/* <label htmlFor="income">Income</label>
                        <input 
                            type="radio" 
                            id="income" 
                            value="income"
                            checked={transactionType === 'income'}
                            onChange={(e) => setTransactionType(e.target.value)}
                        ></input> */}

                        <div className="flex gap-3 mb-3">
                            <label className="relative flex items-center cursor-pointer">
                                <input
                                    className="sr-only peer"
                                    name="futuristic-radio"
                                    type="radio"
                                    value="expense"
                                    checked={transactionType === 'expense'}
                                    onChange={(e) => setTransactionType(e.target.value)}
                                />
                                <div
                                className="w-6 h-6 bg-transparent border-2 border-red-500 rounded-full peer-checked:bg-red-500 peer-checked:border-red-500 peer-hover:shadow-lg peer-hover:shadow-red-500/50 peer-checked:shadow-lg peer-checked:shadow-red-500/50 transition duration-300 ease-in-out"
                                ></div>
                                <span className="ml-2 text-white">Expense</span>
                            </label>

                            <label className="relative flex items-center cursor-pointer">
                                <input 
                                    className="sr-only peer" 
                                    name="futuristic-radio" 
                                    type="radio" 
                                    value="income"
                                    checked={transactionType === 'income'}
                                    onChange={(e) => setTransactionType(e.target.value)}
                                />
                                <div
                                className="w-6 h-6 bg-transparent border-2 border-green-500 rounded-full peer-checked:bg-green-500 peer-checked:border-green-500 peer-hover:shadow-lg peer-hover:shadow-green-500/50 peer-checked:shadow-lg peer-checked:shadow-green-500/50 transition duration-300 ease-in-out"
                                ></div>
                                <span className="ml-2 text-white">Income</span>
                            </label>
                        </div>

                        <button 
                            type="submit"
                            className="w-full inline-flex cursor-pointer items-center justify-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100 mb-3"
                        >
                            Add transaction
                        </button>

                    </form>

                </div>
            </div>
            
            <div className="transactions px-4">
                <h3 className="text-white/70 mb-3">Transactions</h3>
                <ul>
                    {transactions.map((transaction, index) => {
                        const {description, transactionAmount, transactionType} = transaction;

                        return (
                            <li key={index} className="bg-zinc-800 rounded mb-3 flex px-3 py-2">
                                <h4 className="text-white flex flex-col flex-1">
                                    {description}
                                    <span className="text-xs text-white/70"> {transactionType} </span>
                                </h4>
                                <p className="text-red-500 grid place-items-center">
                                    - {transactionAmount} ₱ 
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </> 
    )
}

export default ExpenseTracker;