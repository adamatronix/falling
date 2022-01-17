import React, { useRef, useState, useEffect } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import FallingStage from './FallingStage';

const Viewport = styled.div`
  width: 800px;
  height: 800px;
  position: relative;
  background: white;
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
