import styled from 'styled-components';

export const Item = styled.li`
  list-style: disc;
  color: ${p => p.theme.colors.red};
  padding: ${p => p.theme.space[1]} 0;

  :hover,
  :focus {
    color: ${p => p.theme.colors.lightRed};
  }
`;
