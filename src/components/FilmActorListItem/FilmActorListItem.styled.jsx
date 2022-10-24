import styled from 'styled-components';

export const Photo = styled.img`
  width: 100%;
  height: 75%;

  object-fit: cover;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${p => p.theme.space[3]};
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes[1]};
  text-align: center;
`;

export const Label = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;
