import React from 'react';

function NoteItem({ id, title, body, onDelete, onArchive, archived }) {
    return (
        <div className='note-item'>
        <h3>{title}</h3>
        <p>{body}</p>
        <p>{new Date().toLocaleString()}</p>
        <button onClick={() => onDelete(id)}>Hapus</button>
        <button onClick={() => onArchive(id)}>
            {archived ? 'Pindahkan dari Arsip' : 'Arsipkan'}
        </button>
        </div>
    );
    }

export default NoteItem;