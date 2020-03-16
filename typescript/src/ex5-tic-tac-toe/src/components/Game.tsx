import React from 'react';
import { ChessType, GameStatus } from '../types/enums';
import { Board } from './Board'
import './Game.css'
interface IState {
  row: number,
  col: number,
  chessWidth: number,
  chesses: ChessType[],
  nextChess: ChessType.black | ChessType.red,
  status: GameStatus,
}

export class Game extends React.Component<{}, IState> {
  state: IState = {
    row: 3,
    col: 3,
    chessWidth: 50,
    chesses: [],
    nextChess: ChessType.black,
    status: GameStatus.gaming,
  }

  componentWillMount() {
    this.init()
  }

  init() {
    const {row, col} = this.state;
    this.setState({
      chesses: new Array(row * col).fill(ChessType.null),
      nextChess: ChessType.black,
      status: GameStatus.gaming,
    })
  }

  onClickChess(index:number) {
    const {status, chesses, nextChess} = this.state;
    const currentChess = chesses[index];
    
    if (status !== GameStatus.gaming || currentChess !== ChessType.null) {
      return;
    }
    chesses[index] = nextChess;
    this.judgeStatus(index)

    // this.setState({
    //   chesses,
    //   nextChess: nextChess === ChessType.red ? ChessType.black : ChessType.red,
    //   status: this.judgeStatus(index)
    // })
  }

  judgeStatus(index:number) {
    const {chesses, nextChess, row} = this.state;
    const currentCol = Math.floor(index / row);
    const currentRow = index % row;
    
    console.log(currentCol, currentRow)
    return GameStatus.gaming;
  }

  isLine1(currentRow: number, currentCol: number) {
    const { row} = this.state;
    const arr = [];

    // for(let r = 0, r < row, r++ ) {
    //   arr.push([])
    // }


  }
  

  render() {
    const {row, col, chessWidth,  chesses } = this.state;
    return (
      <Board row={row} col={col} chessWidth={chessWidth} chesses={chesses}
        onClickChess={this.onClickChess.bind(this)} />
    );
  }
}