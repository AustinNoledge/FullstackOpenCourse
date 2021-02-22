import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import noteCom from "./services/notes"

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  // 首次从服务器获取初始数据
  // 每次重新渲染都会重新加载数据
  useEffect(() => {
    // 先是获取数据，方法return响应数据data，将其设为notes
    noteCom
      .getAll()
      .then(response => {
        setNotes(response)
      })
  }, [])
  // []代表仅仅执行一次

  // 修改note important
  const toggleImporttantOfId = (id) => {
    // 找到本地hook对应数组，创建修改数组
    const note = notes.find(each => each.id === id)
    const changeNote = {...note, important: !note.important}

    // 修改服务器端 以及本地数据
    noteCom
      .update(id, changeNote)
      .then(response => {
        setNotes(notes.map(each => (each.id === id) ? response : each))
      })
      .catch(error => {
        alert(`${id} note has been deleted, cannot operate on it anymore`);
        setNotes(notes.filter(each => each.id !== id))
      })
  }

  // 根据条件筛选notes
  const actualNotes = showAll
    ? notes
    : notes.filter((each) => each.important === true);

  // 添加数据
  const addNote = (event) => {
    event.preventDefault();
    const obj = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    };

    noteCom
      .create(obj)
      .then(response => {
        setNotes(notes.concat(response))
        setNewNote("")
      })
  };

  const handleChange = (event) => {
    setNewNote(event.target.value);
    console.log(event.target);
  };

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {actualNotes.map((each) => (
          <Note key={each.id} note={each} toggleImportant={() => toggleImporttantOfId(each.id)} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleChange} />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default App;
