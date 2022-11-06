import { animalIcons } from 'assets/animalIcons/animalIcons';
import { Button } from 'components/Button/styles';
import { FormField } from 'components/FormField';
import { AnimalType } from 'types/AnimalType';
import { Container, ImgSelect, ImgSelectOptions } from './styles';
import downArrow from 'assets/img/downArrow.svg';
import close from 'assets/img/close.svg';
import { FormSelect } from 'components/FormField/FormSelect/styles';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { palette } from 'assets/colors/palette';
import { useInputStates } from 'utils/useInputStates';

interface EditBatchModalProps {
  handleCloseModal: () => void;
}

interface IState {
  id: number;
  sigla: string;
}

interface ICity {
  id: number;
  nome: string;
}

const ANIMAL_ICONS_ENTRIES = Object.entries(animalIcons);

export const EditBatchModal: React.FC<EditBatchModalProps> = ({
  handleCloseModal,
}) => {
  const nameStates = useInputStates('name');
  const raceStates = useInputStates('race');

  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [selectedStateId, setSelectedStateId] = useState<number | null>(null);

  const [selectedAnimalType, setSelectedAnimalType] = useState<AnimalType>(
    AnimalType.OTHER,
  );

  const [isVisibleOptions, setIsVisibleOptions] = useState(false);

  useEffect(() => {
    axios
      .get<IState[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
      )
      .then(({ data }) => {
        setStates(data);
        setSelectedStateId(data[0].id);
      });
  }, []);

  useEffect(() => {
    if (states.length === 0) return;

    axios
      .get<ICity[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedStateId}/municipios`,
      )
      .then(({ data }) => setCities(data));
  }, [selectedStateId, states]);

  return (
    <Container>
      <button onClick={handleCloseModal} id="close-button">
        <img src={close} alt="botão de fechar" />
      </button>

      <form>
        <ImgSelect>
          <img
            id="image"
            src={animalIcons[selectedAnimalType].icon}
            alt="Ícone Animal"
          />
          <button
            type="button"
            id="openOptionButton"
            onClick={() =>
              setIsVisibleOptions(isVisibleOptions => !isVisibleOptions)
            }
          >
            <img id="image" src={downArrow} alt="Ícone seta" />
          </button>
          <ImgSelectOptions isVisibleOptions={isVisibleOptions}>
            {ANIMAL_ICONS_ENTRIES.map(([key, { icon }]) => (
              <button
                key={key}
                className="optionButton"
                type="button"
                onClick={() => {
                  setIsVisibleOptions(false);
                  setSelectedAnimalType(key as unknown as AnimalType);
                }}
              >
                <img src={icon} alt={key} />
              </button>
            ))}
          </ImgSelectOptions>
        </ImgSelect>
        <FormField states={nameStates} label="Nome" />
        <FormField states={raceStates} label="Raça" />
        <div id="in-line">
          <FormSelect id="state">
            <select
              onChange={({ target: { value } }) =>
                setSelectedStateId(Number(value))
              }
            >
              {states.map(({ id, sigla }) => (
                <option key={id} value={id}>
                  {sigla}
                </option>
              ))}
            </select>
            <label>Estado</label>
          </FormSelect>
          <FormSelect id="city">
            <select>
              {cities.map(({ id, nome }) => (
                <option key={id} value={id}>
                  {nome}
                </option>
              ))}
            </select>
            <label>Cidade</label>
          </FormSelect>
        </div>
        <div id="separator" />

        <div id="in-line">
          <Button type="submit" backgroundColor={palette.pink}>
            Excluir
          </Button>
          <Button type="submit">Alterar</Button>
        </div>
      </form>
    </Container>
  );
};
