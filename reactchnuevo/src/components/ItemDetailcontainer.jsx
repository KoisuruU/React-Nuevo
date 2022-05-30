import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import '../components/styles/ItemDetailContainer.css';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export default function ItemDetailContainer() {
    const [item,setItem] = useState({});
    const [loader,setLoader] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        // setTimeout(() => {
        //     fetch("/data/data.json")
        //     .then(response => response.json())
        //     .then(itemsList => itemsList.find(el => el.id === id))
        //     .then(data => setItem(data))
        //     .catch(err => console.log(err))
        //     .finally(() => setLoader(false))
        // }, 300);
        const db = getFirestore();
        const dbQuery = doc(db, 'items', id);
        getDoc(dbQuery)
        .then(resp => setItem({id: resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
    },[id]);

    return (
        <div className="itemDetailContainer">
            {loader?
                <Loader/>:
                <ItemDetail item={item}/>}
        </div>
    );
}