var globrow = 15;
var globcol = 30;
var matrix = new Array(globrow);
function init(){
    // Initialize the board with a two-dimensional array:
    // with 15 rows and 30 columns, setting all values to 0.
    //  "REPLACE THIS CODE WITH YOUR init METHOD"

    for (var i = 0; i < matrix.length; i++)
        matrix[i] = new Array(globcol);

    for (var row = 0; row < matrix.length; row++) {
        for (var col = 0; col < matrix[row].length; col++) {
            matrix[row][col] = "-";
        }
    }
}

function showTable (table) {
    for (var row = 0; row < table.length; row++) {
        var aux = "";
        for (var col = 0; col < table[row].length; col++) {
            aux = aux + table[row][col] + " ";
        }
        console.log(aux);
    }
}

function getNumNeighbors(grid, i, j){
    // This method returns the number of alive cells (i.e., cells with value 1)
    // surrounding the selected cell with coordinates i and j in the
    // supplied two-dimensional array (matrix).
    // "REPLACE THIS CODE WITH YOUR getNumNeighbors METHOD"
    var alivenumber = 0;
    for (var rowstep = -1; rowstep <= 1; rowstep++) {
        var aux = "";
        for (var colstep = -1; colstep <= 1; colstep++) {
            var iabs = i + rowstep;
            var jabs = j + colstep;
            if (iabs >= 0 && jabs >= 0 && iabs < globrow && jabs < globcol) {
                if (grid[iabs][jabs] == "X") {
                    alivenumber++;
                }
            }
        }
    }
    if (grid[i][j] == "X") {alivenumber--}
    return alivenumber;
}

function getNextGen(griddo){
    var mat = new Array(globrow);
    for (var i = 0; i < mat.length; i++)
        mat[i] = new Array(globcol);

    for (var row = 0; row < mat.length; row++) {
        for (var col = 0; col < mat[row].length; col++) {
            mat[row][col] = griddo[row][col];
        }
    }

    for (var k = 0; k < griddo.length; k++) {
        for (var m = 0; m < griddo[k].length; m++) {
            if (griddo[k][m] == "X") {
                if (getNumNeighbors(griddo, k, m) < 2) {
                    mat[k][m] = "-";
                } 
                if (getNumNeighbors(griddo, k, m) == 2 || getNumNeighbors(griddo, k, m) == 3) {
                    mat[k][m] = "X";
                } 
                if (getNumNeighbors(griddo, k, m) > 3) {
                    mat[k][m] = "-";
                }
            } else {
                if ( getNumNeighbors(griddo, k, m) == 3 ) {
                    mat[k][m] = "X";
                }
            }
        }
    }
    
    return mat;
}

init();

matrix[0][1] = matrix[0][3] = matrix[0][5] = matrix[0][7] = "X";
matrix[1][0] = matrix[1][2] = matrix[1][4] = matrix[1][6] = "X";
matrix[2][1] = matrix[2][3] = matrix[2][5] = "X";
matrix[3][0] = matrix[3][2] = "X";
matrix[4][1] = matrix[4][3] = "X";
matrix[5][0] = matrix[5][2] = "X";
matrix[6][1] = "X";
matrix[7][0] = "X";
console.log("Initial confiuration");
showTable(matrix);

// console.log("\n");
// console.log("\n");
// console.log("\n");
// var step = 1;
// while (step < 12) {
//     matrix = getNextGen(matrix);
//     showTable(matrix);
//     console.log("\n");
//     console.log("\n");
//     step++;
// }
// console.log("Configuration in permanent state reached in generation: " + (--step));
// console.log("\n");
// showTable(matrix);
