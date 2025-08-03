import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function BookingDatePicker({
  label = 'Select Dates',
  defaultDateRange = [null, null],
  wrapperClass = '',
  inputClass = '',
  disabled = false,
  onChange
}) {
  const [dateRange, setDateRange] = useState(defaultDateRange);
  const [startDate, endDate] = dateRange;

  useEffect(() => {
    if (startDate && endDate) {
      onChange?.({
        checkIn: startDate.toISOString(),
        checkOut: endDate.toISOString()
      });
    }
  }, [startDate, endDate, onChange]);

  return (
    <div className={`mb-6 w-full ${wrapperClass}`}>
      <label className="block text-lg font-semibold mb-2" htmlFor="date-picker">
        {label}
      </label>

      <DatePicker
        id="date-picker"
        aria-label={label}
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        minDate={new Date()}
        disabled={disabled}
        className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition duration-200 ${
          disabled ? 'bg-gray-100 cursor-not-allowed' : ''
        } ${inputClass}`}
        placeholderText="Check-in — Check-out"
      />

      {startDate && endDate && (
        <p className="mt-2 text-sm text-gray-600">
          Selected: <strong>{startDate.toLocaleDateString()}</strong> to{' '}
          <strong>{endDate.toLocaleDateString()}</strong>
        </p>
      )}
    </div>
  );
}

export default BookingDatePicker;
