import { animalIcons } from 'assets/animalIcons/animalIcons';
import { Button } from 'components/Button/styles';
import { InputForm } from 'components/Input/InputForm/styles';
import { AnimalType } from 'types/AnimalType';
import { Container, ImgSelect } from './styles';
import v from 'assets/img/v.svg';
export const NewBatch: React.FC = () => {
  return (
    <Container>
      <form>
        <ImgSelect>
          <div id="background">
            <img
              id="image"
              src={animalIcons[AnimalType.OTHER].icon}
              alt="Icone Animal"
            />
          </div>
          <button>
            <img id="image" src={v} alt="Icone seta" />
          </button>
        </ImgSelect>
        <InputForm>
          <select>
            <option>Sua Mãe</option>
            <option>Seu Pai</option>
          </select>
          <label>Como</label>
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
          <InputForm>
            <input type="text" id="city"></input>
            <label>Cidade</label>
          </InputForm>
          <InputForm>
            <input type="text" id="state"></input>
            <label>Estado</label>
          </InputForm>
        </div>
        <InputForm>
          <input type="date"></input>
          <label id="label-top">Data de inicio</label>
        </InputForm>
      </form>
      <Button type="submit">Cadastrar</Button>
    </Container>
  );
};
