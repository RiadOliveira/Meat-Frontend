/* eslint-disable react-hooks/rules-of-hooks */
import iconPortion from 'assets/img/iconPortion.svg';
import iconVaccination from 'assets/img/iconVaccination.svg';
import iconSlaughter from 'assets/img/iconSlaughter.svg';
import iconEdit from 'assets/img/iconEdit.svg';
import iconDelete from 'assets/img/iconDelete.svg';
import iconBatch from 'assets/img/iconBatch.svg';

import {
  BatchTableAttribute,
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
import { format } from 'date-fns';
import { UserHeader } from 'components/UserHeader';
import { animalIcons } from 'assets/animalIcons/animalIcons';
import { palette } from 'assets/colors/palette';
import { Button } from 'components/Button/styles';
import { Modal } from 'components/Modal';
import { DeleteModal } from 'components/DeleteModal';
import { useEffect, useState } from 'react';
import { CreatePortionModal } from './CreatePortionModal';
import { CreateSlaughterModal } from './CreateSlaughterModal';
import { EditBatchModal } from './EditBatchModal';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { routesAddresses } from 'routes/routesAddresses';
import { IBatchWithRelatedEntities } from 'types/entities/IBatchWithRelatedEntities';
import { findBatchById } from 'services/batchServices';
import { AnimalType } from 'types/AnimalType';

export const BatchDetails: React.FC = () => {
  const { batchId } = useParams() as { batchId: string };
  if (!batchId) return <Redirect to={routesAddresses.homePage} />;

  const history = useHistory();
  const [batch, setBatch] = useState<IBatchWithRelatedEntities | null>(null);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isEditBatchModalVisible, setIsEditBatchModalVisible] = useState(false);

  const [isCreatePortionModalVisible, setIsCreatePortionModalVisible] =
    useState(false);
  const [isCreateSlaughterModalVisible, setIsCreateSlaughterModalVisible] =
    useState(false);

  useEffect(() => {
    findBatchById(batchId)
      .then(setBatch)
      .catch(() => history.push(routesAddresses.homePage));
  }, [batchId, history]);

  if (batch === null) return null;
  return (
    <Container>
      <Modal isVisible={isDeleteModalVisible}>
        <DeleteModal
          handleDelete={async () => {
            console.log('');
          }}
          handleCloseModal={() => setIsDeleteModalVisible(false)}
        />
      </Modal>

      <Modal isVisible={isEditBatchModalVisible}>
        <EditBatchModal
          handleCloseModal={() => setIsEditBatchModalVisible(false)}
        />
      </Modal>

      <Modal isVisible={isCreateSlaughterModalVisible}>
        <CreateSlaughterModal
          handleCloseModal={() => setIsCreateSlaughterModalVisible(false)}
        />
      </Modal>
      <UserHeader pageBatch></UserHeader>

      <main>
        <Button id="finish-batch">
          <img src={iconBatch} alt="Ícone Lote" />
          Finalizar Lote
        </Button>
        <CardBatch>
          <BatchDetailsHeader>
            <BatchData>
              <BatchCardsHeader>
                <img
                  id="image"
                  src={animalIcons[batch.animal ?? AnimalType.OTHER].icon}
                  alt="Ícone de Porco"
                />
                <BatchTextTitle id="header-title">
                  <div>
                    <Title
                      id="title"
                      fontColor={
                        animalIcons[batch.animal ?? AnimalType.OTHER].color
                      }
                    >
                      {batch.name}
                    </Title>
                    <button onClick={() => setIsEditBatchModalVisible(true)}>
                      <img src={iconEdit} alt="Ícone Editar"></img>
                    </button>
                  </div>
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
                      <span id="data">{batch.creationDate}</span>
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

          <BatchTableAttribute id="portion">
            <TitleBatchTable backgroundcolor={palette.yellow}>
              <img src={iconPortion} alt="Ícone Rações" />
              <span id="title">Rações</span>
            </TitleBatchTable>
            {batch.portions.map(({ id, name, portionBatch }) => (
              <LineBatchTable key={id}>
                <span>{name}</span>
                <span>-</span>
                <span>{portionBatch}</span>
                <div>
                  <button>
                    <img src={iconEdit} alt="Ícone Editar"></img>
                  </button>
                  <button onClick={() => setIsDeleteModalVisible(true)}>
                    <img src={iconDelete} alt="Ícone Deletar"></img>
                  </button>
                </div>
              </LineBatchTable>
            ))}
            <ButtonAdd>
              <Button
                backgroundColor={palette.beige}
                onClick={() => setIsCreatePortionModalVisible(true)}
              >
                Adicionar
              </Button>
            </ButtonAdd>
            <Modal isVisible={isCreatePortionModalVisible}>
              <CreatePortionModal
                handleCloseModal={() => setIsCreatePortionModalVisible(false)}
              />
            </Modal>
          </BatchTableAttribute>

          <BatchTableAttribute id="vaccination">
            <TitleBatchTable backgroundcolor={palette.green}>
              <img src={iconVaccination} alt="Ícone Vacinas" />
              <span id="title">Vacinas</span>
            </TitleBatchTable>
            {batch.vaccinations.map(({ id, name, vaccinationBatch }) => (
              <LineBatchTable key={id}>
                <span>{name}</span>
                <span>-</span>
                <span>{vaccinationBatch}</span>
                <div>
                  <button>
                    <img src={iconEdit} alt="Ícone Editar"></img>
                  </button>
                  <button onClick={() => setIsDeleteModalVisible(true)}>
                    <img src={iconDelete} alt="Ícone Deletar"></img>
                  </button>
                </div>
              </LineBatchTable>
            ))}
            <ButtonAdd>
              <Button backgroundColor={palette.beige}>Adicionar</Button>
            </ButtonAdd>
          </BatchTableAttribute>

          <BatchTableAttribute id="slaughter">
            <TitleBatchTable backgroundcolor={palette.pink}>
              <img src={iconSlaughter} alt="Ícone Abate" />
              <span id="title">Abate</span>
            </TitleBatchTable>

            {batch.slaughter && (
              <div>
                <SlaughterData>
                  <div id="separate">
                    <BatchTextLine id="slaughter-data">
                      <span id="topic">Data do Abate: &nbsp;</span>
                      <span>{batch.slaughter.slaughterDate}</span>
                    </BatchTextLine>
                    <button
                      onClick={() => setIsCreateSlaughterModalVisible(true)}
                    >
                      <img src={iconEdit} alt="Ícone Editar" />
                    </button>
                  </div>
                  <BatchTextLine id="slaughter-data">
                    <span id="topic">Metodo de Abate: &nbsp;</span>
                    <span>{batch.slaughter.method}</span>
                  </BatchTextLine>
                  <div id="slaughter-data">
                    <span id="topic">Descrição: &nbsp;</span>
                    <span>{batch.slaughter.description}</span>
                  </div>
                </SlaughterData>
              </div>
            )}
          </BatchTableAttribute>
        </CardBatch>
      </main>
    </Container>
  );
};
