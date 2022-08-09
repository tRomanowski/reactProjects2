import React from 'react';
import { useGlobalContext } from './context';

import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';
function App() {
  const { waiting, isLoading, questions, index, correct } = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }
  if (isLoading) {
    return <Loading />;
  }
  console.log(questions);
  return <main></main>;
}

export default App;
