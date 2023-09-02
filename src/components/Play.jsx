import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useState, useEffect, useRef  } from "react";


function Play() {
  const [game, setGame] = useState(new Chess());
  const [newFen, setNewFen] = useState('');
  
  //Update board with new move
  const makeMove = (move) => {
    game.move(move);
    setGame(new Chess(game.fen()));
  };
  
  //Load new fen from input field
  const fenChange = state =>{
    setNewFen(state.target.value);
    
    try {
      game.load(state.target.value)
    } catch (state) {
      console.log(state)
    }
  }

  //Generate aand play a random move
  function makeRandomMove() {
    const possibleMoves = game.moves();
    if (game.isGameOver() || game.isDraw() || possibleMoves.length === 0)
      return; // exit if the game is over
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    makeMove(possibleMoves[randomIndex]);
  }
  
  //Control basic logic and rules of the board
  function onDrop(sourceSquare, targetSquare, piece) {
    try {
      const move = makeMove({
        from: sourceSquare,
        to: targetSquare,
        promotion: piece[1].toLowerCase() ?? "q",
      });
      // illegal move
      if (move === null) {
        return false;
      }
      setTimeout(makeRandomMove, 200);
      return true;
    
    } catch (error) {
      return false;
    }
  }

  return (
    <>
      <Chessboard position={game.fen()} onPieceDrop={onDrop} />
      <h4>Current FEN: {game.fen()}</h4>
      

  <input  onChange={fenChange} value={newFen} type="text" class="form-control" placeholder="Paste new FEN here" aria-label="Username" aria-describedby="basic-addon1" />

    </>
  );
}
export default Play;
