import { Container } from './styles';
import { Button } from 'components/Button/styles';
import iconEditWhite from 'assets/img/iconEditWhite.svg';
import iconUser from 'assets/img/iconUser.svg';
import thrashWhite from 'assets/img/thrashWhite.svg';
import x from 'assets/img/x.svg';
import { FormField } from 'components/FormField';
import { CloseButton } from 'components/CloseButton';

export const EditMember: React.FC = () => {
  return (
    <Container>
      <CloseButton />
      <img src={iconUser} alt="Ícone novo membro" />
      <label>Alterar dados</label>
      <form>
        <FormField label="Novo nome" />
        <FormField label="Novo email" />
        <FormField label="Nova senha" />
        <FormField label="Confirme sua nova senha" />
      </form>
      <Button type="submit" id="updateMemberInfo">
        <img src={iconEditWhite} alt="Ícone alterar" />
        Alterar
      </Button>
      <Button type="submit" id="deleteMemberConfirm">
        <img src={thrashWhite} alt="Ícone alterar" />
        Excluir conta
      </Button>
    </Container>
  );
};
