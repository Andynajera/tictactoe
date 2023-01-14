window.onload = () => {
    console.log('loaded')

    // let cells = <GET ALL cell ELEMENTS>
    let cells = document.getElementsByClassName('cell')
    let players = document.getElementById('players')
    let table = document.getElementById("movement");
    let currentCell = []
    let count = 0

    for (const cell of cells) {



        cell.onclick = (event) => {
            const [, x, y] = event.target.id.split('-')
            console.log(`click on ${x}:${y}`)

            //movimientos y jugadas
            let row = table.insertRow(0)
            let player = row.insertCell(-1)
            let turn = row.insertCell(0)
            let position = row.insertCell(1)
            count++
            currentCell = `${x}:${y}`
            turn.innerHTML = count
            position.innerHTML = currentCell

            if (cell.className === "cell-o" || cell.className === "cell-x")

                window.alert("esta  casilla esta ocupada")

            //comparar

        


       

            if (players.className === "turn-cell-o") {
                //CAMBIAR X Y 0
                if (cell.className === 'cell')
                    cell.className = 'cell-o'

                players.classList.remove("turn-cell-o")
                players.classList.add("turn-cell-x")

                player.innerHTML = "jugadorO"

            }



            else if (players.className === "turn-cell-x") {
                if (cell.className === 'cell')
                    cell.className = 'cell-x'

                players.classList.remove("turn-cell-x")
                players.classList.add("turn-cell-o")
                player.innerHTML = "jugadorX"
            }

        }
    }
}
















function restart() {
    let celdas = document.getElementsByName("celdas");
    celdas.forEach(cell => {
        cell.classList.remove("cell-o");
        cell.classList.remove("cell-x");
        cell.classList.add("cell");
    });

}
