import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap"; 
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 24px;
  padding: 32px;
`;

const TodoElement = styled.li`
cursor: pointer;
list-style-type: circle;
`

function App() {
  const [todoInput, setTodoInput] = useState("");

  const [todos, setTodos] = useState([]);

  return (
    
    <div>

    <header className="header">
      <h2> To Do List App</h2>
      
    </header>
    
      <InputWrapper className="wrapper">
        <Form
          style={{
            flex: 1,
          }}
        >
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="goals-form">Add Your Goals</Form.Label>
            <Form.Control
              onChange={(e) => {
                setTodoInput(e.target.value);
              }}
              value={todoInput}
              type="email"
              placeholder="reading book, study, work out etc."
            />
          </Form.Group>
        </Form>
        <Button
        className="custom-btn btn-13"
          onClick={() => {
            if (todos.includes(todoInput)) {
              alert(todoInput +" already added!")
              return;
            }
            setTodos([...todos, todoInput]);
            setTodoInput("");
          }}
          variant="success"
        >
          Add
        </Button>
      </InputWrapper>
      
      <ul className="px-5">
        {todos.map((todo, index) => (
          <TodoElement
            onClick={() => {
              setTodos((oldValues) => {
                return oldValues.filter(oldTodo => oldTodo !== todo);
              });
            }}
            key={index}
          >
            {todo}
          </TodoElement>
        ))}
      </ul>
    </div>
    
  );
}

export default App;
