import { AddNewItem } from './AddNewItem';
import { Card } from './Card';
import { ColumnContainer, ColumnTitle } from './styles';

type ColumnProps = React.PropsWithChildren<{
  text: string;
}>;

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="First" />
      <Card text="Second" />
      <Card text="Third" />
      <AddNewItem
        toggleButtonText="+ Add another card"
        dark
        onAdd={() => console.log('new Item')}
      />
    </ColumnContainer>
  );
};
