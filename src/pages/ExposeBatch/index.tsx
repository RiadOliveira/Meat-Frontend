/* eslint-disable react-hooks/rules-of-hooks */
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
  CardBatch,
  Container,
  LineBatchTable,
  SlaughterData,
  Title,
  TitleBatchTable,
} from './styles';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { animalIcons } from 'assets/animalIcons/animalIcons';
import { AnimalType } from 'types/AnimalType';
import { palette } from 'assets/colors/palette';

import iconPortion from 'assets/img/iconPortion.svg';
import iconVaccination from 'assets/img/iconVaccination.svg';
import iconSlaughter from 'assets/img/iconSlaughter.svg';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { routesAddresses } from 'routes/routesAddresses';
import { useEffect, useMemo, useState } from 'react';
import { IBatchWithRelatedEntities } from 'types/entities/IBatchWithRelatedEntities';
import { findBatchById } from 'services/batchServices';
import { format } from 'date-fns';

export const ExposeBatch: React.FC = () => {
  const { batchId } = useParams() as { batchId: string };
  if (!batchId) return <Redirect to={routesAddresses.homePage} />;

  const history = useHistory();
  const [batch, setBatch] = useState<IBatchWithRelatedEntities | null>(null);

  const batchAnimalIcon = useMemo(() => {
    if (batch === null) return animalIcons[AnimalType.OTHER];
    return animalIcons[batch.animal];
  }, [batch]);

  useEffect(() => {
    findBatchById(batchId)
      .then(setBatch)
      .catch(() => history.push(routesAddresses.homePage));
  }, [batchId, history]);

  if (batch === null) return null;
  return (
    <Container>
      <Header hasArrow />

      <main>
        <CardBatch>
          <BatchDetailsHeader>
            <TitleBatchTable
              id="card-code-title"
              backgroundcolor={batchAnimalIcon.color}
            >
              <span id="card-code">{batch.id}</span>
            </TitleBatchTable>

            <BatchData>
              <BatchCardsHeader>
                <img id="image" src={batchAnimalIcon.icon} alt="Ícone Animal" />

                <BatchTextTitle id="header-title">
                  <Title id="title" fontColor={batchAnimalIcon.color}>
                    {batch.name}
                  </Title>

                  <BatchSpacingTextLine>
                    <span id="data">{batch.race}</span>
                    <BatchTextLine>
                      <span id="data">{batch.city}</span>
                      <span id="data">-</span>
                      <span id="data">{batch.state}</span>
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
                    <span id="data">{batch.userThatMadeLastChange.name}</span>
                    <span>-</span>
                    <span id="data">
                      {format(new Date(batch.updatedAt), 'dd/MM/yyyy')}
                    </span>
                  </BatchSpacingTextLine>
                </BatchModification>

                <BatchStatus>
                  <BatchSpacingTextLine id="desktopAdjustment">
                    <BatchTextLine id="desktopAdjustment">
                      <span id="subtitle">Inicio: &nbsp; </span>
                      <span id="data"> {batch.creationDate}</span>
                    </BatchTextLine>

                    {batch.endingDate && (
                      <BatchTextLine id="desktopAdjustment">
                        <span id="subtitle">Fim: &nbsp; </span>
                        <span id="data">{batch.endingDate}</span>
                      </BatchTextLine>
                    )}
                  </BatchSpacingTextLine>
                </BatchStatus>
              </div>
            </BatchData>
          </BatchDetailsHeader>

          <BatchAtributeTable id="portion">
            <TitleBatchTable backgroundcolor={palette.yellow}>
              <img src={iconPortion} alt="Ícone Rações" />
              <span id="title">Rações</span>
            </TitleBatchTable>

            {batch.portions.map(({ id, name, portionBatch }) => (
              <LineBatchTable key={id}>
                <span>{name}</span>
                <span>-</span>
                <span>{portionBatch}</span>
              </LineBatchTable>
            ))}
          </BatchAtributeTable>

          <BatchAtributeTable id="vaccination">
            <TitleBatchTable backgroundcolor={palette.green}>
              <img src={iconVaccination} alt="Ícone Vacinas" />
              <span id="title">Vacinas</span>
            </TitleBatchTable>

            {batch.vaccinations.map(({ id, name, vaccinationBatch }) => (
              <LineBatchTable key={id}>
                <span>{name}</span>
                <span>-</span>
                <span>{vaccinationBatch}</span>
              </LineBatchTable>
            ))}
          </BatchAtributeTable>

          <BatchAtributeTable id="slaughter">
            <TitleBatchTable backgroundcolor={palette.pink}>
              <img src={iconSlaughter} alt="Ícone Abate" />
              <span id="title">Abate</span>
            </TitleBatchTable>

            {batch.slaughter && (
              <SlaughterData>
                <BatchTextLine id="slaughter-data">
                  <span id="topic">Metodo de Abate: &nbsp;</span>
                  <span>{batch.slaughter.method}</span>
                </BatchTextLine>

                <BatchTextLine id="slaughter-data">
                  <span id="topic">Data do Abate: &nbsp;</span>
                  <span>{batch.slaughter.slaughterDate}</span>
                </BatchTextLine>

                <div id="slaughter-data">
                  <span id="topic">Descrição: &nbsp;</span>
                  <span>{batch.slaughter.description}</span>
                </div>
              </SlaughterData>
            )}
          </BatchAtributeTable>
        </CardBatch>
      </main>
      <Footer />
    </Container>
  );
};
