import {
  BatchAtributeTable,
  BatchCardsHeader,
  BatchData,
  BatchDetailsHeader,
  BatchModification,
  BatchSpacingTextLine,
  BatchStatus,
  BatchSubtitle,
  BatchTextLine,
  BatchTextTitle,
  ButtonAdd,
  CardBatch,
  Container,
  LineBatchTable,
  SlaughterData,
  Title,
  TitleBatchTable,
} from './styles';
import { UserHeader } from 'components/UserHeader';
import { animalIcons } from 'assets/animalIcons/animalIcons';
import { AnimalType } from 'types/AnimalType';
import iconPortion from 'assets/img/iconPortion.svg';
import iconVaccination from 'assets/img/iconVaccination.svg';
import iconSlaughter from 'assets/img/iconSlaughter.svg';
import iconEdit from 'assets/img/iconEdit.svg';
import iconDelete from 'assets/img/iconDelete.svg';
import { palette } from 'assets/colors/palette';
import { Button } from 'components/Button/styles';
import iconBatch from 'assets/img/iconBatch.svg';
import { Modal } from 'components/Modal';
import { DeleteModal } from 'components/DeleteModal';
import { useState } from 'react';
import { CreatePortionModal } from './CreatePortionModal';
import { CreateSlaughterModal } from './CreateSlaughterModal';
import { EditBatchModal } from './EditBatchModal';

const Batch = [
  {
    id: 1,
    animal: AnimalType.PIG,
    name: 'Fazenda Feliz - Porcos ',
    race: 'Suino',
    city: 'Limoeiro',
    state: 'PE',
    lastModification: 'João Gomes',
    updatedAt: '13/12/2022',
    createDate: '05/04/2022',
    endingDate: '11/12/2022',
  },
];

const Portion = [
  {
    id: 1,
    name: 'Wiscas',
    portionBatch: 'Comida',
    batchId: '',
  },
  {
    id: 2,
    name: 'Wiscas2',
    portionBatch: 'Comida2',
    batchId: '',
  },
];
const Vaccination = [
  {
    id: 1,
    name: 'CoronaVac 1º Dose',
    vaccinationBatch: '#FF7B8B',
    batchId: '',
  },
];
const Slaughter = [
  {
    id: 1,
    method: 'Pancada',
    slaughterDate: '13/12/2022',
    description:
      'O suíno pode ser abatido com uma pancada na cabeça ou através do uso do aparelho insensibilizador, que é considerado mais conveniente e dentro das normas de abate civilizado e de proteção aos animais. Após o abate, é feita a depilação com água quente ou utilizando um lança-chamas.',
    batchId: '',
  },
];

