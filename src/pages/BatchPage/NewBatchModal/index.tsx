import { animalIcons } from 'assets/animalIcons/animalIcons';
import { Button } from 'components/Button/styles';
import { FormField } from 'components/FormField';
import { AnimalType } from 'types/AnimalType';
import {
  Container,
  FormContainer,
  ImgSelect,
  ImgSelectOptions,
} from './styles';
import { FormSelect } from 'components/FormField/FormSelect/styles';
import { useCallback, useEffect, useState } from 'react';
import { useInputStates } from 'utils/useInputStates';
import { CreateBatchData } from 'types/entities/operations/batch/CreateBatchData';

import * as yup from 'yup';
import downArrow from 'assets/img/downArrow.svg';
import close from 'assets/img/close.svg';
import axios from 'axios';
import { yupRequiredStringField } from 'types/yupRequiredStringField';
import { getInputStateValue } from 'utils/getInputStateValue';
import { useFormError } from 'errors/useFormError';

interface NewBatchModalProps {
  handleCreateNewBatch: (
    newBatchData: Omit<CreateBatchData, 'userId'>,
  ) => Promise<void>;
  handleCloseModal: () => void;
  handleCancel: () => void;
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

export const NewBatchModal: React.FC<NewBatchModalProps> = ({
  handleCreateNewBatch,
  handleCancel,
  handleCloseModal,
}) => {
  const { handleFormError } = useFormError();

  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [selectedStateIndex, setSelectedStateIndex] = useState<number>(0);
  const [selectedCityIndex, setSelectedCityIndex] = useState<number>(0);

  const [selectedAnimalType, setSelectedAnimalType] = useState<AnimalType>(
    AnimalType.OTHER,
  );

  const nameStates = useInputStates('name');
  const raceStates = useInputStates('race');
  const creationDateStates = useInputStates('creationDate');

  const [isVisibleOptions, setIsVisibleOptions] = useState(false);

  useEffect(() => {
    axios
      .get<IState[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
      )
      .then(({ data }) => setStates(data));
  }, []);

  useEffect(() => {
    if (states.length === 0) return;
    const selectedStateId = states[selectedStateIndex].id;

    axios
      .get<ICity[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedStateId}/municipios`,
      )
      .then(({ data }) => setCities(data));
  }, [selectedStateIndex, states]);

  const handleOnChangeStateSelect = useCallback(
    (stateId: number) => {
      const stateIndex = states.findIndex(({ id }) => id === stateId);
      setSelectedStateIndex(stateIndex);
    },
    [states],
  );

  const handleOnChangeCitySelect = useCallback(
    (cityId: number) => {
      const cityIndex = cities.findIndex(({ id }) => id === cityId);
      setSelectedCityIndex(cityIndex);
    },
    [cities],
  );

  const handleRegisterBatchButtonClick = useCallback(async () => {
    const schema = yup.object().shape({
      name: yupRequiredStringField,
      race: yupRequiredStringField,
      creationDate: yup
        .date()
        .typeError('Campo obrigatório')
        .required('Campo obrigatório'),
      state: yupRequiredStringField,
      city: yupRequiredStringField,
    });

    const parsedCreationDate = new Date(getInputStateValue(creationDateStates));
    const parsedBatchData = {
      name: getInputStateValue(nameStates),
      race: getInputStateValue(raceStates),
      creationDate: parsedCreationDate,
      state: states[selectedStateIndex].sigla,
      city: cities[selectedCityIndex].nome,
      animal: selectedAnimalType,
    };

    try {
      await schema.validate(parsedBatchData, { abortEarly: false });
      await handleCreateNewBatch(parsedBatchData);

      handleCloseModal();
    } catch (error) {
      handleFormError(error as Error | yup.ValidationError, [
        nameStates,
        raceStates,
        creationDateStates,
      ]);
    }
  }, [
    cities,
    creationDateStates,
    handleCloseModal,
    handleCreateNewBatch,
    handleFormError,
    nameStates,
    raceStates,
    selectedAnimalType,
    selectedCityIndex,
    selectedStateIndex,
    states,
  ]);

  return (
    <Container>
      <button onClick={handleCancel} id="close-button">
        <img src={close} alt="botão de fechar" />
      </button>

      <FormContainer>
        <ImgSelect>
          <img
            id="image"
            src={animalIcons[selectedAnimalType].icon}
            alt="Icone Animal"
          />
          <button
            type="button"
            id="OpenOptionButton"
            onClick={() =>
              setIsVisibleOptions(isVisibleOptions => !isVisibleOptions)
            }
          >
            <img id="image" src={downArrow} alt="Icone seta" />
          </button>
          <ImgSelectOptions isVisibleOptions={isVisibleOptions}>
            {ANIMAL_ICONS_ENTRIES.map(([key, { icon }]) => (
              <button
                key={key}
                id="optionButton"
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
                handleOnChangeStateSelect(Number(value))
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
            <select
              onChange={({ target: { value } }) =>
                handleOnChangeCitySelect(Number(value))
              }
            >
              {cities.map(({ id, nome }) => (
                <option key={id} value={id}>
                  {nome}
                </option>
              ))}
            </select>
            <label>Cidade</label>
          </FormSelect>
        </div>

        <FormField
          states={creationDateStates}
          type="date"
          label="Data de inicio"
          placeholder="dd-mm-yyyy"
        />

        <div id="separator" />
        <Button type="button" onClick={handleRegisterBatchButtonClick}>
          Cadastrar
        </Button>
      </FormContainer>
    </Container>
  );
};
