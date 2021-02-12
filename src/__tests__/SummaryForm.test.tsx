import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SummaryForm from '../pages/summary/SummaryForm';

describe('SummaryForm page', () => {
  test('Checkbox is unchecked and button is disabled by default', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole('button', {
      name: /confirm order/i,
    });

    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
  });

  test('Checkbox enables button on first click and disables on second click', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole('button', {
      name: /confirm order/i,
    });

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(confirmButton).toBeEnabled();

    fireEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
  });
});
