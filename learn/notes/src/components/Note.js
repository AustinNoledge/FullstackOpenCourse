import React from "react";

const Note = ({ note,toggleImportant }) => {
  const label = note.important
    ? "not important"
    : "make it important"

  return(
    <li>
      {note.content}
      <button onClick={toggleImportant}>{label}</button>
    </li>
  )
};

export default Note;
