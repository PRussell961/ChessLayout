import "../componentcss/Play.css"
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useState, useEffect, useRef  } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Play() {
  const [game, setGame] = useState(new Chess());
  const [newFen, setNewFen] = useState('');
  const [undoPos, setUndoPos] = useState('');
  const [boardO, setboardO] = useState('white');
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
      setUndoPos(game.fen())      
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
  function swap(){
    console.log(game.turn());
    if(boardO == "white"){
      setboardO("black");
    }
    else{
      setboardO("white");
    }
    makeRandomMove();
  }

  function reset() {    
    setGame(new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"));
    setboardO("white");
  }

  function undo(){
    setGame(new Chess(undoPos));
  }
  return (
    <>   
    <div style={{ padding: 10}}>
    <Container>
      <Row>
      <Col>      
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
      </Col>
      <Col></Col>
        <Col>
        <Button variant="outline-success"
                onClick={() => {
                  reset()
                }}            
        >Reset</Button>
        </Col>
      </Row>
      <Row>
        <Col>
        </Col>
        <Col>
        <div className="mobilehidden">
          <Chessboard position={game.fen()} 
          onPieceDrop={onDrop}
          boardOrientation={boardO} 
          customDarkSquareStyle={{ backgroundColor: "#096A51" }}
          customLightSquareStyle={{ backgroundColor: "#F5FFFC" }}
          />
          </div>
          <div className="webhidden" style={{width : '60vw'}}>
          <Chessboard position={game.fen()} 
          onPieceDrop={onDrop}
          boardOrientation={boardO} 
          customDarkSquareStyle={{ backgroundColor: "#096A51" }}
          customLightSquareStyle={{ backgroundColor: "#F5FFFC" }}
          />
          </div>
        </Col>
        <Col>
        </Col>
      </Row>
      <Row>
      <Col>    
      <Button variant="outline-success"
      onClick={() => {
        undo()
      }}     
      >Undo</Button>
      </Col>
      <Col>
      </Col>
      <Col><Button variant="outline-success"
             onClick={() => {
              swap()
            }}  
      >Swap</Button></Col>
      </Row>
      <p style={{overflowWrap: 'break-word'}}>Current FEN: {game.fen()}</p>
      
      <input  onChange={fenChange} 
              value={newFen} 
              type="text" 
              class="form-control" 
              placeholder="Paste new FEN here" 
              aria-label="Username" 
              aria-describedby="basic-addon1"
              />
    </Container>
    </div>
    </>
  );
}
export default Play;
