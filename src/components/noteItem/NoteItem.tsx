import React from 'react'
import { Note } from '../../types/note'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { noteActions } from '../../redux/slices/noteSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import "./NoteItem.css"
import { IconButton } from '@mui/material';

const NoteItem = ({note}: {note: Note}) => {
    const notes = useSelector((state: RootState) => state.notes.notes)
    const dispatch = useDispatch();
    const deleteHandler = () => {
        console.log('Delete')
        dispatch(noteActions.remove(note))
    }
  return (
    <div className='note'>
        <div className='note__info'>
        <p>{note.title}</p>
        <p>{note.content}</p>
        </div>
        <IconButton className="delete">
        <DeleteOutlineIcon onClick={deleteHandler} style={{color: "#f5ba13"}}/>

        </IconButton>
    </div>
  )
}

export default NoteItem