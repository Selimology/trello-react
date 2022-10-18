import { AddNewItem } from './AddNewItem';
import { Column } from './Column';
import { Container } from './styles';
import { useAppState } from './state/AppStateContext';

export const App = () => {
  const { lists } = useAppState();
  return (
    <Container>
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}
      <AddNewItem
        toggleButtonText="+Add another Item"
        onAdd={(e) => console.log(e)}
      />
    </Container>
  );
};
