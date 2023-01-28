import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ContainerFluid } from 'components/grid/ContainerFluid';
import { FontFace } from 'styles/types';
import { paddingY, bgColor } from 'styles/mixins';

const ErrorPage: FC = () => {
  return (
    <Wrapper>
      <ContainerFluid>
        <Title>OOPS! NOTHING TO SEE HERE.</Title>
        <Message>The page you requested doesn't exist.</Message>
        <StyledLink to="/">Go to homepage</StyledLink>
      </ContainerFluid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  ${({ theme }): FontFace => theme.fontFace.heading}
`;

const Message = styled.p`
  font-size: ${(props): string => props.theme.fontSize.lg};
`;

const StyledLink = styled(Link)`
  display: inline-block;
  border: 1px solid ${(props): string => props.theme.colors.dark};
  ${paddingY(20)}
  text-transform: uppercase;
  max-width: 290px;
  width: 100%;

  &:hover {
    ${bgColor('white')}
  }
`;

export default ErrorPage;
