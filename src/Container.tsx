import React from 'react';

const styles = {
  display: 'flex',
  flexDirection: 'column',
}

interface IContainer {
  children?: any;
  columnDirection?: any;
}

const Container = ({ children, columnDirection = 'column' }: IContainer) => (
    <div style={{ ...styles, flexDirection: columnDirection }}>{children}</div>
)

export default Container;
