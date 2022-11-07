import * as React from 'react';
import QRCode from 'qrcode.react';
import {Container} from './styles.ts';
import { Button } from 'components/Button/styles';

export default function QrCode() {
  const qrRef = React.useRef();

  const downloadQRCode = (evt: React.FormEvent) => {
    evt.preventDefault();
    // @ts-ignore
    let canvas = qrRef.current.querySelector('canvas');
    let image = canvas.toDataURL('image/png');
    let anchor = document.createElement('a');
    anchor.href = image;
    anchor.download = `batchInfo.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const qrCode = (
    <QRCode
      id="qrCodeElToRender"
      size={200}
      value="AQUI VEM O VALOR DO QR CODE"
      bgColor="white"
      fgColor={"#141926"}
      level="H"
    />
  );

  return (
    <Container>
    <div className="qr-container">
      <div className="qr-container__qr-code" ref={qrRef}>
        {qrCode}
      </div>
      <form onSubmit={downloadQRCode} className="qr-container__form">
        <Button>Baixar o QR Code</Button>
      </form>
    </div>
    </Container>
  );
}
