import React from 'react';
import useSound from 'use-sound';
import boopSfx from 'use-sound';
import fanfareSfx from 'use-sound';
export default function Cell({details,updateFlag,revealCell}){

    //Add game sounds
    const[tuneOne]=useSound(boopSfx,{volume:4.2});
    const[tuneTwo]=useSound(fanfareSfx,{volume:7.2});
    const style={
        cellStyle:{
        width:40,
        height:40,
            // eslint-disable-next-line
        backgroundColor:details.revealed && details.value!==0?details.value=="X"?"red":
        "#00226d":details.revealed&&details.value===0?"":"teal",
        opacity: "0.8",
        border: "3px solid black",
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        fontSize:"20px",
        cursor:"pointer",
        color:"teal",
        fontWeight: "1000"
    },
}

    const click=()=>{
        if(details.value==="X"){
            tuneTwo();   
        }else{
            tuneOne();
        }

         //calling revealcell for specific cell x and y
    revealCell(details.x,details.y);
    }
   
    //Right clik function 
const rightClick=(e)=>{ 
    updateFlag(e,details.x,details.y);
}

    //rendering cell component&showing different values on right and left click

return(
    <div style={style.cellStyle} onClick={click} onContextMenu={rightClick}>
        {!details.revealed && details.flagged ?(
            "🚩"
        ): details.revealed && details.value !==0 ?(
            details.value === "X" ?(
                "💣"
            ) :(
                details.value
            )
        ) : (
            ""
        )}
    </div>
)
}