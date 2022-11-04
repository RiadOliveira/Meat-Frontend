import { animalIcons } from 'assets/animalIcons/animalIcons';
import { Button } from 'components/Button/styles';
import { FormField } from 'components/FormField';
import { AnimalType } from 'types/AnimalType';
import { Container, ImgSelect } from './styles';
import dawnArrow from 'assets/img/dawnArrow.svg';
import { FormSelect } from 'components/FormField/FormSelect/styles';

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
            <img id="image" src={dawnArrow} alt="Icone seta" />
          </button>
        </ImgSelect>
        <FormField label="Nome" />
        <FormField label="Raça" />
        <div id="in-line">
          <div id="city">
            <FormField id="city" label="Cidade" />
          </div>
          <div id="state">
            <FormField id="state" label="Estado" />
          </div>
        </div>
        <FormSelect>
          <select>
            <option>1</option>
          </select>
          <label>Estado</label>
        </FormSelect>
        <FormField type="date" label="Data de inicio" />
      </form>
      <Button type="submit">Cadastrar</Button>
    </Container>
  );
};
