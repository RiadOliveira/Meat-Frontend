import iconMember from 'assets/img/iconMember.svg';
import iconEdit from 'assets/img/iconEdit.svg';
import iconUser from 'assets/img/iconUser.svg';

import {
  Container,
  MembersHeader,
  MembersLine,
  MembersLineText,
  MembersTable,
} from './styles';
import { UserHeader } from 'components/UserHeader';
import { Button } from 'components/Button/styles';
import { Modal } from 'components/Modal';
import { DeleteModal } from 'components/DeleteModal';
import { HandleMemberModal } from './HandleMemberModal';
import { useCallback, useEffect, useState } from 'react';
import { UserWithoutPassword } from 'types/entities/UserWithoutPassword';
import {
  createMember,
  findCompanyById,
  listMembersFromCompany,
} from 'services/companiesServices';
import { useAuth } from 'hooks/auth';
import { getBrazilianAccountType } from 'utils/getBrazilianAccountType';
import { ICompany } from 'types/entities/ICompany';
import { AccountType } from 'types/AccountType';
import { IUser } from 'types/entities/IUser';
import { UpdateUserData } from 'types/entities/operations/user/UpdateUserData';
import { updateUser } from 'services/userServices';

export const MembersPage: React.FC = () => {
  const { userData } = useAuth();

  const [selectedMemberIndex, setSelectedMemberIndex] = useState<number | null>(
    null,
  );
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isHandleMemberModalVisible, setIsHandleMemberModalVisible] =
    useState(false);

  const [company, setCompany] = useState<ICompany | null>(null);
  const [companyMembers, setCompanyMembers] = useState<UserWithoutPassword[]>(
    [],
  );

  useEffect(() => {
    findCompanyById(userData!.companyId).then(setCompany);
  }, [userData]);

  useEffect(() => {
    listMembersFromCompany(userData!.companyId).then(findedMembers =>
      setCompanyMembers(findedMembers),
    );
  }, [userData]);

  const handleCreateMember = useCallback(
    async (memberData: IUser) => {
      const createdMember = await createMember({
        producerId: userData!.id,
        ...memberData,
      });

      setCompanyMembers(previousMembers => [...previousMembers, createdMember]);
    },
    [userData],
  );

  const handleUpdateMember = useCallback(
    async (memberId: string, updatedMemberData: UpdateUserData) => {
      const updatedMember = await updateUser(memberId, updatedMemberData);

      setCompanyMembers(previousMembers =>
        previousMembers.map(member =>
          member.id === memberId ? updatedMember : member,
        ),
      );
      setSelectedMemberIndex(null);
    },
    [],
  );

  return (
    <Container>
      <Modal isVisible={isDeleteModalVisible}>
        <DeleteModal handleCloseModal={() => setIsDeleteModalVisible(false)} />
      </Modal>

      <Modal isVisible={isHandleMemberModalVisible}>
        <HandleMemberModal
          handleCreateMember={handleCreateMember}
          handleUpdateMember={handleUpdateMember}
          memberToChange={
            selectedMemberIndex === null
              ? undefined
              : companyMembers[selectedMemberIndex]
          }
          handleCloseModal={() => setIsHandleMemberModalVisible(false)}
        />
      </Modal>
      <UserHeader />

      <main>
        <Button
          id="new-member"
          type="button"
          onClick={() => {
            setSelectedMemberIndex(null);
            setIsHandleMemberModalVisible(true);
          }}
        >
          <img src={iconMember} alt="Ícone Membro" />
          Novo Membro
        </Button>
        <MembersTable>
          <MembersHeader>
            <span id="companyName">{company?.name}</span>
          </MembersHeader>

          {companyMembers.map(({ id, name, accountType }, index) => (
            <MembersLine
              key={id}
              isProducer={accountType === AccountType.PRODUCER}
            >
              <div>
                <img src={iconUser} alt="Ícone do usuario"></img>
                <MembersLineText>
                  <span id="name">{name}</span>
                  <span id="accountType">
                    {getBrazilianAccountType(accountType)}
                  </span>
                </MembersLineText>
              </div>

              {accountType !== AccountType.PRODUCER &&
                userData?.accountType === AccountType.PRODUCER && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedMemberIndex(index);
                      setIsHandleMemberModalVisible(true);
                    }}
                  >
                    <img src={iconEdit} alt="Ícone Editar" />
                  </button>
                )}
            </MembersLine>
          ))}
        </MembersTable>
      </main>
    </Container>
  );
};
