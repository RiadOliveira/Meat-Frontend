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

import * as yup from 'yup';
import downArrow from 'assets/img/downArrow.svg';
import close from 'assets/img/close.svg';
import axios from 'axios';
import { yupRequiredStringField } from 'types/yupRequiredStringField';
import { getInputStateValue } from 'utils/getInputStateValue';
import { useFormError } from 'errors/useFormError';
import { IBatch } from 'types/entities/IBatch';
import { UpdateBatchData } from 'types/entities/operations/batch/UpdateBatchData';

interface EditBatchModalProps {
  batchToEdit: IBatch;
  handleUpdateBatch: (
    updatedBatch: Omit<UpdateBatchData, 'userId'>,
  ) => Promise<void>;
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
  batchToEdit,
  handleUpdateBatch,
  handleCloseModal,
}) => {
  const { handleFormError } = useFormError();

  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [selectedStateIndex, setSelectedStateIndex] = useState<number>(-1);
  const [selectedCityIndex, setSelectedCityIndex] = useState<number>(-1);

  const [selectedAnimalType, setSelectedAnimalType] = useState<AnimalType>(
    AnimalType.OTHER,
  );

  const nameStates = useInputStates('name');
  const raceStates = useInputStates('race');

  useEffect(() => {
    nameStates.mainState.setFunction(batchToEdit.name);
    raceStates.mainState.setFunction(batchToEdit.race);
    raceStates.mainState.setFunction(batchToEdit.race);
    setSelectedAnimalType(batchToEdit.animal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [batchToEdit]);

  useEffect(() => {
    axios
      .get<IState[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
      )
      .then(({ data }) => {
        const stateIndex = data.findIndex(
          ({ sigla }) => sigla === batchToEdit.state,
        );
        setSelectedStateIndex(stateIndex);
        setStates(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (states.length === 0) return;
    const selectedStateId = states[selectedStateIndex].id;

    axios
      .get<ICity[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedStateId}/municipios`,
      )
      .then(({ data }) => {
        const cityIndex = data.findIndex(
          ({ nome }) => nome === batchToEdit.city,
        );
        setSelectedCityIndex(cityIndex);
        setCities(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStateIndex, states]);

  const handleUpdateBatchButtonClick = useCallback(async () => {
    const schema = yup.object().shape({
      name: yupRequiredStringField,
      race: yupRequiredStringField,
      state: yupRequiredStringField,
      city: yupRequiredStringField,
    });

    const parsedBatchData = {
      name: getInputStateValue(nameStates),
      race: getInputStateValue(raceStates),
      state: states[selectedStateIndex].sigla,
      city: cities[selectedCityIndex].nome,
      animal: selectedAnimalType,
    };

    try {
      await schema.validate(parsedBatchData, { abortEarly: false });
      await handleUpdateBatch(parsedBatchData);

      handleCloseModal();
    } catch (error) {
      handleFormError(error as Error | yup.ValidationError, [
        nameStates,
        raceStates,
      ]);
    }
  }, [
    cities,
    handleCloseModal,
    handleFormError,
    handleUpdateBatch,
    nameStates,
    raceStates,
    selectedAnimalType,
    selectedCityIndex,
    selectedStateIndex,
    states,
  ]);

  return (
    <Container>
      <button onClick={handleCloseModal} id="close-button">
        <img src={close} alt="botão de fechar" />
      </button>

      <FormContainer>
        <ImgSelect>
          <img
            id="image"
            src={animalIcons[selectedAnimalType].icon}
            alt="Ícone Animal"
          />
          <button
            type="button"
            id="OpenOptionButton"
            onClick={() =>
              setIsOptionsVisible(isOptionsVisible => !isOptionsVisible)
            }
          >
            <img id="image" src={downArrow} alt="Ícone seta" />
          </button>
          <ImgSelectOptions isOptionsVisible={isOptionsVisible}>
            {ANIMAL_ICONS_ENTRIES.map(([key, { icon }]) => (
              <button
                key={key}
                className="optionButton"
                type="button"
                onClick={() => {
                  setIsOptionsVisible(false);
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
              value={selectedStateIndex}
              onChange={({ target: { value } }) =>
                setSelectedStateIndex(Number(value))
              }
            >
              {states.map(({ id, sigla }, index) => (
                <option key={id} value={index}>
                  {sigla}
                </option>
              ))}
            </select>
            <label>Estado</label>
          </FormSelect>
          <FormSelect id="city">
            <select
              value={selectedCityIndex}
              onChange={({ target: { value } }) =>
                setSelectedCityIndex(Number(value))
              }
            >
              {cities.map(({ id, nome }, index) => (
                <option key={id} value={index}>
                  {nome}
                </option>
              ))}
            </select>
            <label>Cidade</label>
          </FormSelect>
        </div>

        <div id="separator" />
        <Button type="button" onClick={handleUpdateBatchButtonClick}>
          Alterar
        </Button>
      </FormContainer>
    </Container>
  );
};
