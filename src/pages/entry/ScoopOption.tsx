import Col from 'react-bootstrap/Col';
import { IScoops } from '../../interfaces/scoops/';

export const ScoopOption = ({ name, imagePath }: IScoops): JSX.Element => {
  return (
    <Col xs={12} sm={6} md={4} style={{ textAlign: 'center' }}>
      <img
        style={{ width: '75%' }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
      />
    </Col>
  );
};

export default ScoopOption;
