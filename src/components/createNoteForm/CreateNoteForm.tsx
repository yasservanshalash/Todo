import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { noteActions } from "../../redux/slices/noteSlice";
import { useDispatch } from "react-redux";

import "./CreateNoteForm.css";

const CreateNoteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [note, setNote] = useState({
    title: title,
    content: content,
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setNote({ ...note, title: e.target.value });
  };

  const contentChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setNote({ ...note, content: e.target.value });
  };

  const submitNoteHandler = (e: React.MouseEvent<HTMLElement>) => {
    if (isExpanded) {
      e.preventDefault();
      dispatch(noteActions.addNote(note));
      setTitle("");
      setContent("");
      setNote({
        title: "",
        content: "",
      });
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  };
  const cancelHandler = () => {
    console.log("cancelHandler");
    setTitle("");
    setContent("");
    setNote({
      title: "",
      content: "",
    });
    setIsExpanded(false);
  };
  return (
    <div>
      <form className="noteForm">
        <input
          type="text"
          name="title"
          placeholder={
            isExpanded ? "Enter note title..." : "Enter note here..."
          }
          onChange={titleChangeHandler}
          className="titleInput"
          value={title}
        />
        {isExpanded ? (
          <textarea
            name="content"
            rows={isExpanded ? 7 : 1}
            onChange={contentChangeHandler}
            className="contentInput"
            placeholder="Enter note..."
            value={content}
          />
        ) : null}
        {isExpanded ? (
          <Fab
            style={{
              position: "absolute",
              right: "72px",
              bottom: "-18px",
              backgroundColor: "#f5ba13",
              color: "white",
              border: "none",
              borderRadius: "50px",
              width: "36px",
              height: "36px",
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.3)",
              cursor: "pointer",
              outline: "none",
            }}
            className="addBtn"
            onClick={submitNoteHandler}
          >
            <AddIcon />
          </Fab>
        ) : (
          <Fab
            style={{
              position: "absolute",
              right: "18px    ",
              bottom: "-18px",
              backgroundColor: "#f5ba13",
              color: "white",
              border: "none",
              borderRadius: "50px",
              width: "36px",
              height: "36px",
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.3)",
              cursor: "pointer",
              outline: "none",
            }}
            className="addBtn"
            onClick={submitNoteHandler}
          >
            <AddIcon />
          </Fab>
        )}

        {isExpanded ? (
          <Fab
            style={{
              position: "absolute",
              right: "18px",
              bottom: "-18px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "50px",
              width: "36px",
              height: "36px",
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.3)",
              cursor: "pointer",
              outline: "none",
            }}
            className="cancelBtn"
            onClick={cancelHandler}
          >
            <RemoveIcon />
          </Fab>
        ) : null}
      </form>
    </div>
  );
};

export default CreateNoteForm;
