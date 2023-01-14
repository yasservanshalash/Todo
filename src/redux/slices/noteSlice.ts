import { createSlice } from "@reduxjs/toolkit";
import { Note } from "../../types/note";
type initialStateType = {
  notes: Note[];
  idNum: number;
};

const initialState: initialStateType = {
  notes: [],
  idNum: 1
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push({...action.payload, id: state.idNum});
      state.idNum += 1;
    },
    remove: (state, action) => {
      // state.notes.filter((note) => note !== action.payload)
      const result = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );
      if (result !== -1) {
        state.notes.splice(result, 1);
      }
    },
  },
});

export const noteActions = noteSlice.actions;
const noteReducer = noteSlice.reducer;
export default noteReducer;
