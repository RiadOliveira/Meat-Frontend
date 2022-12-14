/* eslint-disable react-hooks/rules-of-hooks */
import qrCodeIcon from 'assets/img/QRCodeIcon.svg';
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
  BatchOperationButtons,
} from './styles';
import { format } from 'date-fns';
import { UserHeader } from 'components/UserHeader';
import { animalIcons } from 'assets/animalIcons/animalIcons';
import { palette } from 'assets/colors/palette';
import { Button } from 'components/Button/styles';
import { Modal } from 'components/Modal';
import { DeleteModal } from 'components/DeleteModal';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { HandlePortionModal } from './HandlePortionModal';
import { HandleSlaughterModal } from './HandleSlaughterModal';
import { EditBatchModal } from './EditBatchModal';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { routesAddresses } from 'routes/routesAddresses';
import { IBatchWithRelatedEntities } from 'types/entities/IBatchWithRelatedEntities';
import {
  deleteBatch,
  findBatchById,
  updateBatch,
} from 'services/batchServices';
import { AnimalType } from 'types/AnimalType';
import { UpdateBatchData } from 'types/entities/operations/batch/UpdateBatchData';
import { useAuth } from 'hooks/auth';
import {
  createVaccination,
  deleteVaccination,
  updateVaccination,
} from 'services/vaccinationServices';
import {
  createPortion,
  deletePortion,
  updatePortion,
} from 'services/portionServices';
import { HandleVaccinationModal } from './HandleVaccinationModal';
import { CreatePortionData } from 'types/entities/operations/portion/CreatePortionData';
import { UpdatePortionData } from 'types/entities/operations/portion/UpdatePortionData';
import { CreateVaccinationData } from 'types/entities/operations/vaccination/CreateVaccinationData';
import { UpdateVaccinationData } from 'types/entities/operations/vaccination/UpdateVaccinationData';
import { CreateSlaughterData } from 'types/entities/operations/slaughter/CreateSlaughterData';
import { createSlaughter, updateSlaughter } from 'services/slaughterServices';
import { UpdateSlaughterData } from 'types/entities/operations/slaughter/UpdateSlaughterData';
import { CloseButton } from 'components/CloseButton';
import { QrCode } from 'components/QrCode';
import { frontendUrl } from 'constants/baseUrls';
import { userCanExecuteBatchHighPermissionAction } from 'utils/userCanExecuteBatchHighPermissionAction';

const DEFAULT_MODAL_DELETE_FUNCTION = async () => {
  null;
};

