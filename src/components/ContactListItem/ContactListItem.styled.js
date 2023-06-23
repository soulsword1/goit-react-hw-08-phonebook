import styled from '@emotion/styled';

export const TableTd = styled.td`
  padding: 15px;
  border: 1.5px solid #647c90;
`;

export const TableItem = styled.tr`
  font-weight: 500;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const TableItemButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px;
  width: 100px;

  cursor: pointer;
  color: #fff;
  background-color: #970c10;
  font-weight: 400;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    color: #970c10;
    background-color: #fff;
    border: 1px solid #970c10;
  }
`;




// export const ListItem = styled.li`
//   font-weight: 500;

//   &:not(:last-child) {
//     margin-bottom: 5px;
//   }
// `;

// export const ListItemButton = styled.button`
//   margin-left: 20px;
//   padding: 5px;

//   cursor: pointer;
//   color: #fff;
//   background-color: #970c10;
//   border-radius: 10px;
//   border: 1px solid transparent;
//   transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
//     background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
//     border 250ms cubic-bezier(0.4, 0, 0.2, 1);

//   &:not(:last-child) {
//     margin-right: 10px;
//   }

//   &:hover {
//     color: #970c10;
//     background-color: #fff;
//     border: 1px solid #970c10;
//   }
// `;
