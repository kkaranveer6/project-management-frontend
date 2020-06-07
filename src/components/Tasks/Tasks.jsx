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
                    onCardNew = {data => setBoardData(data)}
                    onCardRemove = {data => setBoardData(data)}
                    onCardDragEnd = {data => setBoardData(data)}
                    onColumnDragEnd = {data => setBoardData(data)}
                    onColumnRename = {data => setBoardData(data)}
                    onColumnRemove = {data => setBoardData(data)}
                    onColumnNew = {data => setBoardData(data)}
                    initialBoard = {boardData}>
                </Board>
              }/>
          </div>
        );
}