export const BatchDetails: React.FC = () => {
  const { batchId } = useParams() as { batchId: string };
  if (!batchId) return <Redirect to={routesAddresses.homePage} />;

  const history = useHistory();
  const { userData } = useAuth();
  const { id: userId, name: userName } = userData!;

  const [batch, setBatch] = useState<IBatchWithRelatedEntities | null>(null);
  const batchIsFinished = !!batch?.endingDate;

  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isQRCodeModalVisible, setIsQRCodeModalVisible] = useState(false);

  const [modalDeleteFunction, setModalDeleteFunction] = useState<
    () => Promise<void>
  >(() => DEFAULT_MODAL_DELETE_FUNCTION);
  const [isEditBatchModalVisible, setIsEditBatchModalVisible] = useState(false);

  const [isHandleVaccinationModalVisible, setIsHandleVaccinationModalVisible] =
    useState(false);
  const [selectedVaccinationIndex, setSelectedVaccinationIndex] = useState<
    number | undefined
  >(undefined);

  const [isHandlePortionModalVisible, setIsHandlePortionModalVisible] =
    useState(false);
  const [selectedPortionIndex, setSelectedPortionIndex] = useState<
    number | undefined
  >(undefined);

  const [isHandleSlaughterModalVisible, setIsHandleSlaughterModalVisible] =
    useState(false);

  useEffect(() => {
    findBatchById(batchId)
      .then(setBatch)
      .catch(() => history.push(routesAddresses.homePage));
  }, [batchId, history]);

  const userThatMadeLastChangeInformationForLoggedUser = useMemo(() => {
    return {
      idOfUserThatMadeLastChange: userId,
      userThatMadeLastChange: { name: userName },
    };
  }, [userId, userName]);

  const userHasBatchesHighPermissions = useMemo(() => {
    if (!userData) return false;
    return userCanExecuteBatchHighPermissionAction(userData);
  }, [userData]);

  const handleUpdateBatch = useCallback(
    async (updatedBatchData: Omit<UpdateBatchData, 'userId'>) => {
      const updatedBatch = await updateBatch(batchId, {
        ...updatedBatchData,
        userId,
      });

      setBatch(previousValue => ({
        ...previousValue!,
        ...updatedBatch,
        ...userThatMadeLastChangeInformationForLoggedUser,
      }));
      setIsEditBatchModalVisible(false);
    },
    [batchId, userId, userThatMadeLastChangeInformationForLoggedUser],
  );

  // Portions
  const showPortionModal = useCallback((indexToSelect?: number) => {
    setSelectedPortionIndex(indexToSelect);
    setIsHandlePortionModalVisible(true);
  }, []);

  const handleCreatePortion = useCallback(
    async (portionData: Omit<CreatePortionData, 'userId' | 'batchId'>) => {
      const createdPortion = await createPortion({
        ...portionData,
        userId,
        batchId,
      });

      setBatch(previousBatch => {
        if (previousBatch === null) return null;

        const { portions } = previousBatch;
        return {
          ...previousBatch,
          portions: [...portions, createdPortion],
          updatedAt: createdPortion.updatedAt,
          ...userThatMadeLastChangeInformationForLoggedUser,
        };
      });
    },
    [batchId, userId, userThatMadeLastChangeInformationForLoggedUser],
  );

  const handleUpdatePortion = useCallback(
    async (
      portionId: string,
      portionData: Omit<UpdatePortionData, 'userId'>,
    ) => {
      const updatedPortion = await updatePortion(portionId, {
        ...portionData,
        userId,
      });

      setBatch(previousBatch => {
        if (previousBatch === null) return null;

        const { portions } = previousBatch;
        const parsedPortions = portions.map(portion =>
          portion.id === portionId ? updatedPortion : portion,
        );

        return {
          ...previousBatch,
          portions: parsedPortions,
          updatedAt: updatedPortion.updatedAt,
          ...userThatMadeLastChangeInformationForLoggedUser,
        };
      });
    },
    [userId, userThatMadeLastChangeInformationForLoggedUser],
  );

  const handleDeletePortion = useCallback(
    async (portionId: string) => {
      await deletePortion(portionId, userId);

      setBatch(previousValue => {
        if (previousValue === null) return null;

        const { portions } = previousValue;
        const parsedPortions = portions.filter(({ id }) => id !== portionId);

        return {
          ...previousValue,
          portions: parsedPortions,
          updatedAt: new Date(),
          ...userThatMadeLastChangeInformationForLoggedUser,
        };
      });
      setIsDeleteModalVisible(false);
      setModalDeleteFunction(() => DEFAULT_MODAL_DELETE_FUNCTION);
    },
    [userId, userThatMadeLastChangeInformationForLoggedUser],
  );

  // Vaccinations
  const showVaccinationModal = useCallback((indexToSelect?: number) => {
    setSelectedVaccinationIndex(indexToSelect);
    setIsHandleVaccinationModalVisible(true);
  }, []);

  const handleCreateVaccination = useCallback(
    async (
      vaccinationData: Omit<CreateVaccinationData, 'userId' | 'batchId'>,
    ) => {
      const createdVaccination = await createVaccination({
        ...vaccinationData,
        userId,
        batchId,
      });

      setBatch(previousBatch => {
        if (previousBatch === null) return null;

        const { vaccinations } = previousBatch;
        return {
          ...previousBatch,
          vaccinations: [...vaccinations, createdVaccination],
          updatedAt: createdVaccination.updatedAt,
          ...userThatMadeLastChangeInformationForLoggedUser,
        };
      });
    },
    [batchId, userId, userThatMadeLastChangeInformationForLoggedUser],
  );

  const handleUpdateVaccination = useCallback(
    async (
      vaccinationId: string,
      vaccinationData: Omit<UpdateVaccinationData, 'userId'>,
    ) => {
      const updatedVaccination = await updateVaccination(vaccinationId, {
        ...vaccinationData,
        userId,
      });

      setBatch(previousBatch => {
        if (previousBatch === null) return null;

        const { vaccinations } = previousBatch;
        const parsedVaccinations = vaccinations.map(vaccination =>
          vaccination.id === vaccinationId ? updatedVaccination : vaccination,
        );

        return {
          ...previousBatch,
          vaccinations: parsedVaccinations,
          updatedAt: updatedVaccination.updatedAt,
          ...userThatMadeLastChangeInformationForLoggedUser,
        };
      });
    },
    [userId, userThatMadeLastChangeInformationForLoggedUser],
  );

  const handleDeleteVaccination = useCallback(
    async (vaccinationId: string) => {
      await deleteVaccination(vaccinationId, userId);

      setBatch(previousValue => {
        if (previousValue === null) return null;

        const { vaccinations } = previousValue;
        const parsedVaccinations = vaccinations.filter(
          ({ id }) => id !== vaccinationId,
        );

        return {
          ...previousValue,
          vaccinations: parsedVaccinations,
          updatedAt: new Date(),
          ...userThatMadeLastChangeInformationForLoggedUser,
        };
      });

      setIsDeleteModalVisible(false);
      setModalDeleteFunction(() => DEFAULT_MODAL_DELETE_FUNCTION);
    },
    [userId, userThatMadeLastChangeInformationForLoggedUser],
  );

  // Slaughter
  const handleCreateSlaughter = useCallback(
    async (slaughterData: Omit<CreateSlaughterData, 'userId' | 'batchId'>) => {
      const createdSlaughter = await createSlaughter({
        ...slaughterData,
        userId,
        batchId,
      });

      setBatch(previousBatch => {
        if (previousBatch === null) return null;

        return {
          ...previousBatch,
          slaughter: createdSlaughter,
          updatedAt: createdSlaughter.updatedAt,
          ...userThatMadeLastChangeInformationForLoggedUser,
        };
      });
    },
    [batchId, userId, userThatMadeLastChangeInformationForLoggedUser],
  );

  const handleUpdateSlaughter = useCallback(
    async (
      slaughterId: string,
      slaughterData: Omit<UpdateSlaughterData, 'userId'>,
    ) => {
      const updatedSlaughter = await updateSlaughter(slaughterId, {
        ...slaughterData,
        userId,
      });

      setBatch(previousBatch => {
        if (previousBatch === null) return null;
        return {
          ...previousBatch,
          slaughter: updatedSlaughter,
          updatedAt: updatedSlaughter.updatedAt,
          ...userThatMadeLastChangeInformationForLoggedUser,
        };
      });
    },
    [userId, userThatMadeLastChangeInformationForLoggedUser],
  );

  const handleFinishBatch = useCallback(async () => {
    if (batch === null) return;
    if (batch.portions.length === 0) {
      alert('Necess??rio informar ao menos uma ra????o!');
      return;
    }

    if (batch.vaccinations.length === 0) {
      alert('Necess??rio informar ao menos uma vacina????o!');
      return;
    }

    if (!batch.slaughter) {
      alert('Forma de abate n??o especificada!');
      return;
    }

    const { updatedAt, endingDate } = await updateBatch(batchId, {
      ...batch,
      endingDate: new Date(),
      userId,
    });

    setBatch(previousValue => {
      if (previousValue === null) return null;
      return {
        ...previousValue,
        updatedAt,
        endingDate,
        ...userThatMadeLastChangeInformationForLoggedUser,
      };
    });
    alert('Lote finalizado com sucesso!');
  }, [batch, batchId, userId, userThatMadeLastChangeInformationForLoggedUser]);

  const handleDeleteBatch = useCallback(async () => {
    await deleteBatch(batchId, userData!.id);
    history.push(routesAddresses.batch);
  }, [batchId, history, userData]);

  const handleShowDeleteModal = useCallback(
    (handleDeleteFunction: () => Promise<void>) => {
      setModalDeleteFunction(() => handleDeleteFunction);
      setIsDeleteModalVisible(true);
    },
    [],
  );

  if (batch === null) return null;
  return (
    <Container>
      <Modal isVisible={isQRCodeModalVisible}>
        <section id="modalQRCode">
          <CloseButton handleClose={() => setIsQRCodeModalVisible(false)} />
          <div id="header">
            <h2>Use o c??digo</h2>
            <span>
              <u>{batch.id}</u>
            </span>
            <h2>ou</h2>
            <h2>O QR Code</h2>
          </div>
          <QrCode redirectUrl={`${frontendUrl}/exposeBatch/${batchId}`} />
        </section>
      </Modal>

      <Modal isVisible={isDeleteModalVisible}>
        <DeleteModal
          handleDelete={modalDeleteFunction}
          handleCloseModal={() => setIsDeleteModalVisible(false)}
        />
      </Modal>

      <Modal isVisible={isEditBatchModalVisible}>
        <EditBatchModal
          batchToEdit={batch}
          handleUpdateBatch={handleUpdateBatch}
          handleCloseModal={() => setIsEditBatchModalVisible(false)}
        />
      </Modal>

      <Modal isVisible={isHandleVaccinationModalVisible}>
        <HandleVaccinationModal
          vaccinationToChange={
            selectedVaccinationIndex === undefined
              ? undefined
              : batch.vaccinations[selectedVaccinationIndex]
          }
          handleCreateVaccination={handleCreateVaccination}
          handleUpdateVaccination={handleUpdateVaccination}
          handleCloseModal={() => setIsHandleVaccinationModalVisible(false)}
        />
      </Modal>

      <Modal isVisible={isHandleSlaughterModalVisible}>
        <HandleSlaughterModal
          slaughter={batch.slaughter === null ? undefined : batch.slaughter}
          handleCreateSlaughter={handleCreateSlaughter}
          handleUpdateSlaughter={handleUpdateSlaughter}
          handleCloseModal={() => setIsHandleSlaughterModalVisible(false)}
        />
      </Modal>

      <Modal isVisible={isHandlePortionModalVisible}>
        <HandlePortionModal
          portionToChange={
            selectedPortionIndex === undefined
              ? undefined
              : batch.portions[selectedPortionIndex]
          }
          handleCreatePortion={handleCreatePortion}
          handleUpdatePortion={handleUpdatePortion}
          handleCloseModal={() => setIsHandlePortionModalVisible(false)}
        />
      </Modal>
      <UserHeader pageBatch />

      <main>
        {!batchIsFinished && userHasBatchesHighPermissions && (
          <Button id="finish-batch" type="button" onClick={handleFinishBatch}>
            <img src={iconBatch} alt="??cone Lote" />
            Finalizar Lote
          </Button>
        )}

        <CardBatch>
          <BatchDetailsHeader>
            <BatchData>
              <BatchCardsHeader>
                <img
                  id="image"
                  src={animalIcons[batch.animal ?? AnimalType.OTHER].icon}
                  alt="??cone animal"
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

                    <BatchOperationButtons>
                      {!batchIsFinished && (
                        <button
                          type="button"
                          onClick={() => setIsEditBatchModalVisible(true)}
                        >
                          <img src={iconEdit} alt="??cone Editar" />
                        </button>
                      )}

                      {userHasBatchesHighPermissions && (
                        <button
                          type="button"
                          onClick={() =>
                            handleShowDeleteModal(handleDeleteBatch)
                          }
                        >
                          <img src={iconDelete} alt="??cone Deletar" />
                        </button>
                      )}
                    </BatchOperationButtons>
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
                    <span id="subtitle">Ultima Altera????o:</span>
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
              <img src={iconPortion} alt="??cone Ra????es" />
              <span id="title">Ra????es</span>
            </TitleBatchTable>

            {batch.portions.map(({ id, name, portionBatch }, index) => (
              <LineBatchTable key={id}>
                <span>{name}</span>
                <span>-</span>
                <span>{portionBatch}</span>

                {!batchIsFinished && (
                  <div>
                    <button
                      type="button"
                      onClick={() => showPortionModal(index)}
                    >
                      <img src={iconEdit} alt="??cone Editar"></img>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        handleShowDeleteModal(async () =>
                          handleDeletePortion(id),
                        )
                      }
                    >
                      <img src={iconDelete} alt="??cone Deletar"></img>
                    </button>
                  </div>
                )}
              </LineBatchTable>
            ))}

            {!batchIsFinished && (
              <ButtonAdd>
                <Button
                  type="button"
                  backgroundColor={palette.beige}
                  onClick={() => showPortionModal()}
                >
                  Adicionar
                </Button>
              </ButtonAdd>
            )}
          </BatchTableAttribute>

          <BatchTableAttribute id="vaccination">
            <TitleBatchTable backgroundcolor={palette.green}>
              <img src={iconVaccination} alt="??cone Vacinas" />
              <span id="title">Vacinas</span>
            </TitleBatchTable>

            {batch.vaccinations.map(({ id, name, vaccinationBatch }, index) => (
              <LineBatchTable key={id}>
                <span>{name}</span>
                <span>-</span>
                <span>{vaccinationBatch}</span>

                {!batchIsFinished && (
                  <div>
                    <button
                      type="button"
                      onClick={() => showVaccinationModal(index)}
                    >
                      <img src={iconEdit} alt="??cone Editar" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        handleShowDeleteModal(async () =>
                          handleDeleteVaccination(id),
                        )
                      }
                    >
                      <img src={iconDelete} alt="??cone Deletar" />
                    </button>
                  </div>
                )}
              </LineBatchTable>
            ))}

            {!batchIsFinished && (
              <ButtonAdd>
                <Button
                  type="button"
                  backgroundColor={palette.beige}
                  onClick={() => showVaccinationModal()}
                >
                  Adicionar
                </Button>
              </ButtonAdd>
            )}
          </BatchTableAttribute>

          <BatchTableAttribute id="slaughter">
            <TitleBatchTable backgroundcolor={palette.pink}>
              <img src={iconSlaughter} alt="??cone Abate" />
              <span id="title">Abate</span>
            </TitleBatchTable>

            {batch.slaughter ? (
              <SlaughterData>
                <div id="separate">
                  <BatchTextLine id="slaughter-data">
                    <span id="topic">Data do Abate: &nbsp;</span>
                    <span>{batch.slaughter.slaughterDate}</span>
                  </BatchTextLine>

                  {!batchIsFinished && (
                    <button
                      type="button"
                      onClick={() => setIsHandleSlaughterModalVisible(true)}
                    >
                      <img src={iconEdit} alt="??cone Editar" />
                    </button>
                  )}
                </div>

                <BatchTextLine id="slaughter-data">
                  <span id="topic">Metodo de Abate: &nbsp;</span>
                  <span>{batch.slaughter.method}</span>
                </BatchTextLine>

                <div id="slaughter-data">
                  <span id="topic">Descri????o: &nbsp;</span>
                  <span>{batch.slaughter.description}</span>
                </div>
              </SlaughterData>
            ) : (
              <ButtonAdd>
                <Button
                  type="button"
                  backgroundColor={palette.beige}
                  onClick={() => setIsHandleSlaughterModalVisible(true)}
                >
                  Adicionar
                </Button>
              </ButtonAdd>
            )}
          </BatchTableAttribute>
        </CardBatch>

        <Button
          type="button"
          onClick={() => setIsQRCodeModalVisible(true)}
          id="generateQR"
        >
          <img src={qrCodeIcon} alt="QR code icon" />
          Gerar C??digo
        </Button>
      </main>
    </Container>
  );
};
