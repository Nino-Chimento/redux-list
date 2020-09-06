import React, { FC } from "react";

export interface Props {
  setName: any;
}
export const Select: FC<Props> = ({ setName }): JSX.Element => {
  const onChange = (event: string): void => setName(event);

  return (
    <select
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
    </select>
  );
};
