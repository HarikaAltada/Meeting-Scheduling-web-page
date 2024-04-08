import DemoComponent from "./components/DemoComponent";
import Register from "./components/register";
import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Confirm from "./components/confirm";
function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <DemoComponent
                onSelectDate={handleDateSelection}
                onTimeSelect={handleTimeSelect}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                selectedDate={selectedDate}
                selectedTime={selectedTime}
              />
            }
          />
          <Route
            path="/confirm"
            element={
              <Confirm
                selectedDate={selectedDate}
                selectedTime={selectedTime}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
