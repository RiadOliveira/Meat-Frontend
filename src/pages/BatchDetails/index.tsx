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
  Title,
  TitleBatchTable,
} from './styles';
import { UserHeader } from 'components/Header/UserHeader';
import { animalIcons } from 'assets/animalIcons/animalIcons';
import { AnimalType } from 'types/AnimalType';
import iconPortion from 'assets/img/iconPortion.svg';
import iconVaccination from 'assets/img/iconVaccination.svg';
import iconSlaughter from 'assets/img/iconSlaughter.svg';
import iconEdit from 'assets/img/iconEdit.svg';
import iconDelete from 'assets/img/iconDelete.svg';
import { palette } from 'assets/colors/palette';
import { Button } from 'components/Button/styles';
import { shade } from 'polished';

const Batch = [
  {
    id: 1,
    animal: AnimalType.PIG,
    name: 'Fazenda Feliz - Porcos 24',
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
    description:
      'O suíno pode ser abatido com uma pancada na cabeça ou através do uso do aparelho insensibilizador, que é considerado mais conveniente e dentro das normas de abate civilizado e de proteção aos animais. Após o abate, é feita a depilação com água quente ou utilizando um lança-chamas.',
    batchId: '',
  },
];

export const BatchDetails: React.FC = () => {
  return (
    <Container>
      <UserHeader pageBatch></UserHeader>
      <main>
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
                      alt="Icone de Porco"
                    />
                    <BatchTextTitle id="header-title">
                      <Title id="title" fontColor={animalIcons[animal].color}>
                        {name}
                      </Title>
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
              <img src={iconPortion} alt="Icone Rações" />
              <span id="title">Rações</span>
            </TitleBatchTable>
            {Portion.map(({ id, name, portionBatch, batchId }) => (
              <LineBatchTable key={id}>
                <span>{name}</span>
                <span>-</span>
                <span>{portionBatch}</span>
                <div>
                  <button>
                    <img src={iconEdit} alt="Icone Editar"></img>
                  </button>
                  <button>
                    <img src={iconDelete} alt="Icone Deletar"></img>
                  </button>
                </div>
              </LineBatchTable>
            ))}
            <ButtonAdd>
              <Button backgroundColor={palette.beige}>Adicionar</Button>
            </ButtonAdd>
          </BatchAtributeTable>

          <BatchAtributeTable id="vaccination">
            <TitleBatchTable backgroundcolor={palette.green}>
              <img src={iconVaccination} alt="Icone Vacinas" />
              <span id="title">Vacinas</span>
            </TitleBatchTable>
            {Vaccination.map(({ id, name, vaccinationBatch, batchId }) => (
              <LineBatchTable key={id}>
                <span>{name}</span>
                <span>-</span>
                <span>{vaccinationBatch}</span>
                <div>
                  <button>
                    <img src={iconEdit} alt="Icone Editar"></img>
                  </button>
                  <button>
                    <img src={iconDelete} alt="Icone Deletar"></img>
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
              <img src={iconSlaughter} alt="Icone Abate" />
              <span id="title">Abate</span>
            </TitleBatchTable>
            {Slaughter.map(({ id, method, description, batchId }) => (
              <div key={id} id="slaughter-data">
                <div>
                  <span id="topic">Metodo de Abate: </span>
                  {/* <span>{method}</span> */}
                </div>
                <div id="topic">
                  <span>Descrição: </span>
                  {/* <span>{description}</span> */}
                </div>
              </div>
            ))}
            <ButtonAdd>
              <Button backgroundColor={palette.beige}>Adicionar</Button>
            </ButtonAdd>
          </BatchAtributeTable>
        </CardBatch>
      </main>
    </Container>
  );
};
