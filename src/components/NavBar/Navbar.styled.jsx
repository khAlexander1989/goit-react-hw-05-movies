import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  gap: ${p => p.theme.space[3]};
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes[3]};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.textBlack};

  &.active {
    color: ${p => p.theme.colors.red};
  }

  :not(.active):hover,
  :not(.active):focus {
    text-decoration: underline;
  }
`;
