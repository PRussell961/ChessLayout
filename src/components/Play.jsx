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
import Axios from 'axios';

function Play() {
  const [game, setGame] = useState(new Chess());
  const [newFen, setNewFen] = useState('');
  const [undoPos, setUndoPos] = useState('');
  const [boardO, setboardO] = useState('white');
  const endpoint = 'http://3.144.89.243:8080/move';
  const [difficulty,setDiff] = useState('1')
  //Difficulty manager, 1 = easy, 2 = med, 3 = hard

  function changeDiff(newDiff){      
    switch(newDiff) {
      case 1:
        document.getElementById("dropdown-item-button").innerHTML = "Difficulty: Easy";
        setDiff(1);
        break;
      case 2:
        document.getElementById("dropdown-item-button").innerHTML = "Difficulty: Medium";
        setDiff(2);
        break;
      case 3:
        document.getElementById("dropdown-item-button").innerHTML = "Difficulty: Hard";
        setDiff(3);
        break;
    }
  }
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

  //Call to API to get move
  function MakeAIMove() { 
    try{
    console.log("Attempting to reach api and sending: " + game.fen() + "With Difficulty of: " + difficulty);   
    Axios.post(endpoint,{FEN: game.fen(), diff: difficulty }).then((response) =>
    setGame(new Chess(response.data))//console.log(response.data)
  ) 
}catch(error){}
};    
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
      setTimeout(MakeAIMove, 200);
      return true;
    
    } catch (error) {
      return false;
    }
  }
  function swap(){
    console.log(game.turn());
    if(boardO === "white"){
      setboardO("black");
    }
    else{
      setboardO("white");
    }
    MakeAIMove();
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
      <DropdownButton  variant="outline-success" id="dropdown-item-button" title="Difficulty: Easy">
      <Dropdown.Item as="button" onClick={() => {changeDiff(1)}}>Easy</Dropdown.Item>
      <Dropdown.Item as="button" onClick={() => {changeDiff(2)}}>Medium</Dropdown.Item>
      <Dropdown.Item as="button" onClick={() => {changeDiff(3)}}>Hard</Dropdown.Item>
    </DropdownButton>
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
        <div className="mobilehidden" style={{width : '30vw'}}>
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
    </Container>
    </div>
    </>
  );
}
  export default Play;
