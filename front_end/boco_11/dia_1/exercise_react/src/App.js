import React from 'react';
import './App.css';

const task = (value) => {
  return(
    <li>{value}</li>
  );
}

const tarefas = ['Fazer os exercícios do conteúdo', 'Tirar dúvidas de React', 'Estudar conteúdo de amanhã']

function App() {
  return (
    <ol>{ tarefas.map((tarefa) => task(tarefa)) }</ol>
  );
}

export default App;
