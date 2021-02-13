import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

    userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(confirmButton).toBeEnabled();

    userEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
  });

  test('popover responds to hover event', async () => {
    render(<SummaryForm />);

    // popover starts out hidden
    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i,
    );
    expect(nullPopover).not.toBeInTheDocument();

    // popover appears upon mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);

    const popover = screen.getByText(
      /no ice cream will actually be delivered/i,
    );
    expect(popover).toBeInTheDocument();

    // popover dissapears when we mouse out
    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() =>
      screen.getByText(/no ice cream will actually be delivered/i),
    );
  });
});
