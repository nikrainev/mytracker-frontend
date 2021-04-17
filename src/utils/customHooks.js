import React, { useEffect, useState, useRef } from "react";

export const useDocTitle = title => {
  const [docTitle, setDocTitle] = useState(title);

  useEffect(() => {
    document.title = docTitle;
    return (()=>{
        document.title = ''
    })
  }, [docTitle]);

  return [docTitle, setDocTitle];
};




export const usePagePreloader = (isInit, observableData, getter, deleteData) =>{
    const [pageState, setPageState] = useState('fetching')

    useEffect(()=>{
        return( ()=>{
            deleteData()
        })
    },[])

    useEffect(()=>{
        if(isInit){
            getter()
        }
        else{
            setPageState('fetching')
        }

    }, [isInit])


    useEffect(()=>{
        if(observableData !== undefined && observableData !== '' && pageState === 'fetching'){
            setPageState("main")
        }

    },[observableData])

    return [pageState]

}