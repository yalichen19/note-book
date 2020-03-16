import React from 'react';
import { ChessType } from '../types/enums';
import { Chess } from './Chess'
import './Board.css'

interface IProps {
  row: number,
  col: number,
  chessWidth: number,
  chesses: ChessType[]
  onClickChess: (index: number) => void
}

export const Board: React.FC<IProps> = function ({ row, col, chessWidth, chesses, onClickChess }) {
  const width = row * chessWidth;
  const height = col * chessWidth
  return (
    <div className="board" style={{ width: width + 'px', height: height + 'px' }}>
      {
        chesses.map((chessType, index) => <Chess type={chessType} width={chessWidth} onClickChess={()=>{
          onClickChess(index)
        }} key={index} />)
      }
    </div>
  )
}