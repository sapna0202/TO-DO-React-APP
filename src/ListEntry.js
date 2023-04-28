import React from 'react';
import './App.css';

function ListEntry(props){


    return(
        <>
            <div className="todo_style">
                <button className="BtnSub" onClick={()=>{
                    props.onSelect(props.id);
                }}>-</button>
                <li>{props.text}</li>
            </div>
        </>
        
    );
};

export default ListEntry;