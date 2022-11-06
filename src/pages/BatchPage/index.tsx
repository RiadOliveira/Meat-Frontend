import iconBatch from 'assets/img/iconBatch.svg';

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
import { UserHeader } from 'components/UserHeader';
import { routesAddresses } from 'routes/routesAddresses';
import { animalIcons } from 'assets/animalIcons/animalIcons';
import { Modal } from 'components/Modal';
import { CreateBatchModal } from 'pages/BatchPage/CreateBatchModal';
import { useCallback, useEffect, useState } from 'react';
import { createBatch, listBatchesFromCompany } from 'services/batchServices';
import { useAuth } from 'hooks/auth';
import { format } from 'date-fns';
import { BatchDataListedFromCompany } from 'types/entities/operations/batch/BatchDataListedFromCompany';
import { CreateBatchData } from 'types/entities/operations/batch/CreateBatchData';

export const BatchPage: React.FC = () => {
  const history = useHistory();
  const { userData } = useAuth();

  const [batches, setBatches] = useState<BatchDataListedFromCompany[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    listBatchesFromCompany(userData?.companyId as string).then(setBatches);
  }, [userData?.companyId]);

  const handleCreateNewBatch = useCallback(
    async (newBatchData: Omit<CreateBatchData, 'userId'>) => {
      const createdBatch = await createBatch({
        ...newBatchData,
        userId: userData!.id,
      });
      setBatches(previousBatches => [...previousBatches, createdBatch]);
    },
    [userData],
  );

  return (
    <Container>
      <Modal isVisible={isModalVisible}>
        <CreateBatchModal
          handleCreateNewBatch={handleCreateNewBatch}
          handleCloseModal={() => setIsModalVisible(false)}
          handleCancel={() => setIsModalVisible(false)}
        />
      </Modal>
      <UserHeader pageBatch />

      <main>
        <Button
          type="button"
          id="new-batch"
          onClick={() => setIsModalVisible(true)}
        >
          <img src={iconBatch} alt="Ícone Lote" />
          Novo Lote
        </Button>
        <CardsBatch>
          {batches.map(
            ({
              id,
              animal,
              name,
              race,
              city,
              state,
              updatedAt,
              creationDate,
              endingDate,
              userThatMadeLastChange: { name: nameUserThatMadeLastChange },
            }) => (
              <button
                key={id}
                onClick={() => history.push(routesAddresses.batch + `/${id}`)}
              >
                <BatchData>
                  <BatchCardsHeader>
                    <img
                      id="image"
                      src={animalIcons[animal].icon}
                      alt="Ícone Animal"
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
                      <span id="data">{nameUserThatMadeLastChange}</span>
                      <span id="data">
                        {format(new Date(updatedAt), 'dd/MM/yyyy')}
                      </span>
                    </BatchSpacingTextLine>
                  </BatchModification>

                  <BatchStatus>
                    <BatchSpacingTextLine>
                      <BatchTextLine>
                        <span id="subtitle">Inicio: &nbsp; </span>
                        <span id="data">{creationDate}</span>
                      </BatchTextLine>

                      {!!endingDate && (
                        <BatchTextLine>
                          <span id="subtitle">Fim: &nbsp; </span>
                          <span id="data">{endingDate}</span>
                        </BatchTextLine>
                      )}
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
