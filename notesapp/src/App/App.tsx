import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import { addNote, editNote, deleteNote } from "action/index";
import storeType from "types/storeType";
import AppPropType from "./AppPropType";
import {
  Container,
  ListGroup,
  ListGroupItem,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

const getLocalData = () => {
  const lists = localStorage.getItem("lists");

  console.log(lists);

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const App: React.FC<AppPropType> = ({
  notes,
  addNote,
  editNote,
  deleteNote,
}) => {

  const [note, setNote] = useState(getLocalData());
  const input = useRef<HTMLInputElement>(null);

  notes = JSON.parse(localStorage.getItem("lists") || "{}");

  const removeNote = (_note: string) => {
    const removeArr = [...notes].filter((note) => note !== _note);

    setNote(removeArr);
    window.location.reload();
  };

  const remove = (note: string) => {
    removeNote(note);
    deleteNote(note);
  };

  const renderList = () => {
    return (
      <ListGroup variant="flush" className="m-2">
        <h3>Notes</h3>
        {notes.map((note, index) => {
          return (
            <ListGroupItem
              key={index}
              variant="success"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>{note}</div>
              <div>
                <i
                  className="fa fa-edit m-2"
                  onClick={() => editNote(note)}
                  style={{ cursor: "pointer" }}
                ></i>
                <i
                  className="fas fa-trash m-2"
                  onClick={() => remove(note)}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  };

  //adding localstorage

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(note));
  }, [note]);

  const add = () => {
    if (input.current) {
      const val = input.current.value;
      input.current.value = "";
      addNote(val);

      const newNotes = [val, ...notes];
      setNote(newNotes);
      window.location.reload();
    }
  };

  return (
    <Container>
      <h1 style={{textAlign: "center", marginTop: 50}}>NOTEPAD</h1>
      <InputGroup className="m-5" style={{ width: 500 }}>
        <FormControl placeholder="Notes" ref={input} />
        <Button variant="primary" onClick={() => add()}>
          <i className="fas fa-plus mr-3" style={{ marginRight: 10 }}></i>
          Add
        </Button>
      </InputGroup>
      {renderList()}
    </Container>
  );
};

const mapStatetoProps = (state: storeType) => {
  //converts states to props for app component
  return {
    notes: state.notes,
  };
};

export default connect(mapStatetoProps, { addNote, editNote, deleteNote })(App); //give access to the states and run the action creators we have created
