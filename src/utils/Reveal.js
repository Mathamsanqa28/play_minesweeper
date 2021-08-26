export const revealed=(arr,x,y,zeroMines)=>{

    //All cells adjusted to zero to be sored in the array
    
    let show=[];
    show.push(arr[x][y]);
    while(show.length!==0){
        let one=show.pop();
        let i=one.x;
        let j=one.y;
        if(!one.revealed){
            zeroMines--;
            one.revealed=true;
        }
    if(one.value !==0){
        break;
    }

    //Top left

    if(
        i >0 &&
        j >0 &&
        arr[i-1][j-1].value===0 &&
        !arr[i-1][j-1].revealed
    ){
        show.push(arr[i-1][j-1]);
    }
        // Bottom right
    if(
        i< arr.length-1 &&
        j < arr[0].length-1 &&
        arr[i+1][j+1].value===0 &&
        !arr[i+1][j+1].revealed
    ){
        show.push(arr[i+1][j+1]);
    }
            //Top right
    if (
        i > 0 &&
        j < arr[0].length-1 &&
        arr[i-1][j+1].value===0 &&
        !arr[i-1][j+1].revealed
    ){
        show.push(arr[i-1][j+1]);
    }
            //Bottom left
    if(
        i < arr.length-1 &&
        j > 0 &&
        arr[i+1][j-1].value===0 &&
        !arr[i+1][j-1].revealed
    ){
        show.push(arr[i+1][j-1]);
    }

            //Top
    if (
        i > 0 &&
        arr[i-1][j].value===0 &&
        !arr[i-1][j].revealed
    ){
        show.push(arr[i-1][j]);
    }

        //Right
    if(
        j < arr[0].length-1 &&
        arr[i][j+1].value===0 &&
        !arr[i][j+1].revealed
    ){
        show.push(arr[i][j+1]);
    }

        //Bottom
    if(
        i < arr.length-1 &&
        arr[i+1][j].value===0 &&
        !arr[i+1][j].revealed
    ){
        show.push(arr[i+1][j]);
    }

        //Left
    if (
        j > 0 &&
        arr[i][j-1].value===0 &&
        !arr[i][j-1].revealed
    ){
        show.push(arr[i][j-1]);
    }
        //Start revealing items
    if(
        i > 0&&
        j > 0&&
        !arr[i-1][j-1].revealed
    ){
        //top left reveal
    arr[i-1][j-1].revealed=true;
    zeroMines--;
    }

    if (j> 0 && !arr[i][j-1].revealed){
            //Left Reveal
            arr[i][j -1].revealed=true;
            zeroMines--;
    }

    if(
        i < arr.length-1 &&
        j > 0 &&
        !arr[i+1][j-1].revealed
    ){
            //Bottom left reveal
        arr[i+1][j-1].revealed=true;
        zeroMines--;
    }
    if (i > 0 && !arr[i -1][j].revealed){
            //Top reveal
        arr[i-1][j].revealed=true;
        zeroMines--;
    }

    if (i < arr.length -1 && !arr[i+1][j].revealed){
            //Bottom reveal
        arr[i+1][j].revealed=true;
        zeroMines--;
    }

    if(
        i > 0 &&
        j < arr[0].length-1 &&
        !arr[i-1][j+1].revealed
    ){
            //tOP right reveal
        arr[i-1][j+1].revealed=true;
        zeroMines--;
    }

    if (j < arr[0].length-1 && !arr[i][j+1].revealed){
            //Right reveal
        arr[i][j+1].revealed=true;
        zeroMines--;
    }

    if (
        i < arr.length-1 &&
        j < arr[0].length-1 &&
        !arr[i+1][j+1].revealed
    ){
            //Bottom right reveal 
        arr[i+1][j+1].revealed=true;
        zeroMines--;
    }
}
return{arr,zeroMines}
}