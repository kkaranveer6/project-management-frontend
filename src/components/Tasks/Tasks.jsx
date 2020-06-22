import React, {useState} from 'react';
import Board from '@lourenci/react-kanban';
import '@lourenci/react-kanban/dist/styles.css';
import SideBar from '../Sidebar/Sidebar';


export default function Tasks(props){
    var board = {
        columns: [
          {
            id: 4, 
            cards: [
              {
                id: 1592449103689,
                title: "title", 
                description: "description"
              }, 
              {
                id: 1592449101071,
                title: "title", 
                description: "description"
              }], 
              title: "test"
          }
          // {
          //   id: 1,
          //   title: 'Backlog',
          //   cards: [
          //     {
          //       id: 1,
          //       title: 'Add card',
          //       description: 'Add capability to add a card in a column'
          //     },
          //   ]
          // },
          // {
          //   id: 2,
          //   title: 'Doing',
          //   cards: [
          //     {
          //       id: 2,
          //       title: 'Drag-n-drop support',
          //       description: 'Move a card between the columns'
          //     },
          //   ]
          // }
        ]
      }

      const [boardData, setBoardData] = useState(board);

      async function handleNewColumn(board){
        setBoardData(board);
        console.log(board);
        let title = 'test' 
        await fetch('http://localhost:3000/addcolumn', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            TeamID: 1,
            title: title
          })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
      }

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
                      onColumnNew = {(board) => handleNewColumn(board)}
                      initialBoard = {boardData}>
                  </Board>
                </div>
              }/>
          </div>
        );
}