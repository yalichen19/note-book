import React from 'react';
import { ChessType } from '../types/enums';
import './Chess.css'
interface IProps {
  type: ChessType,
  width: number,
  onClickChess: () => void
}

export const Chess:React.FC<IProps> = function ({type, width, onClickChess}) {
  return (
    <div className="chess" style={{width: width, height: width }} onClick={onClickChess}>
      {
        type !== ChessType.null &&
        <div className={'chess-item ' + (type === ChessType.red ? 'red' : 'black')}></div>
      }
    </div>
  ) 
}
