import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface ModalProps {
  onOpenModal: () => void;
}

export function Header({ onOpenModal }: ModalProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button
          type="button"
          onClick={onOpenModal}
        >
          Nova transação
        </button>
      </Content>
    </Container>
  );
};