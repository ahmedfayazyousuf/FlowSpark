import { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCheck, FaTimes } from 'react-icons/fa'; 

export default function Modal({ setIsModalOpen }) {
  const [theme] = useState('light');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [consent, setConsent] = useState(false);
  const [bookedTimes, setBookedTimes] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsModalOpen]);

  useEffect(() => {
    if (selectedDate) {
      fetch(`/api/bookings?date=${selectedDate.toISOString().split('T')[0]}`)
        .then(response => response.json())
        .then(data => {
          setBookedTimes(data.map(booking => booking.time));
        });
    }
  }, [selectedDate]);

  const timeslots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  function CustomDatePicker({ selectedDate, onDateChange, theme }) {
    const today = new Date();
    return (
      <DatePicker
        selected={selectedDate}
        onChange={(date) => onDateChange(date)}
        inline
        highlightDates={[today]}
        dayClassName={(date) =>
          date.toDateString() === today.toDateString()
            ? "today-highlight"
            : undefined
        }
        className={`react-datepicker-wrapper ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}
      />
    );
  }

  const handleBookingSubmit = async () => {

    if (!selectedDate || !selectedTime || !name || !email || !phone || !consent || !notes) {
      setStatus(null);
      setError('Please fill out all fields.');
      setTimeout(() => setError(null), 5000);
      return;
    }

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: selectedDate.toISOString(),
          time: selectedTime,
          fullName: name,
          email: email,
          phoneNumber: phone,
          callNotes: notes,
          consent: consent,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText);
      }

      const result = await res.json();
      console.log(result);

      setStatus('success');
      setError(null);
      setTimeout(() => setStatus(null), 5000);

      setSelectedDate(null);
      setSelectedTime('');
      setName('');
      setEmail('');
      setPhone('');
      setNotes('');
      setConsent(false);

    } catch (error) {
      console.error('Error submitting the form:', error);
      setStatus(null);
      setError(error.message === 'Server error' ? 'Server error, try again later' : 'Please fill out all fields.');
      setTimeout(() => setError(null), 5000);
    }
  };

  return (
    <div className={theme}>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div ref={modalRef} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-11/12 md:w-3/4 pb-6 pr-6 pl-6 max-h-[80vh] overflow-y-auto">
          <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 z-10 flex justify-between items-center border-b border-gray-200 dark:border-gray-600">
            <h2 className="text-xl font-bold text-black dark:text-white">Schedule a Call</h2>
            <button onClick={() => setIsModalOpen(false)} className="bg-red-100 text-red-500 px-4 py-2 rounded-md">X</button>
          </div>


          <div className="flex flex-col md:flex-row gap-8 mt-6">
            <div className="w-full md:w-1/2">
              <p className="text-sm mb-2 text-black dark:text-white">Select a Date</p>
              <div className="border border-gray-300 dark:border-gray-600 rounded-md p-4">
                <CustomDatePicker
                  selectedDate={selectedDate}
                  onDateChange={setSelectedDate}
                  theme={theme}
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <p className="text-sm mb-2 text-black dark:text-white">Select Time</p>
              <div className="grid grid-cols-2 gap-4">
                {timeslots.map(time => (
                  <button
                    key={time}
                    className={`py-2 px-4 rounded-full text-center ${
                      bookedTimes.includes(time)
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : selectedTime === time
                        ? 'bg-[#4bb4a6] text-white'
                        : 'border border-gray-300 dark:border-gray-600 text-black dark:text-white'
                    }`}
                    disabled={bookedTimes.includes(time)}
                    onClick={() => !bookedTimes.includes(time) && setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mt-6">
            <div className="w-full md:w-1/2">
              <label className="block text-black dark:text-white text-sm">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white-100 dark:bg-gray-800 text-black dark:text-white rounded-md mb-4"
              />
              <label className="block text-black dark:text-white text-sm">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white-100 dark:bg-gray-800 text-black dark:text-white rounded-md mb-4"
              />
              <label className="block text-black dark:text-white text-sm">Phone Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white-100 dark:bg-gray-800 text-black dark:text-white rounded-md mb-4"
              />
            </div>

            <div className="w-full md:w-1/2">
              <label className="block text-black dark:text-white text-sm">Call Notes</label>
              <textarea
                rows="3"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white-100 dark:bg-gray-800 text-black dark:text-white rounded-md mb-4"
              ></textarea>

              <div className="flex items-center gap-2 mb-4">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="w-4 h-4"
                />
                <label htmlFor="consent" className="text-gray-600 dark:text-gray-400 text-sm">
                  I consent to my details being processed in line with the{' '}
                  <a href="/privacy-policy" className="underline">Privacy Policy</a>.
                </label>
              </div>
            </div>
          </div>
          
          {(error || status) && (
            <div className="flex items-center mt-4 p-2 border rounded-md text-xs" style={{ borderColor: error ? 'red' : 'green', color: error ? 'red' : 'green', backgroundColor: 'transparent' }}>
              {error ? <FaTimes className="text-red-500 mr-2" /> : <FaCheck className="text-green-500 mr-2" />}
              <span>{error || 'Form Submitted Successfully'}</span>
            </div>
          )}

          <button onClick={handleBookingSubmit} className="w-full bg-[#4bb4a6] text-white py-2 rounded-full mt-6">Schedule My Call</button>

        </div>
      </div>
    </div>
  );
}
