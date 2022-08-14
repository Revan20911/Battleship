import Board from "./Classes/Board";


export const renderBoard = ((grid) =>{

    const board = [];
    const cols = 10;
    const rows = 10;

    grid.style.setProperty('--grid-cols', cols);
    grid.style.setProperty('--grid-rows', rows);

    for(let a = 0; a < cols; a++){
        for(let b = 0; b < rows; b++){

            let x = a;
            let y = b;

            let gridItem = document.createElement('div');
            grid.appendChild(gridItem);
            grid.appendChild(gridItem).className = "cell";
            grid.appendChild(gridItem).addEventListener('click', () => {

                

            });

            board.push(gridItem,x,y);
        }
    }
    const pBoard = new Board(board);


    return {pBoard};
});


