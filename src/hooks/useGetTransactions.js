import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase-config";
import useGetUserInfo from "./useGetUserInfo";


export const useGetTransactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [transactionsTotal, setTransactionsTotal] = useState(0);

    const transactionCollectionRef = collection(db, 'transactions');
    const {userID} = useGetUserInfo();

    const getTransactions = async () => {
        let unsubscribe;
        try {

            const queryTransactions = query(
                transactionCollectionRef, 
                where('userID', '==', userID),
                orderBy('createdAt')
            );

            unsubscribe = onSnapshot(queryTransactions, (snapshot) => {

                let docs = [];
                let totalExpenses = 0;

                snapshot.forEach(doc => {
                    const data = doc.data();
                    const id = doc.id;

                    if (!data.createdAt) return;
   
                    const createdAt = data.createdAt.toDate();

                    docs.push({...data, id, createdAt})          
                    totalExpenses += +data.transactionAmount;
                })


                 // Group transactions by day
                const grouped =  docs.reduce((acc, transaction) => {
                    const date = transaction.createdAt; // Now this is a Date object
                    const day = date.toLocaleDateString(); // Get date string (e.g., "10/24/2024")
                    // let dayAmount = 0;

                     // Create an array for the day if it doesn't exist
                    if (!acc[day]) {
                    acc[day] = {
                        transactions: [], // Array of transactions
                        totalAmount: 0,   // Total amount for the day
                    };
                    }

                    acc[day].transactions.push(transaction); // Add transaction
                    acc[day].totalAmount += +transaction.transactionAmount; // Assuming `transaction.amount` is the amount to be summed
                    return acc;
                }, {});
                

                // console.log(grouped)

                // const groupedArray = Object.entries(grouped).map(([day]) => ({
                //     day,
                //     transactions,
                // }));

                // Convert to an array directly
                const groupedArray = Object.keys(grouped).map(day => ({
                    day,
                    ...grouped[day]
                }));

                console.log(groupedArray)

                setTransactions(groupedArray.reverse());
                setTransactionsTotal(totalExpenses);
            })
            
        }

        catch(err) {
            console.error(err);
        }

        return () => unsubscribe(); 
    }

    useEffect(() => {
        getTransactions()
    }, [])

    return { transactions, transactionsTotal } 
}

export default useGetTransactions;