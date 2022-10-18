import { AddNewItem } from './AddNewItem';
import { Column } from './Column';
import { Container } from './styles';

export const App = () => {
  return (
    <Container>
      <Column text="Todo :" />
      <AddNewItem
        toggleButtonText="+Add another Item"
        onAdd={() => console.log('item created')}
      />
    </Container>
  );
};
