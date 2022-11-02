import {
  BatchData,
  BatchCardsHeader,
  BatchModification,
  BatchSpacingTextLine,
  BatchStatus,
  BatchSubtitle,
  BatchTextLine,
  BatchTextTitle,
  CardsBatch,
  Container,
  Title,
} from './styles';
import { useHistory } from 'react-router-dom';
import { Button } from 'components/Button/styles';
import iconBatch from 'assets/img/iconBatch.svg';
import { UserHeader } from 'components/UserHeader';
import { routesAddresses } from 'routes/routesAddresses';
import { animalIcons } from 'assets/animalIcons/animalIcons';
import { AnimalType } from 'types/AnimalType';
import { Modal } from 'components/Modal';
import { NewBatch } from 'pages/BatchPage/NewBatch';
import { DeleteMesage } from '../../components/DeleteMesage';

const TESTE = [
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
  {
    id: 2,
    animal: AnimalType.COW,
    name: 'peixe',
    race: 'Suino',
    city: 'Limoeiro',
    state: 'PE',
    lastModification: 'João Gomes',
    updatedAt: '13/12/2022',
    createDate: '05/04/2022',
    endingDate: '13/12/2022',
  },
  {
    id: 2,
    animal: AnimalType.CHICKEN,
    name: 'Fazenda Feliz - Porcos 69',
    race: 'Suino',
    city: 'Limoeiro',
    state: 'PE',
    lastModification: 'João Gomes',
    updatedAt: '13/12/2022',
    createDate: '05/04/2022',
    endingDate: '13/12/2022',
  },
  {
    id: 2,
    animal: AnimalType.FISH,
    name: 'Fazenda Feliz - Porcos 69',
    race: 'Suino',
    city: 'Limoeiro',
    state: 'PE',
    lastModification: 'João Gomes',
    updatedAt: '13/12/2022',
    createDate: '05/04/2022',
    endingDate: '13/12/2022',
  },
  {
    id: 2,
    animal: AnimalType.OTHER,
    name: 'Fazenda Feliz - Porcos 69',
    race: 'Suino',
    city: 'Limoeiro',
    state: 'PE',
    lastModification: 'João Gomes',
    updatedAt: '13/12/2022',
    createDate: '05/04/2022',
    endingDate: '13/12/2022',
  },
];

export const BatchPage: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Modal isVisible>
        <DeleteMesage />
      </Modal>
      <UserHeader pageBatch />
      <main>
        <Button id="new-batch">
          <img src={iconBatch} alt="Icone Lote" />
          Novo Lote
        </Button>
        <CardsBatch>
          {TESTE.map(
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
              <button
                key={id}
                onClick={() => history.push(routesAddresses.batchDetails)}
              >
                <BatchData>
                  <BatchCardsHeader>
                    <img
                      id="image"
                      src={animalIcons[animal].icon}
                      alt="Icone Animal"
                    />
                    <BatchTextTitle>
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
                  <BatchModification>
                    <BatchSubtitle>
                      <span id="subtitle">Ultima Alteração:</span>
                    </BatchSubtitle>
                    <BatchSpacingTextLine>
                      <span id="data">{lastModification}</span>
                      <span id="data">{updatedAt}</span>
                    </BatchSpacingTextLine>
                  </BatchModification>
                  <BatchStatus>
                    <BatchSpacingTextLine>
                      <BatchTextLine>
                        <span id="subtitle">Inicio: &nbsp; </span>
                        <span id="data"> {createDate}</span>
                      </BatchTextLine>
                      <BatchTextLine>
                        <span id="subtitle">Fim: &nbsp; </span>
                        <span id="data">{endingDate}</span>
                      </BatchTextLine>
                    </BatchSpacingTextLine>
                  </BatchStatus>
                </BatchData>
              </button>
            ),
          )}
        </CardsBatch>
      </main>
    </Container>
  );
};
