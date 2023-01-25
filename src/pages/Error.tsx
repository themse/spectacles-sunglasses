import { ContainerFluid } from 'components/grid/ContainerFluid';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// TODO improve
const ErrorPage: FC = () => {
  return (
    <Wrapper>
      <ContainerFluid>
        <h2>Oops!</h2>
        <p>Sorry, an unexpected error has occurred.</p>
        <Link to="/">Go to the home page</Link>
      </ContainerFluid>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ErrorPage;
