import React, { useEffect } from 'react';

import Header from './components/header/Header';

import './App.css';
import CreateNoteForm from './components/createNoteForm/CreateNoteForm';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import NoteList from './components/noteList/NoteList';
import Footer from './components/footer/Footer';

function App() {
  const notes = useSelector((state: RootState) => state.notes.notes)

  useEffect(() => {
    console.log(notes)
  }, [notes])
  return (
    <div className="App">
      <Header />
      <CreateNoteForm />
      <NoteList />
      <Footer />
    </div>
  );
}

export default App;
