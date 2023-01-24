import styled from 'styled-components';

export const StyledWrapper = styled.div`
  min-height: 100vh;
  min-width: ${({ theme }): string => theme.screens.mobile};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
