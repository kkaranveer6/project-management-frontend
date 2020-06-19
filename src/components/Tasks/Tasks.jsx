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
                <div>
                  <Board
                      allowRemoveCard
                      allowRenameColumn
                      allowRemoveColumn
                      allowAddColumn
                      allowAddCard = {{on: 'top'}}
                      onNewCardConfirm = {newCard => ({id: new Date().getTime(), ...newCard})}
                      onNewColumnConfirm = {newColumn => ({id: new Date().getTime(), ...newColumn})}
                      onCardNew = {data => setBoardData(data)}
                      onCardRemove = {(board, column, card) => {
                        console.log(column, card);
                        setBoardData(board);
                      }}
                      onCardDragEnd = {(board, column, source, destination) => {
                        console.log(source, destination);
                        setBoardData(board);
                      }}
                      onColumnDragEnd = {(board, column, source, destination) => {
                        console.log(source, destination);
                        setBoardData(board)
                      }}
                      onColumnRename = {data => setBoardData(data)}
                      onColumnRemove = {(board, column, card) => {
                        board.columns.map((boardColumn, index) => {
                          if(boardColumn.title === column.title){
                            console.log(index);
                          }
                        })
                        setBoardData(board);
                      }}
                      onColumnNew = {data => setBoardData(data)}
                      initialBoard = {boardData}>
                  </Board>
                </div>
              }/>
          </div>
        );
}