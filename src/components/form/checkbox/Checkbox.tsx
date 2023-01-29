import { FC } from 'react';
import styled from 'styled-components';

import { pxToRem } from 'styles/helpers';
import { Checkmark as CheckmarkIcon } from 'components/icons/Checkmark';

export const Checkbox: FC<{ isChecked?: boolean }> = ({
  isChecked = false,
}) => {
  return (
    <CheckboxWrapper isChecked={isChecked}>
      {isChecked && <StyledCheckmarkIcon />}
    </CheckboxWrapper>
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
