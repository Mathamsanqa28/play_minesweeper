export default function CreateBoard(row, col, mines) {
    //board for storing the values for each cell
    let board = [];
    //Tracking the minelocation
    let mineLocation = [];
    //Create blank board

    for (let x = 0; x < row; x++){
        let subCol = [];
        for (let y = 0; y < col; y++){
            subCol.push({
                value: 0,
                revealed: false,
                x: x,
                y: y,
                flagged:false,
                //Flagged and revealed are boolean values for putting flag using right-click & 
                // revealed for revealing the cell one by one on click .
            });
        }
        board.push(subCol);
    }

    //Randomize bomb placement
    let minesCount = 0;
    while (minesCount < mines){
        //implementing random function
        let x = random(0, row - 1);
        let y = random(0, col - 1);

        //placing bomb at random location(x,y) on board[x][y]
        if (board[x][y].value === 0) {
            board[x][y].value = "X";
            mineLocation.push([x, y]);
            minesCount++;
        }
    }

    //increasing the value of specific cell
    //if the cell has mines increasing the cell value bt 1.
    //Add numbers
    for (let i = 0; i < row;i++){
        for (let j = 0; j < col;j++){
            if (board[i][j].value === "X"){
                continue;
            }
            
            //Top
            if (i > 0 && board[i - 1][j].value === "X"){
                board[i][j].value++;
            }

            //Top right
            if(
                i > 0 && 
                j < col - 1 && board[i - 1][j + 1].value === "X"){
                board[i][j].value++;
                }
            
            //Right
            if (j < col - 1 && board[i][j + 1].value === "X"){
                board[i][j].value++;
            }

            //bottom right
            if (
                i < row - 1 &&
                j < col - 1 &&
                board[i + 1][j + 1].value === "X"){
                    board[i][j].value++;
                }
            
            //Bottom
            if (i < row - 1 && board[i + 1][j].value === "X"){
                board[i][j].value++;
            }

            //Bottom left
            if(
                i < row - 1 &&
                j > 0 &&
                board[i + 1][j - 1].value === "X"){
                    board[i][j].value++;
                }
            
            //Left
            if (j > 0 && board[i][j - 1].value === "X"){
                board[i][j].value++;
            }

            //Top left
            if (i > 0 && j > 0 && board[i - 1][j - 1].value === "X"){
                board[i][j].value++;
            }
        }
    }
    return {board, mineLocation};
};

//Random function used to generate random value of x & y
function random(min = 0, max){
    //min and max included
    return Math.floor(Math.random() * (max - min + 1)+ min);
}