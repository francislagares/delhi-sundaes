import { render, screen } from '@testing-library/react';

import Options from '../pages/entry/Options';

describe('API Server', () => {
  test('displays image for each scoop option from server', async () => {
    render(<Options optionType='scoops' />);

    // find images
    const images = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(images).toHaveLength(2);

    // assert alt text
    const altText = images.map(image => image.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
  });
});
