import React, { useState } from 'react';
import './index.css';

const ReactTalk  = () => {
  const [label, setLabel] = useState('React');
  const handleClick = () =>{
    window.dispatchEvent(new CustomEvent('ReactTalk', {detail: 'React Talk :' + label}));
  };

  window.addEventListener('MootoolsTalk', ((e: CustomEvent) => {
    setLabel(e.detail);
  }) as EventListener);

  return <button onClick = {handleClick}>{label}</button>
}

export default ReactTalk;