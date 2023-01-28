import { FC, ChangeEvent } from 'react';
import styled from 'styled-components';

import { Checkmark as CheckmarkIcon } from 'components/icons/Checkmark';
import { pxToRem } from 'styles/helpers';

const Checkbox: FC<{ isChecked?: boolean }> = ({ isChecked = false }) => {
  return (
    <CheckboxWrapper isChecked={isChecked}>
      {isChecked && <StyledCheckmarkIcon />}
    </CheckboxWrapper>
  );
};

type Props = {
  name: string;
  onChange: ({ name, isChecked }: { name: string; isChecked: boolean }) => void;

  label?: string;
  isChecked?: boolean;
};

export const InputCheckbox: FC<Props> = ({
  name,
  label,
  onChange: onChangeProp,

  isChecked = false,
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

const CheckboxWrapper = styled.div<{ isChecked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${pxToRem(2)};
  width: ${pxToRem(14)};
  height: ${pxToRem(14)};
  border: 1px solid
    ${(props): string =>
      props.isChecked ? props.theme.colors.blue : props.theme.colors.dark};
`;

const StyledCheckmarkIcon = styled(CheckmarkIcon)`
  width: ${pxToRem(8)};
  height: ${pxToRem(8)};
  color: ${(props): string => props.theme.colors.blue};
`;

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
