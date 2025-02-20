import React from 'react';

class NoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        title: '',
        body: '',
        };

    // Binding function
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    }

    handleBodyChange(e) {
        this.setState({ body: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { title, body } = this.state;
        this.props.addNote({ title, body });
        this.setState({ title: '', body: '' });
    }

    render() {
        return (
        <form className='note-form' onSubmit={this.handleSubmit}>
            <input
            type="text"
            placeholder="Judul Catatan"
            value={this.state.title}
            onChange={this.handleTitleChange}
            />
            <textarea
            placeholder="Isi Catatan"
            value={this.state.body}
            onChange={this.handleBodyChange}
            />
            <button type="submit">Tambah Catatan</button>
        </form>
        );
    }
}

export default NoteForm;