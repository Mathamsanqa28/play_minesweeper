import React, { useState, useEffect } from 'react';
import CreateBoard from "../utils/CreateBoard";
import { revealed } from  "../utils/Reveal";
import Cell from "./Cell";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Board(){
    const [grid,setGrid]=useState([]);
    const [nonMineCount,setNonMineCount]=useState(0);
    const [mineLocation,setMineLocation]=useState([]);

    const style={
        display: 'flex',
        flexDirection: 'row',
        width: "fit-content",
        color: "red",
    }

    useEffect(() => {

        freshBoard();
    },[]);

        // Make a fresh board at start
        const freshBoard=() => {
            const newBoard=CreateBoard(7,7,10);
            setNonMineCount(7*7-10);
            //console.log(newBoard.mineLocation);
            setMineLocation(newBoard.mineLocation);
            setGrid(newBoard.board);
        }
        const updateFlag=(e,x,y) =>{
            e.preventDefault();
        //deep copy of the object
            let newGrid=JSON.parse(JSON.stringify(grid));
            newGrid[x][y].flagged=true;
            console.log(newGrid[x][y]);
            setGrid(newGrid);
    }

        const newFreshBoard=()=>{
            freshBoard();
        }

        //Reveal all cells & mineLocation with all mines when clicked on mines
        const revealCell=(x,y) =>{
            let newGrid=JSON.parse(JSON.stringify(grid));
            if (newGrid[x][y].value==="X"){
            toast.dark("Clicked on mine. Try Again",
            {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            for(let i=0; i<mineLocation.length;i++){
                newGrid[mineLocation[i][0]][mineLocation[i][1]].revealed=true;
            }
            setGrid(newGrid);
            setTimeout(newFreshBoard,500);
        }
        if(nonMineCount=== 0){
            toast.success('You win!!!',
            {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            setTimeout(newFreshBoard,500);
        }
        else
        {
            let revealedBoard=revealed(newGrid,x,y,nonMineCount);
            setGrid(revealedBoard.arr);
            setNonMineCount(revealedBoard.zeroMines);
        }
    }
            
        return (
            <div className="parent">
                <div>
                <h2 style={{
                    color: 'white',
                    textAlign: "center",
                    fontSize: "25px",
                    margin:"10px", }}>
                    Non-Mines: {nonMineCount}
                </h2>
                <ToastContainer></ToastContainer>
                {grid.map((singlerow,index1) => {
                    return(
                        <div style={style} key={index1}>
                            {singlerow.map((singlecol,index2) =>{
                            return <Cell details={singlecol} 
                                    key={index2} updateFlag={updateFlag} 
                                    revealCell={revealCell} />
                            })}
                        </div>
                    )
                })}
            
            </div>
        </div>
        )
    }
    
export default Board;