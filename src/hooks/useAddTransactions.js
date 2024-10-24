import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../config/firebase-config";
import useGetUserInfo from "./useGetUserInfo";


const useAddTransaction = () => {

    const transactionCollectionRef = collection(db, 'transactions');
    const {userID} = useGetUserInfo();

    const addTransaction = async ({description, transactionAmount}) => {
        try {
            await addDoc(transactionCollectionRef, {
                userID: userID,
                description: description,
                transactionAmount: transactionAmount,
                createdAt: serverTimestamp()
            })

            return { success: true, message: 'Successfully added!' };
        } catch(error) {
            return { success: false, message: 'Failed to add transaction.' };
        }

    }

    return {addTransaction}
}

export default useAddTransaction;