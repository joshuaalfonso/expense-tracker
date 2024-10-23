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

                    docs.push({...data, id})

                    if (data.transactionType === 'expense') {
                        totalExpenses += +data.transactionAmount;
                    }
                })

                setTransactions(docs);
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