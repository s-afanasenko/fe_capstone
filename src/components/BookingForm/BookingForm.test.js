import { render, screen, act } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import BookingForm from './BookingForm';
import availableTimesResucer from "../../reducers/availableTimesResucer"


test('should check if input is on the page', () => {
  render(<BookingForm />);

  const inputElement = screen.getByLabelText(/Choose date/i);
  expect(inputElement).toBeInTheDocument();
});

describe('MyForm Submission', () => {
  it('should not successfully submit with empty fields', async () => {
    const handleSubmitMock = jest.fn();
    render(<BookingForm onSubmit={handleSubmitMock} />);

    const submitButton = screen.getByRole('button');
    await userEvent.click(submitButton);
    expect(handleSubmitMock).toHaveBeenCalledTimes(0);
  });
});

describe('BookingForm HTML5 validation', () => {
 test('applies HTML5 validation attributes to all fields', async () => {
   await act(async () => {
     render(
       <BookingForm
         availableTimes={['17:00', '18:00']}
         onDateChange={jest.fn()}
         onSubmit={jest.fn()}
       />,
     );
   });
   const dateInput = screen.getByLabelText(/choose date/i);
   expect(dateInput).toHaveAttribute('type', 'date');
   expect(dateInput).toBeRequired();

   const timeSelect = screen.getByLabelText(/choose time/i);
   expect(timeSelect).toBeRequired();

   const guestsInput = screen.getByLabelText(/number of guests/i);
   expect(guestsInput).toHaveAttribute('type', 'number');
   expect(guestsInput).toBeRequired();
   expect(guestsInput).toHaveAttribute('min', '1');
   expect(guestsInput).toHaveAttribute('max', '10');

   const occasionSelect = screen.getByLabelText(/occasion/i);
   expect(occasionSelect).toBeRequired();
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
