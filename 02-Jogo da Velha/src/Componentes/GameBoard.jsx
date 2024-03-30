const inicialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare, turns}) {

  let quadrojogo = inicialGameBoard;

  for(const turn of turns){
    const {square, player} = turn;
    const {row, col} = square;

    quadrojogo[row][col]=player

  }

  // const [quadrojogo, SetquadroJogo] = useState(inicialGameBoard);

  // function handeSelectSquare(linhaIndex, colunaIndex) {
  //   SetquadroJogo((prevGameBoard) => {
  //     const updateGameBoard = [
  //       ...prevGameBoard.map((innerArry) => [...innerArry]),
  //     ];
  //     updateGameBoard[linhaIndex][colunaIndex] = activePlayerSymbol;
  //     return updateGameBoard;
  //   });

  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {quadrojogo.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={()=>onSelectSquare(rowIndex,colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
