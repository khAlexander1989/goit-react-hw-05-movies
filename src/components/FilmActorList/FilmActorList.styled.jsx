import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  max-width: calc(100vw);
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const Item = styled.li`
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);
`;
