import React from 'react';
import Notes from './Notes';

import uuid from 'uuid';

// const notes = [
//   {
//     id: uuid.v4(),
//     task: 'Beep boop'
//   },
//   {
//     id: uuid.v4(),
//     task: 'Do laundry'
//   }
// ];
//
//
//
// export default () => (
//   <div>
//     <button onClick={() => console.log('add note')}>+</button>
//     <Notes notes ={notes}/>
//   </div>
// );

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Make list'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    };
  }
  render() {
    const {notes} = this.state;

    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes
          notes={notes}
          onNoteClick={this.activateNoteEdit}
          onEdit={this.editNote}
          onDelete={this.deleteNote}
          />
      </div>
    );
  }

  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: ('new' + uuid.v4 ().toString().substring(0,2))
      }])
    })
  }

  deleteNote = (id, e) => {
    e.stopPropagation();

    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    })
  }
}
