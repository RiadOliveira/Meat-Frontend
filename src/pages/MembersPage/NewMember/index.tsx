import { Container } from './styles';
import { Button } from 'components/Button/styles';
import { FormField } from 'components/FormField';
import newMember from 'assets/img/newMember.svg';
import { FormSelect } from 'components/FormField/FormSelect/styles';
import { CloseButton } from 'components/CloseButton';

export const NewMember: React.FC = () => {
  return (
    <Container>
      <CloseButton />
      <img src={newMember} alt="Icone novo membro" />
      <label>Cadastre um novo membro</label>
      <form>
        <FormField label="Nome" />
        <FormField label="Email" />
        <FormSelect>
          <select>
            <option>Veterinário</option>
            <option>Nutricionista</option>
            <option>Produtor</option>
            <label>Cargo</label>
          </select>
        </FormSelect>
        <FormField label="Senha" />
        <FormField label="Confirme sua senha" />
      </form>
      <Button type="submit">Cadastrar</Button>
    </Container>
  );
};
