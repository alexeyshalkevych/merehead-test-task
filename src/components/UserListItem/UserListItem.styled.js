import styled from 'styled-components';

export const UserItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserItemContent = styled.div`
  & p {
    padding-right: 15px;
  }
`;

export const UserItemButton = styled.button`
  margin-right: 15px;
`;

export const UserItemButtonsConteiner = styled.div`
  display: flex;

  & button:first-child {
    margin-right: 15px;
  }
`;
