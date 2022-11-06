import { Header } from 'components/Header';
import QRCode from 'qrcode.react';
import { Container } from './styles';

export const QRCodePage: React.FC = () => {
  return (
    <Container>
      <Header hasArrow />
      <main>
        <QRCode id="qrCode" value="https://www.youtube.com" />
      </main>
    </Container>
  );
};