export const BatchDetails: React.FC = () => {
  const [deleteModalIsVisible, setDeleteModalIsVisible] = useState(false);
  const [editBatchIsVisible, setsetEditBatchIsVisible] = useState(false);

  const [createPortionModalIsVisible, setCreatePortionModalIsVisible] =
    useState(false);
  const [createSlaughterModalIsVisible, setCreateSlaughterModalIsVisible] =
    useState(false);

  return (
    <Container>
      <Modal isVisible={deleteModalIsVisible}>
        <DeleteModal handleCloseModal={() => setDeleteModalIsVisible(false)} />
      </Modal>
      <Modal isVisible={editBatchIsVisible}>
        <EditBatchModal handleCancel={() => setsetEditBatchIsVisible(false)} />
      </Modal>
      <UserHeader pageBatch></UserHeader>
      <main>
        <Button id="finish-batch">
          <img src={iconBatch} alt="Ícone Lote" />
          Finalizar Lote
        </Button>
        <CardBatch>
          {Batch.map(
            ({
              id,
              animal,
              name,
              race,
              city,
              state,
              lastModification,
              updatedAt,
              createDate,
              endingDate,
            }) => (
              <BatchDetailsHeader key={id}>
                <BatchData>
                  <BatchCardsHeader>
                    <img
                      id="image"
                      src={animalIcons[animal].icon}
                      alt="Ícone de Porco"
                    />
                    <BatchTextTitle id="header-title">
                      <div>
                        <Title id="title" fontColor={animalIcons[animal].color}>
                          {name}
                        </Title>
                        <button onClick={() => setsetEditBatchIsVisible(true)}>
                          <img src={iconEdit} alt="Ícone Editar"></img>
                        </button>
                      </div>
                      <BatchSpacingTextLine>
                        <span id="data">{race}</span>
                        <BatchTextLine>
                          <span id="data">{city}</span>
                          <span id="data">-</span>
                          <span id="data">{state}</span>
                        </BatchTextLine>
                      </BatchSpacingTextLine>
                    </BatchTextTitle>
                  </BatchCardsHeader>
                  <div id="desktopAdjustment">
                    <BatchModification>
                      <BatchSubtitle>
                        <span id="subtitle">Ultima Alteração:</span>
                      </BatchSubtitle>
                      <BatchSpacingTextLine>
                        <span id="data">{lastModification}</span>
                        <span>-</span>
                        <span id="data">{updatedAt}</span>
                      </BatchSpacingTextLine>
                    </BatchModification>
                    <BatchStatus>
                      <BatchSpacingTextLine id="desktopAdjustment">
                        <BatchTextLine id="desktopAdjustment">
                          <span id="subtitle">Inicio: &nbsp; </span>
                          <span id="data"> {createDate}</span>
                        </BatchTextLine>
                        <BatchTextLine id="desktopAdjustment">
                          <span id="subtitle">Fim: &nbsp; </span>
                          <span id="data">{endingDate}</span>
                        </BatchTextLine>
                      </BatchSpacingTextLine>
                    </BatchStatus>
                  </div>
                </BatchData>
              </BatchDetailsHeader>
            ),
          )}

          <BatchAtributeTable id="portion">
            <TitleBatchTable backgroundcolor={palette.yellow}>
              <img src={iconPortion} alt="Ícone Rações" />
              <span id="title">Rações</span>
            </TitleBatchTable>
            {Portion.map(({ id, name, portionBatch }) => (
              <LineBatchTable key={id}>
                <span>{name}</span>
                <span>-</span>
                <span>{portionBatch}</span>
                <div>
                  <button>
                    <img src={iconEdit} alt="Ícone Editar"></img>
                  </button>
                  <button onClick={() => setDeleteModalIsVisible(true)}>
                    <img src={iconDelete} alt="Ícone Deletar"></img>
                  </button>
                </div>
              </LineBatchTable>
            ))}
            <ButtonAdd>
              <Button
                backgroundColor={palette.beige}
                onClick={() => setCreatePortionModalIsVisible(true)}
              >
                Adicionar
              </Button>
            </ButtonAdd>
            <Modal isVisible={createPortionModalIsVisible}>
              <CreatePortionModal
                handleCancel={() => setCreatePortionModalIsVisible(false)}
              />
            </Modal>
          </BatchAtributeTable>

          <BatchAtributeTable id="vaccination">
            <TitleBatchTable backgroundcolor={palette.green}>
              <img src={iconVaccination} alt="Ícone Vacinas" />
              <span id="title">Vacinas</span>
            </TitleBatchTable>
            {Vaccination.map(({ id, name, vaccinationBatch }) => (
              <LineBatchTable key={id}>
                <span>{name}</span>
                <span>-</span>
                <span>{vaccinationBatch}</span>
                <div>
                  <button>
                    <img src={iconEdit} alt="Ícone Editar"></img>
                  </button>
                  <button onClick={() => setDeleteModalIsVisible(true)}>
                    <img src={iconDelete} alt="Ícone Deletar"></img>
                  </button>
                </div>
              </LineBatchTable>
            ))}
            <ButtonAdd>
              <Button backgroundColor={palette.beige}>Adicionar</Button>
            </ButtonAdd>
          </BatchAtributeTable>

          <BatchAtributeTable id="slaughter">
            <TitleBatchTable backgroundcolor={palette.pink}>
              <img src={iconSlaughter} alt="Ícone Abate" />
              <span id="title">Abate</span>
            </TitleBatchTable>
            {Slaughter.map(({ id, method, slaughterDate, description }) => (
              <div key={id}>
                <SlaughterData>
                  <div id="separate">
                    <BatchTextLine id="slaughter-data">
                      <span id="topic">Data do Abate: &nbsp;</span>
                      <span>{slaughterDate}</span>
                    </BatchTextLine>
                    <button
                      onClick={() => setCreateSlaughterModalIsVisible(true)}
                    >
                      <img src={iconEdit} alt="Ícone Editar"></img>
                    </button>
                  </div>
                  <BatchTextLine id="slaughter-data">
                    <span id="topic">Metodo de Abate: &nbsp;</span>
                    <span>{method}</span>
                  </BatchTextLine>
                  <div id="slaughter-data">
                    <span id="topic">Descrição: &nbsp;</span>
                    <span>{description}</span>
                  </div>
                </SlaughterData>
              </div>
            ))}
            <Modal isVisible={createSlaughterModalIsVisible}>
              <CreateSlaughterModal
                handleCancel={() => setCreateSlaughterModalIsVisible(false)}
              />
            </Modal>
          </BatchAtributeTable>
        </CardBatch>
      </main>
    </Container>
  );
};
