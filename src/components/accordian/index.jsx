import data from './data.js';
import './styles.css';
import { useState } from 'react';

export default function Accordian(){
    const[selected, setselected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId){
        setselected(getCurrentId === selected ? null : getCurrentId);
    }
    console.log(selected);
    return(
        <div className="wrapper">
            <button onClick={()=> setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ?
                    data.map(dataItem => <div className="item">
                        <div  onClick={()=> handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                            </div>
                            {selected === dataItem.id ?(
                            <div className="content">
                                {dataItem.answer}
                            </div>
                            ) : null}
                    </div>
                    ):(
                        <div>No data found  !</div>
                    ) 
                }
            </div>

        </div>
    )
        
}