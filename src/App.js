import React from 'react';
import CounterComponent from './components/CounterComponent';
import Button from './components/Button';
import Toolbar from './components/Toolbar';
import Form from './components/Form';
import TrafficLight from './components/TrafficLight';
import TodoList from './components/TodoList';
import styled from 'styled-components';
import Accordion from './components/Accordion';

const StyledButton = styled.button`
  background-color: purple;
  color: white;
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: green;
  }
`;

function App(){
	return(
    <>
      <div>
        <CounterComponent />
        <Button />
        <Toolbar />
        <TrafficLight />
        <h1>Todo List</h1>
        <TodoList />
        <StyledButton>Click me!</StyledButton>
        <Form />
        <Accordion />
		  </div>
    </>
	);
}

export default App;


