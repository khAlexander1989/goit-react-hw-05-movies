import styled from 'styled-components';

export const Poster = styled.img`
  height: 350px;
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes[5]};
`;
export const Label = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Text = styled.p`
  margin-top: ${p => p.theme.space[3]};
`;
