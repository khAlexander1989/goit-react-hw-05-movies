import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes[2]};
  color: ${p => p.theme.colors.textBlack};
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
    color: ${p => p.theme.colors.red};
  }
`;
