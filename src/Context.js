import React, {useState, createContext, useEffect} from 'react';
import myData from '../src/data'
import modelsdata from '../src/Array'

const Context = createContext()

const ConTextProvider = ({children}) => {
    const [array, setArray] = useState([])
    const [Secarray, setSecArray] = useState([])
    const [cardArray, setCardArray] = useState([myData])
    const [data, setData] = useState()
    const [Secdata, setSecData] = useState()

    const url = myData
    const getDate = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setArray(myData.data)
        setData(myData.data)
        setSecArray(modelsdata.data)
        setSecData(modelsdata.data)
    }
    useEffect(() => {
        getDate()
        setArray(myData)
        setData(myData)
        setSecArray(modelsdata)
        setSecData(modelsdata)

    }, [])

    const AddCard = (el) => {
        setCardArray([...cardArray, el])
        console.log(cardArray)
    }


    const RemoveCard = (id) => {
        let newArray = cardArray.filter((el) => {
            return el.id !== id
        })
        setCardArray(newArray)
    }


    return (
        <Context.Provider value={{array,setArray, AddCard, RemoveCard, cardArray,data,setData,Secarray,Secdata,setSecArray,setSecData}}>
            {children}
        </Context.Provider>
    );
};

export {ConTextProvider, Context};