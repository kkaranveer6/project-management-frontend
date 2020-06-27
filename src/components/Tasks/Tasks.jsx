import React, {useState, useEffect} from 'react';
import Board from '@lourenci/react-kanban';
import '@lourenci/react-kanban/dist/styles.css';
import SideBar from '../Sidebar/Sidebar';


export default function Tasks(props){
  const [board, setBoard] = useState({
    columns: [
      {
        "id": 1,
        "cards": [
          {
            "id": 1592739704841,
            "title": "new task",
            "assigned": [],
            "description": "new description"
          },
          {
            "id": 1592739009767,
            "title": "task title",
            "assigned": [],
            "description": "task description"
          }
        ],
        "title": "test"
      }
    ]
  });

      // useEffect(() => {
      //   fetch('http://localhost:3001/getTasks',{
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify({
      //       token: localStorage.getItem('token'),
      //       TeamID: 1
      //     })
      //   })
      //   .then(res => res.json())
      //   .then(data => {
      //     let board = boardData;
      //     board.columns = data;
      //     console.log(board);
      //     setBoardData(board);
      //   })
      //   .catch(error => console.log(error))
      // }, []);

      function handleNewColumn(board){
        setBoard(board);
        console.log('board: ', board);
        let title = board.columns[board.columns.length - 1].title;
        fetch('http://localhost:3001/addColumn', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: title,
            TeamID: 1,
            token: localStorage.getItem('token')
          })
        })
          .then(res => console.log(res))
          .catch(err => console.log(err))
      }

      const handleNewCard = (board, column, card) => {
        console.log(board, column, card);
        setBoard(board);
        fetch('http://localhost:3001/addTask', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            columnIndex: 1,
            title: card.title,
            description: card.description,
            TeamID: 1
          })
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
      }

      const handleCardRemove = (board, column, card) => {
        // console.log(column, card);
        setBoard(board);
        board.columns.map((boardColumn, columnIndex) => {
          if (boardColumn.id === column.id) {
            board.columns[columnIndex].cards.map((tasks, cardIndex) => {
              if(tasks.id === card.id){
                console.log('column: ', columnIndex);
                console.log('card:', cardIndex);
                fetch('http://localhost:3001/removeTask', {
                  method: 'DELETE',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    token: localStorage.getItem('token'),
                    columnIndex: columnIndex,
                    cardIndex: cardIndex,
                    TeamID: 1
                  })
                })
                .then(res => console.log(res))
                .catch(error => console.log(error))
              }
            })
          }
        });
      }

      const handleCardMove = (board, column, source, destination) => {
        console.log(source, destination);
        setBoard(board);

        var initialColumnIndex = 0;
        var finalColumnIndex = 0;
        board.columns.map((boardColumn, index) => {
          if (boardColumn.id === source.fromColumnId) {
            initialColumnIndex = index;
          }
          if (boardColumn.id === destination.toColumnId){
            finalColumnIndex = index;
          }
        });

        fetch('http://localhost:3001/moveTask', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            initialColumnIndex: initialColumnIndex,
            initialCardIndex: source.fromPosition,
            finalColumnIndex: finalColumnIndex,
            finalCardIndex: destination.toPosition,
            TeamID: 1,
            token: localStorage.getItem('token')
          })
        })
      }

      const handleColumnMove = (board, column, source, destination) => {
        console.log(source, destination);
        setBoard(board);
        fetch('http://localhost:3001/moveColumn', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            initial: source.fromPosition,
            final: destination.toPosition,
            TeamID: 1,
            token: localStorage.getItem('token')
          })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
      }

      const handleColumnRename = (board, column) => {
        console.log(board, column);
        setBoard(board);
      }

      const handleColumnRemove = (board, column) => {
        setBoard(board);
        board.columns.map((boardColumn, index) => {
          if(boardColumn.title === column.title){
            console.log(index);
            fetch('http://localhost:3001/removeColumn', {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                index: index,
                TeamID: 1,
                token: localStorage.getItem('token')
              })
            })
            .then(res => console.log(res))
            .catch(error => console.log(error))
          }
        });
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
                      onCardNew = {(board, column, card) => handleNewCard(board, column, card)}
                      onCardRemove = {(board, column, card) => handleCardRemove(board, column, card)}
                      onCardDragEnd = {(board, column, source, destination) => handleCardMove(board, column, source, destination)}
                      onColumnDragEnd = {(board, column, source, destination) => handleColumnMove(board, column, source, destination)}
                      onColumnRename = {(board, column) => handleColumnRename(board, column)}
                      onColumnRemove = {(board, column) => handleColumnRemove(board, column)}
                      onColumnNew = {(board) => handleNewColumn(board)}
                      initialBoard = {board}>
                    {board}
                  </Board>
                </div>
              }/>
          </div>
        );
}