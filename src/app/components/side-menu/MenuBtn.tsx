import { FC, MouseEvent } from 'react';
import styled from 'styled-components';

import { pxToRem } from 'styles/helpers';
import { btnAsLink } from 'styles/mixins';
import { FontFace } from 'styles/types';

type Props = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const MenuBtn: FC<Props> = ({ onClick }) => {
  return (
    <StyledBtn onClick={onClick}>
      <StyledLabel>Menu</StyledLabel>
    </StyledBtn>
  );
};

const StyledLabel = styled.span`
  ${({ theme }): FontFace => theme.fontFace.primary}
  text-transform: uppercase;
`;

const StyledBtn = styled.button.attrs({
  type: 'button',
})`
  ${btnAsLink}
  padding: ${pxToRem(10)} ${pxToRem(5)};
`;
