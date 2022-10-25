import styled from 'styled-components';

export const PageHeader = styled.header`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[2]} ${p => p.theme.space[4]};

  height: 50px;
  background-color: ${p => p.theme.colors.bgPrimary};
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  padding: ${p => p.theme.space[4]};
`;
