import React from 'react';

function CurTime(){
    const curDT = new Date();
    const weeakd = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
    const months =['Jan','Fab','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec'];
    
    const day = weeakd[curDT.getDay()];
    const month = months[curDT.getMonth()];
    const date = curDT.getDate();
    const year = curDT.getFullYear();

    return(
        
        <>
            <div className='MainTime'>
                <div className='Time'>
                {day}
                </div>
                <div className="Time">
                {date}
                </div>
                <div className="Time">
                {month}
                </div>
                <div className="Time">
                {year}
                </div>
            </div>
        </>
    )
};

export default CurTime;