import "../componentcss/Play.css"
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useState, useEffect, useRef  } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
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
      <Chessboard position={game.fen()} 
        onPieceDrop={onDrop} 
        customDarkSquareStyle={{ backgroundColor: "#096A51" }}
        customLightSquareStyle={{ backgroundColor: "#F5FFFC" }}
      />
      <p>Current FEN: {game.fen()}</p>
      

  <input  onChange={fenChange} 
          value={newFen} 
          type="text" 
          class="form-control" 
          placeholder="Paste new FEN here" 
          aria-label="Username" 
          aria-describedby="basic-addon1"
          />
    
    {/* Buttons to style */}
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Difficulty: Easy
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>Easy</Dropdown.Item>
        <Dropdown.Item>Medium</Dropdown.Item>
        <Dropdown.Item>Hard</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
    <Button variant="outline-success">Swap</Button>
    <Button variant="outline-success">Undo</Button>
    <Button variant="outline-success">Reset</Button>
    </>
  );
}
export default Play;
