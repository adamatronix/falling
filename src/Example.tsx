import React, { useRef, useState, useEffect } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import detoxImage from './assets/detox.jpg';
import FallingStage from './FallingStage';
import Bar from './Bar';

const Viewport = styled.div`
  width: 1200px;
  height: 900px;
  position: relative;
  background: white;
  border: 1px solid #383B23;
  border-radius: 20px;
  overflow: hidden;
`

const Button = styled.button`
  
`

const Example = () =>  {
  const container = useRef();
  const stage = useRef<FallingStage>();
  useEffect(() => {
    stage.current = new FallingStage(container.current);
    
  },[]);

  
  const onAdd = () => {
    stage.current.add(new Bar('detox',600,154,detoxImage));
  }

  const onRemove = () => {
    stage.current.remove('detox');
  }

  return (
    <>
      <Viewport ref={container}></Viewport>
      <Button onClick={onAdd}>Add</Button>
      <Button onClick={onRemove}>Remove</Button>
    </>
  )
    
}
render(<Example/>,
  document.getElementById('root')
);
