import React, { useState } from "react";
import { Calendar } from "@progress/kendo-react-dateinputs";
import { Link } from "react-router-dom";
import "../styles.css";
const times = [
  "08:00 - 10:00",
  "10:00 - 12:00",
  "12:00 - 14:00",
  "14:00 - 16:00",
  "16:00 - 18:00",
  "18:00 - 20:00",
];

const BookDrivingSlot = ({ onSelectDate, onTimeSelect }) => {
  const [bookingDate, setBookingDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [toggleState, setToggleState] = useState({});
  const [showTimeSlots, setShowTimeSlots] = useState(false);

  const onDateChange = (e) => {
    setSelectedTimeSlot(null);
    setBookingDate(e.value);
    onSelectDate(e.value);
    setShowTimeSlots(true);
  };

  const toggleNextButton = (time) => {
    setToggleState((prevState) => ({
      ...prevState,
      [time]: !prevState[time],
    }));
  };
  const handleTimeSelect = (time) => {
    setSelectedTimeSlot(time);
    onTimeSelect(time);
  };
  return (
    <div className="k-my-6">
      <div className="k-flex k-display-flex k-mb-2">
        <Calendar value={bookingDate} onChange={onDateChange} />
        {bookingDate && (
          <div className="k-ml-4 k-display-flex k-flex-col overflow-y-auto max-h-[300px]  scrollbar-custom">
            {times.map((time) => {
              return (
                <div className="flex flex-wrap m-2">
                  <button
                    key={time}
                    className={`w-full sm:w-auto px-4 py-2 rounded-lg ${
                      selectedTimeSlot === time && toggleState[time]
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 text-gray-700"
                    }`}
                    onClick={() => {
                      {
                        handleTimeSelect(time);
                        setSelectedTimeSlot(time);
                        toggleNextButton(time);
                      }
                    }}
                  >
                    {time}
                  </button>
                  {selectedTimeSlot && (
                    <Link to="/register">
                      {selectedTimeSlot === time && toggleState[time] && (
                        <button
                          className="w-full sm:w-auto mt-2 sm:mt-0 ml-0 sm:ml-2 px-4 py-2 rounded-lg bg-blue-500 text-white"
                          key={{ time }}
                        >
                          Next
                        </button>
                      )}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {bookingDate && selectedTimeSlot ? (
        <div>
          Selected slot: {bookingDate.toDateString()} at {selectedTimeSlot}
        </div>
      ) : null}
    </div>
  );
};

export default BookDrivingSlot;
