var globrow = 6;
var globcol = 7;
var matrix = new Array(globrow);
function init(){
    // Initialize the board with a two-dimensional array:
    // with 15 rows and 30 columns, setting all values to 0.
    //  "REPLACE THIS CODE WITH YOUR init METHOD"

    for (var i = 0; i < matrix.length; i++)
        matrix[i] = new Array(globcol);

    for (var row = 0; row < matrix.length; row++) {
        for (var col = 0; col < matrix[row].length; col++) {
            matrix[row][col] = '-';
        }
    }
}

function showTable (table) {
    for (var row = 0; row < table.length; row++) {
        var aux = "";
        for (var col = 0; col < table[row].length; col++) {
            aux = aux + table[row][col] + "   ";
        }
        console.log(aux);
        console.log(" ");
    }
    console.log();
}

function getDropPosition(matrix, columnPosition){
    // This method returns the position of row (i.e., cell's row position)
    // Find the blank cell {i.e., for value 0} from row 5 to 0.
    // If there is no blank cell in that column return -1.
    //REPLACE THIS CODE WITH YOUR getDropPosition METHOD
    var rindex = globrow-1;
    while (rindex >= 0) {
        if (matrix[rindex][columnPosition] == '-') {
            return rindex;
        }
        rindex--;
    }
    return -1;
}

function setDropValue(matrix, rowPosition, columnPosition, human){
    // This method returns a matrix with values,
    // value 1 if human is true otherwise value 2
    //REPLACE THIS CODE WITH YOUR setDropValue METHOD
    if(human){
        matrix[rowPosition][columnPosition] = 'H';
    }
    else{
        matrix[rowPosition][columnPosition] = 'm';
    }
    return matrix;
}

function getRowWin(matrix){
    // set 4 [i,j] values to a functionault cell position say -1 in a list.
    // [[-1,-1][-1,-1][-1,-1][-1,-1]]
    // For each row, check if any 4 consecutive similar values are there,
    // if so return the positions as a list [[row1, col1],[row2, col2],[row3, col3],[row4, col4]].
    //REPLACE THIS CODE WITH YOUR getRowWin METHOD
    var winPositions = [[-1, -1], [-1, -1], [-1, -1], [-1, -1]];
    var row = 5;
    while(row >= 0){
        var col = 0;
        while(col <= 3){
            if(matrix[row][col] != '-'){
                val = matrix[row][col];
                if(matrix[row][col + 1] == val && matrix[row][col + 2] == val && matrix[row][col + 3] == val){
                    winPositions = [[row, col], [row, col + 1], [row, col + 2], [row, col + 3]];
                    return winPositions;
                }
            }
            col = col + 1;
        }
        row = row - 1;
    }
    return winPositions;
}  

function getColumnWin(matrix){
    // Similarly, set 4 [i,j] functionault values in a list, for each column,
    // check for any 4 consecutive cells with same values and then return
    // their positions in the list.
    //REPLACE THIS CODE WITH YOUR getColumnWin METHOD
    var winPositions = [[-1, -1], [-1, -1], [-1, -1], [-1, -1]];
    var col = 0;
    while(col <= 6){
        var row = 5;
        while(row >= 3){
            if(matrix[row][col] != '-'){
                val = matrix[row][col];
                if(matrix[row - 1][col] == val && matrix[row - 2][col] == val && matrix[row - 3][col] == val){
                    winPositions = [[row, col], [row - 1, col], [row - 2, col], [row - 3, col]];
                    return winPositions;
                }
            }
            row = row - 1;
        }
        col = col + 1;
    }
    return winPositions;
}  

function getDiagonalLeftToRightWin(matrix){
    // Similarly, set 4 [i,j] functionault values in a list.
    // Starting from left corner for each diagonal going right up check for 4 consecutive cells
    // with same values and return their positions.
    //REPLACE THIS CODE WITH YOUR getDiagonalLeftToRightWin METHOD
    var winPositions = [[-1, -1], [-1, -1], [-1, -1], [-1, -1]];
    var col = 0;
    while(col <= 3){
        var row = 5;
        while(row >= 3){
            if(matrix[row][col] != '-'){
                val = matrix[row][col];
                if(matrix[row - 1][col + 1] == val && matrix[row - 2][col + 2] == val && matrix[row - 3][col + 3] == val){
                    winPositions = [[row, col], [row - 1, col + 1], [row - 2, col + 2], [row - 3, col + 3]];
                    return winPositions;
                }
            }
            row = row - 1;
        }
        col = col + 1;
    }
    return winPositions;
}  

function getDiagonalRightToLeftWin(matrix){
    // Similarly, set 4 [i,j] functionault values in a list.
    // Starting from right corner for each diagonal going left up check for 4 consecutive cells
    // with same values and return their positions.
    //REPLACE THIS CODE WITH YOUR getDiagonalRightToLeftWin METHOD
    var winPositions = [[-1, -1], [-1, -1], [-1, -1], [-1, -1]];
    var col = 6;
    while(col >= 3){
        var row = 5;
        while(row >= 3){
            if(matrix[row][col] != '-'){
                val = matrix[row][col];
                if(matrix[row - 1][col - 1] == val && matrix[row - 2][col - 2] == val && matrix[row - 3][col - 3] == val){
                    winPositions = [[row, col], [row - 1, col - 1], [row - 2, col - 2], [row - 3, col - 3]];
                    return winPositions;
                }
            }
            row = row - 1;
        }
        col = col - 1;
    }
    return winPositions;
}

function isGameOver(matrix){
    // If the entire matrix is filled and there are no winners then the Game is Over.
    //REPLACE THIS CODE WITH YOUR isGameOver METHOD
    var noWinPos = [[-1, -1], [-1, -1], [-1, -1], [-1, -1]];
    var filled = 1;
    for (var c = 0; c <= 6; c++) {
        for (var r = 5; r >= 0; r--) {
            if (matrix[r][c] == '-') {
                filled = 0;
            }
        }
    }

    if (filled == 1) {
        if (getRowWin(matrix) == noWinPos || getColumnWin(matrix) == noWinPos || getDiagonalLeftToRightWin(matrix) == noWinPos || getDiagonalRightToLeftWin(matrix) == noWinPos) {
            console.log("Game Over");
            return true;
        }
        return false;
    } 
}

init();
console.log("Initial configuration");
showTable(matrix);
//matrix[4][1] = matrix[5][1] = matrix[5][3] = matrix[4][3] = matrix[3][3] = "X";
//matrix[0][6] =matrix[1][6] =matrix[2][6] =matrix[3][6] =matrix[4][6] =matrix[5][6] = "X";
//matrix[3][4] =matrix[3][5]='X';
//matrix[3][6] = "X";
// setDropValue(matrix, 5, 2, 1);
// setDropValue(matrix, 5, 1, 0);
// setDropValue(matrix, 5, 3, 1);
// setDropValue(matrix, 4, 1, 0);
// setDropValue(matrix, 5, 4, 1);
// setDropValue(matrix, 3, 1, 0);
// setDropValue(matrix, 5, 5, 1);
// setDropValue(matrix, 2, 1, 0);
showTable(matrix);
//console.log(getDropPosition(matrix, 3));
//setDropValue(matrix, 0, 5, 1);
// console.log("\n");
// showTable(getRowWin(matrix));
//showTable(getColumnWin(matrix));
//showTable(getDiagonalLeftToRightWin(matrix));
//showTable(getDiagonalRightToLeftWin(matrix));
//isGameOver(matrix);




