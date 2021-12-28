import * as React from 'react';
import { useState } from 'react';
import { HexColorInput, HexColorPicker } from 'react-colorful';
import styled from 'styled-components';

export function ColorPicker({ onChange, title, defaultValue }) {
  const [color, setColor] = useState(defaultValue);

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      onChange(color);
    }
  };

  return (
    <Container color={color} onKeyDown={handleKeyDown}>
      <label>{title}: </label>
      <HexColorInput
        prefixed={true}
        color={color}
        onChange={setColor}
        onBlur={() => onChange(color)}
      />
      <Picker>
        <HexColorPicker onBlur={() => onChange(color)} color={color} onChange={setColor} />
      </Picker>
    </Container>
  );
}

const Picker = styled.div`
  display: none;
  position: absolute;
  z-index: 2;
  right: 0;
  top: 40px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: relative;

  input {
    display: block;
    box-sizing: border-box;
    color: #fff;
    width: 100px;
    padding: 5px 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: ${p => p.color};
    outline: none;
    font: inherit;
    text-align: left;
  }
  &:hover ${Picker} {
    display: block;
  }
`;
