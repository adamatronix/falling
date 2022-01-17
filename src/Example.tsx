import React, { useRef, useState, useEffect } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import FallingStage from './FallingStage';

const Viewport = styled.div`
  width: 1200px;
  height: 900px;
  position: relative;
  background: white;
  border: 1px solid #383B23;
  border-radius: 20px;
  overflow: hidden;
`

const Example = () =>  {
  const container = useRef();
  useEffect(() => {
    new FallingStage(container.current);
  },[]);

  return (
    <Viewport ref={container}>
    </Viewport>
  )
}
render(<Example/>,
  document.getElementById('root')
);
