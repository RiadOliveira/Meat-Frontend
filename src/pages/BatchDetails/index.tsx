import {
  BatchCardsHeader,
  BatchData,
  BatchDetailsHeader,
  BatchModification,
  BatchSpacingTextLine,
  BatchStatus,
  BatchSubtitle,
  BatchTextLine,
  BatchTextTitle,
  CardBatch,
  Container,
} from './styles';
import { UserHeader } from 'components/Header/UserHeader';
import iconPig from 'assets/animalIcons/iconPig.svg';

const Batch = [
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
];

//const  = [{}];
//CoronaVac 1º Dose - #FF7B8B - 12/06/2022
export const BatchDetails: React.FC = () => {
  return (
    <Container>
      <UserHeader pageBatch></UserHeader>
      <main>
        <CardBatch>
          {Batch.map(
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
              <BatchDetailsHeader key={id}>
                <BatchData>
                  <BatchCardsHeader>
                    <img id="image" src={iconPig} alt="Icone de Porco" />
                    <BatchTextTitle id="header-title">
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
                  </BatchCardsHeader>
                  <BatchModification>
                    <BatchSubtitle>
                      <span id="subtitle">Ultima Alteração:</span>
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
              </BatchDetailsHeader>
            ),
          )}
        </CardBatch>
      </main>
    </Container>
  );
};
