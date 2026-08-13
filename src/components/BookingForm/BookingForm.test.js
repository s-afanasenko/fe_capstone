import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import BookingForm from './BookingForm';
import availableTimesResucer from "../../reducers/availableTimesResucer"


test('should check if input is on the page', () => {
  render(<BookingForm />);

  const inputElement = screen.getByLabelText(/Choose date/i);
  expect(inputElement).toBeInTheDocument();
});

describe('MyForm Submission', () => {
  it('should successfully submit the form', async () => {
    const handleSubmitMock = jest.fn();
    render(<BookingForm onSubmit={handleSubmitMock} />);

    const submitButton = screen.getByRole('button');
    await userEvent.click(submitButton);
    expect(handleSubmitMock).toHaveBeenCalledTimes(1);
  });
});

describe('reducer', () => {
  test('initializeTimes returns the correct expected value', () => {
    const result = availableTimesResucer([], { type: 'initializeTimes' });
    expect(result).not.toHaveLength(0);
  });

  test('updateTimes returns the same value provided in state', () => {
    const state = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ];

    const date = new Date();

    const result = availableTimesResucer(state, {
      type: 'updateTimes',
      date: date,
    });
    expect(result).not.toHaveLength(0);
  });
});
