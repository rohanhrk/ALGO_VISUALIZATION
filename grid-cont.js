let rows = 80;
let cols = 85;
let grid_cont = document.querySelector(".grid-cont");

for(let r = 0; r < rows; r++) {
    let row_cont = document.createElement("div");
    row_cont.setAttribute("class", "row-cont");
    for(let c = 0; c < cols; c++) {
        let col_cont = document.createElement("div");
        col_cont.setAttribute("class", "col-cont");
        row_cont.appendChild(col_cont);
    }
    grid_cont.appendChild(row_cont);
}

