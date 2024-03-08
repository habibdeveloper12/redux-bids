import { useEffect, useState } from "react";

const UseItems =id => {
    const [items,setItems] = useState({})
    useEffect(()=>{
        const url = `https://abccomerce.onrender.com/product/${id}`
        console.log(url)
        fetch(url)
        .then(res=> res.json())
        .then (data =>setItems(data))
       
    },[id])
    
    return [items,setItems]
};

export default UseItems;