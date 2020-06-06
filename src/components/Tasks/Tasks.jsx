import React, {useState} from 'react';
import Board from '@lourenci/react-kanban';
import '@lourenci/react-kanban/dist/styles.css';
import SideBar from '../Sidebar/Sidebar';


export default function Tasks(props){
    var board = {
        columns: [
          {
            id: 1,
            title: 'Backlog',
            cards: [
              {
                id: 1,
                title: 'Add card',
                description: 'Add capability to add a card in a column'
              },
            ]
          },
          {
            id: 2,
            title: 'Doing',
            cards: [
              {
                id: 2,
                title: 'Drag-n-drop support',
                description: 'Move a card between the columns'
              },
            ]
          }
        ]
      }

      const [boardData, setBoardData] = useState(board);
      
      const handleCardMove = (data) => setBoardData(data);
      const handleCardRemove = (data) => setBoardData(data);
      const handleCardAdd = (data) => setBoardData(data);
      const handleColumnMove = (data) => setBoardData(data);
      const handleColumnRename = (data) => setBoardData(data);
      const handleColumnRemove = (data) => setBoardData(data);
      const handleColumnAdd = (data) => setBoardData(data)

      return(
          <div>
            <SideBar routeChange={props.routeChange} content={
                <Board
                    allowRemoveCard
                    allowRenameColumn
                    allowRemoveColumn
                    allowAddColumn
                    allowAddCard = {{on: 'top'}}
                    onNewCardConfirm = {newCard => ({id: new Date().getTime(), ...newCard})}
                    onNewColumnConfirm = {newColumn => ({id: new Date().getTime(), ...newColumn})}
                    onCardNew = {data => handleCardAdd(data)}
                    onCardRemove = {data => handleCardRemove(data)}
                    onCardDragEnd = {data => handleCardMove(data)}
                    onColumnDragEnd = {data => handleColumnMove(data)}
                    onColumnRename = {data => handleColumnRename(data)}
                    onColumnRemove = {data => handleColumnRemove(data)}
                    onColumnNew = {data => setBoardData(data)}
                    initialBoard = {boardData}>
                </Board>
              }/>
          </div>
        );
}