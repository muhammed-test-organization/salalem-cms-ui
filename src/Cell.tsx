import React from 'react';

const styles = {
  margin: '20px',
}

interface ICell {
  children?: any;
  style?: any;
}

const Cell = ({ children, style }: ICell) => (
  <div style={{...styles, ...style}}>{children}</div>
)

export default Cell;
