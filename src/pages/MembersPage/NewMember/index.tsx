import { Container } from './styles';
import { Button } from 'components/Button/styles';
import { FormField } from 'components/FormField';
import newMember from 'assets/img/newMember.svg'

export const NewMember: React.FC = () => {
  return (
    <Container>
      <img src={newMember} alt="Icone novo membro" />
      <label>Cadastre um novo membro</label>
      <form>
        <FormField label="Nome" />
        <FormField label="Email" />
        <FormField label="Senha"/>
        <FormField label="Confirme sua senha"/>
      </form>
      <Button type="submit">Cadastrar</Button>
    </Container>
  );
};
