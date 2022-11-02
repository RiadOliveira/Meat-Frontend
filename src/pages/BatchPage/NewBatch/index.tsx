import { InputForm } from 'components/Input/InputForm/styles';
import { Container } from './styles';

export const NewBatch: React.FC = () => {
  return (
    <Container>
      <form>
        <InputForm>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </InputForm>
        <InputForm>
          <input type="text"></input>
          <label>Nome</label>
        </InputForm>
        <InputForm>
          <input type="text"></input>
          <label>Raça</label>
        </InputForm>
        <div id="in-line">
          <InputForm id="city">
            <input type="text" id="city"></input>
            <label id="city">Cidade</label>
          </InputForm>
          <InputForm id="state">
            <input type="text" id="state"></input>
            <label id="state">Estado</label>
          </InputForm>
        </div>
        <InputForm>
          <input type="date"></input>
          <label id="label-top">Data de inicio</label>
        </InputForm>
      </form>
    </Container>
  );
};
