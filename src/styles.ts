import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  background: #4d4d4d;
  padding: 24px;
`;

type AddItemButtonProps = {
  dark?: boolean;
};

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #ffffff3d;
  max-width: 240px;
  text-align: left;
  transition: background 85ms ease-in;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  color: ${(props) => (props.dark ? '#000' : '#fff')};
  width: 100%;
  &:hover {
    background-color: #ffffff52;
  }
`;

export const ColumnContainer = styled.div`
  width: 240px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 2px;
  padding: 16px 16px;
  flex-grow: 0;
  background-color: #ebecf0;
`;

export const ColumnTitle = styled.div`
  font-weight: bold;
  padding: 6px 16px 12px;
`;

export const CardContainer = styled.div`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 240px;
  border-radius: 2px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;
