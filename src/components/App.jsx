import React from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import SearchBar from './SearchBar';
import ArchivedNotes from './ArchivedNotes';
import { initialNotes } from '../utils/data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: initialNotes,
      searchTerm: '',
    };

    // Binding function
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
  }

  // Menambah catatan
  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          archived: false,
          createdAt: new Date().toISOString(),
        },
      ],
    }));
  }

  // Menghapus catatan
  onDeleteNoteHandler(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => note.id !== id),
    }));
  }

  // Mencari catatan
  onSearchNoteHandler(searchTerm) {
    this.setState({ searchTerm });
  }

  // Mengarsipkan catatan
  onArchiveNoteHandler(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      ),
    }));
  }

  render() {
    const { notes, searchTerm } = this.state;

    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const activeNotes = filteredNotes.filter((note) => !note.archived);
    const archivedNotes = filteredNotes.filter((note) => note.archived);

    return (
      <div>
        <h1 className='note-app'>Catatan Pribadi</h1>
        <SearchBar searchTerm={searchTerm} onSearch={this.onSearchNoteHandler} />
        <NoteForm addNote={this.onAddNoteHandler} />
        <h2>Catatan Aktif</h2>
        <NoteList
          notes={activeNotes}
          onDelete={this.onDeleteNoteHandler}
          onArchive={this.onArchiveNoteHandler}
        />
        <h2>Catatan Arsip</h2>
        <ArchivedNotes
          notes={archivedNotes}
          onDelete={this.onDeleteNoteHandler}
          onArchive={this.onArchiveNoteHandler}
        />
      </div>
    );
  }
}

export default App;