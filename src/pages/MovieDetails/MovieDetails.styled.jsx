import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GoBackBtn = styled.button`
  position: fixed;
  left: 0;
  bottom: 50%;
  transform: translateY(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;

  border: none;
  background-color: transparent;
  color: ${p => p.theme.colors.red};

  :hover,
  :focus {
    color: ${p => p.theme.colors.lightRed};
  }
`;

export const Item = styled.li`
  margin-top: ${p => p.theme.space[3]};
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes[3]};
`;

export const Link = styled(NavLink)`
  display: block;
  padding: ${p => p.theme.space[2]} ${p => p.theme.space[3]};
  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;
  color: ${p => p.theme.colors.red};

  border: 1px solid;
  border-color: transparent;

  border-color: ${p => p.theme.colors.red};

  &.active {
    background-color: ${p => p.theme.colors.red};
    color: ${p => p.theme.colors.textWhite};
  }
`;
