import styled from 'styled-components';

export const Review = styled.li`
  :not(:first-child) {
    margin-top: ${p => p.theme.space[3]};
  }
`;

export const Author = styled.p`
  font-weight: ${p => p.theme.fontWeights.heading};
`;

export const Content = styled.p`
  margin-top: ${p => p.theme.space[2]};
`;
