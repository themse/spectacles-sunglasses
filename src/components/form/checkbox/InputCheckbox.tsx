import { FC, ChangeEvent } from 'react';
import styled from 'styled-components';

import { pxToRem } from 'styles/helpers';
import { Checkbox } from './Checkbox';

type Props = {
  name: string;
  onChange: ({ name, isChecked }: { name: string; isChecked: boolean }) => void;

  value?: string;
  label?: string;
  isChecked?: boolean;
};

/*
 * Use this component independently (don't use it within <form></form>)
 * inside <form></form> use InputCheckboxItem instead
 */
export const InputCheckbox: FC<Props> = ({
  name,
  label,
  onChange: onChangeProp,

  isChecked,
}) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChangeProp({ name, isChecked: event.target.checked });
  };

  return (
    <InputCheckboxLabel>
      <StyledInputCheckbox
        name={name}
        checked={isChecked}
        onChange={onChange}
      />
      <Checkbox isChecked={isChecked} />
      {label && <p>{label}</p>}
    </InputCheckboxLabel>
  );
};

const InputCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${pxToRem(8)};
  cursor: pointer;
  text-transform: capitalize;
`;

const StyledInputCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;
