import {
  BatchData,
  BatchHeader,
  BatchModification,
  BatchSpacingTextLine,
  BatchStatus,
  BatchSubtitle,
  BatchTextLine,
  BatchTextTitle,
  CardsBatch,
  Container,
} from './styles';
import { useHistory } from 'react-router-dom';
import { Button } from 'components/Button/styles';
import iconBatch from 'assets/img/iconBatch.svg';
import iconPig from 'assets/animalIcons/iconPig.svg';
import { UserHeader } from 'components/Header/UserHeader';

const TESTE = [
  {
    id: 1,
    name: 'Fazenda Feliz - Porcos 24',
    race: 'Suino',
    city: 'Limoeiro',
    state: 'PE',
    lastModification: 'João Gomes',
    lastDateModification: '13/12/2022',
    createDate: '05/04/2022',
    endingDate: '11/12/2022',
  },
  {
    id: 2,
    name: 'Fazenda Feliz - Porcos 69',
    race: 'Suino',
    city: 'Limoeiro',
    state: 'PE',
    lastModification: 'João Gomes',
    lastDateModification: '13/12/2022',
    createDate: '05/04/2022',
    endingDate: '13/12/2022',
  },
  {
    id: 2,
    name: 'Fazenda Feliz - Porcos 69',
    race: 'Suino',
    city: 'Limoeiro',
    state: 'PE',
    lastModification: 'João Gomes',
    lastDateModification: '13/12/2022',
    createDate: '05/04/2022',
    endingDate: '13/12/2022',
  },
  {
    id: 2,
    name: 'Fazenda Feliz - Porcos 69',
    race: 'Suino',
    city: 'Limoeiro',
    state: 'PE',
    lastModification: 'João Gomes',
    lastDateModification: '13/12/2022',
    createDate: '05/04/2022',
    endingDate: '13/12/2022',
  },
  {
    id: 2,
    name: 'Fazenda Feliz - Porcos 69',
    race: 'Suino',
    city: 'Limoeiro',
    state: 'PE',
    lastModification: 'João Gomes',
    lastDateModification: '13/12/2022',
    createDate: '05/04/2022',
    endingDate: '13/12/2022',
  },
  {
    id: 2,
    name: 'Fazenda Feliz - Porcos 69',
    race: 'Suino',
    city: 'Limoeiro',
    state: 'PE',
    lastModification: 'João Gomes',
    lastDateModification: '13/12/2022',
    createDate: '05/04/2022',
    endingDate: '13/12/2022',
  },
];

export const BatchPage: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <UserHeader />
      <main>
        <Button id="new-batch">
          <img src={iconBatch} alt="Icone Lote" />
          Novo Lote
        </Button>
        <CardsBatch>
          {TESTE.map(
            ({
              id,
              name,
              race,
              city,
              state,
              lastModification,
              lastDateModification,
              createDate,
              endingDate,
            }) => (
              <button key={id}>
                <BatchData>
                  <BatchHeader>
                    <img id="image" src={iconPig} alt="Icone de Porco" />
                    <BatchTextTitle>
                      <span id="title">{name}</span>
                      <BatchSpacingTextLine>
                        <span id="data">{race}</span>
                        <BatchTextLine>
                          <span id="data">{city}</span>
                          <span id="data">-</span>
                          <span id="data">{state}</span>
                        </BatchTextLine>
                      </BatchSpacingTextLine>
                    </BatchTextTitle>
                  </BatchHeader>
                  <BatchModification>
                    <BatchSubtitle>
                      <span id="subtitle">Ultima Alteração</span>
                    </BatchSubtitle>
                    <BatchSpacingTextLine>
                      <span id="data">{lastModification}</span>
                      <span id="data">{lastDateModification}</span>
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
