import { AddNewItem } from './AddNewItem';
import { Column } from './Column';
import { Container } from './styles';

export const App = () => {
  return (
    <Container>
      <Column text="Todo :" />
      <AddNewItem
        toggleButtonText="+Add another Item"
        onAdd={(e) => console.log(e)}
      />
    </Container>
  );
};
