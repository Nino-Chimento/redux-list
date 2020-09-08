import React, { FC } from "react";
import styled from "styled-components";

export interface Props {
  setName: any;
}

const Select = styled.select`
  border: 1px solid white;
  &:focus {
    outline: none;
  }
`;

export const UISelect: FC<Props> = ({ setName }): JSX.Element => {
  const onChange = (event: string): void => setName(event);

  return (
    <Select
      name=""
      id=""
      onChange={(event): void => onChange(event.target.value)}
    >
      {" "}
      <option value="riccardo">Seleziona</option>
      <option value="riccardo">riccardo</option>
      <option value="nino">nino</option>
      <option value="andrea">andrea</option>
      <option value="nicola">nicola</option>
    </Select>
  );
};
