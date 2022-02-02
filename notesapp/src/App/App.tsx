import React, {useRef} from "react";
import { connect } from "react-redux";
import { addNote, deletenote } from "action/index";
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
import { ADDRCONFIG } from "dns";

const App: React.FC <AppPropType> = ({ notes, addNote, deletenote }) => {
  const input = useRef<HTMLInputElement>(null);

  const renderList = () => {
    return (
      <ListGroup variant="flush" className="m-2">
        <h3>Notes</h3>
        {notes.map((note, index) => {
          return (
            <ListGroupItem
              key={index}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>{note}</div>
              <div>
                <i
                  className="fas fa-trash m-2"
                  onClick={() => deletenote(note)}
                ></i>
              </div>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  };

  const add = () => {
    if (input.current) {
      const val = input.current.value;
      input.current.value = "";
      addNote(val);
    }
  };

  return (
    <Container>
      <InputGroup className="m-5">
        <FormControl placeholder="Notes" ref={input}/>
        <InputGroup>
          <Button variant="primary" onClick={() => add()}>
            <i className="fas fa-plus mr-3"></i>
            Add
          </Button>
        </InputGroup>
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

export default connect(mapStatetoProps, { addNote, deletenote })(App); //give access to the states and run the action creators we have created
