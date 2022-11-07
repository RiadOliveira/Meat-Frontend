import QRCode from 'qrcode.react';

import { Button } from 'components/Button/styles';
import { Container } from './styles';
import { useCallback, useRef } from 'react';

interface QrCodeProps {
  redirectUrl: string;
}

export const QrCode: React.FC<QrCodeProps> = ({ redirectUrl }) => {
  const qrRef = useRef<HTMLDivElement>(null);

  const downloadQRCode = useCallback(() => {
    if (!qrRef.current) return;

    const canvas = qrRef.current.querySelector('canvas')!;
    const image = canvas.toDataURL('image/png');
    const anchor = document.createElement('a');

    anchor.href = image;
    anchor.download = `batchInfo.png`;
    anchor.click();
  }, []);

  return (
    <Container>
      <div className="qr-container">
        <div ref={qrRef}>
          <QRCode size={200} value={redirectUrl} />
        </div>

        <Button type="button" onClick={downloadQRCode}>
          Baixar o QR Code
        </Button>
      </div>
    </Container>
  );
};
