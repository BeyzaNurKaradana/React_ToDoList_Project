
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";

const InputWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: end;
gap: 24px;
padding: 32px;
`;

function App() {
  const [todoInput, setTodoInput] = useState("");

  const [todos, setTodos] = useState([]);
  console.log(todos)
  
  return (
    <InputWrapper>
      <Form style={{
        flex:1
      }}>
        <Form.Group  controlId="exampleForm.ControlInput1">
          <Form.Label>Target</Form.Label>
          <Form.Control 
          onChange={(e) => {
            setTodoInput(e.target.value);
          }} 
          value={todoInput}
          type="email" placeholder="name@example.com" />
        </Form.Group>
      </Form>
      <Button variant="success">Add</Button>
    </InputWrapper>
  );
}

export default App;
