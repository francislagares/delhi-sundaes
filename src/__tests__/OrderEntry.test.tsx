import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../__tests__/mocks/server';
import OrderEntry from '../pages/entry/OrderEntry';

describe('Error Handlers', () => {
  test('handles errors for scoops and toppings routes', async () => {
    server.resetHandlers(
      rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
        res(ctx.status(500));
      }),
      rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
        res(ctx.status(500));
      }),
    );

    render(<OrderEntry />);

    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(async () => {
      const alerts = await screen.findAllByRole('alert');
      expect(alerts).toHaveLength(2);
    });
  });
});
