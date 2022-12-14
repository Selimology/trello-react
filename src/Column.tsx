import { AddNewItem } from './AddNewItem';
import { Card } from './Card';
import { ColumnContainer, ColumnTitle } from './styles';
import { useAppState } from './state/AppStateContext';
type ColumnProps = React.PropsWithChildren<{
  text: string;
  id: string;
}>;

export const Column = ({ text, id }: ColumnProps) => {
  const { getTasksByListId } = useAppState();

  const tasks = getTasksByListId(id);
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another card"
        dark
        onAdd={(e) => console.log(e)}
      />
    </ColumnContainer>
  );
};
