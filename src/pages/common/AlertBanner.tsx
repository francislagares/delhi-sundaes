import Alert from 'react-bootstrap/Alert';

export const AlertBanner = ({
  message,
  variant,
}: {
  message: string;
  variant: string;
}): JSX.Element => {
  const alertMessage =
    message || 'An unexpected error occurred. Please try again later.';
  const alertVariant = variant || 'danger';

  return (
    <Alert variant={alertVariant} style={{ backgroundColor: 'red' }}>
      {alertMessage}
    </Alert>
  );
};

export default AlertBanner;
