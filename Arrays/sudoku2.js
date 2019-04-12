//given a grid (an array of 9 arrays, each with 9 digits (strings '1' to '9')),
//return true if all rows, columns & 3 x 3 subgrid contain only each digit once
function sudoku2(grid) {
    let validSudoku = true;

    for(let i = 0; i < grid.length; i++){//checks for duplicates in each row
        if (firstDuplicate(grid[i])){
            return false;
        }
    }

    let column = [];
    let counter = 0;
    while(counter < grid.length){//checks for duplicates in each column
        grid.forEach((array) => {
            column.push(...array.slice(counter, counter + 1));
        })

        if (firstDuplicate(column)){
            return false;
        }
        column = [];
        ++counter;
    }

    let blocks;
    for(let i = 0; i < 9; i += 3){//checks for duplicates in each subgrids
        blocks = grid.slice(i, i+ 3);
            if(checkSubgrids(blocks) === false){
            return false
        }
    }

    return validSudoku;
}

function checkSubgrids(blocks){
    let subgrid = [];
    for(let i = 0; i < 9; i += 3){
        blocks.forEach(rowOfBlocks => {
            subgrid.push(...rowOfBlocks.slice(i, i + 3));
        })

        if(firstDuplicate(subgrid)){
            return false;
        }
        subgrid = [];
    }
}

function firstDuplicate(a) {
    let freqCounter = {};
    let entry;
    for(let i = 0; i < a.length; i++){
        entry = a[i];
        freqCounter[entry] = (freqCounter[entry] || 0) + 1;
        if(entry !== "." && freqCounter[entry] > 1){
            return true;
        }
    }
    return false;
}
