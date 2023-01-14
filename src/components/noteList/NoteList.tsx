import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import NoteItem from '../noteItem/NoteItem'

import "./NoteList.css"

const NoteList = () => {
    const notes = useSelector((state: RootState) => state.notes.notes)
  return (
    <div className='notes'>
        {
            notes.map((note) => <NoteItem key={crypto.randomUUID()} note={note} />)
        }
    </div>
  )
}

export default NoteList