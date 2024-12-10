import React, { useState, useEffect } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameDay } from "date-fns";

const UserCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [notes, setNotes] = useState({});

  // Load notes from local storage on initial render
  useEffect(() => {
    const savedNotes = localStorage.getItem("calendarNotes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save notes to local storage whenever notes are updated
  useEffect(() => {
    localStorage.setItem("calendarNotes", JSON.stringify(notes));
  }, [notes]);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const handleNoteChange = (e) => {
    const newNotes = { ...notes, [selectedDate.toDateString()]: e.target.value };
    setNotes(newNotes);
  };

  const renderCells = () => {
    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, "d");
        const dayKey = day.toDateString();
        days.push(
          <div
            key={day}
            className={`border p-4 text-center cursor-pointer ${
              isSameDay(day, selectedDate) ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setSelectedDate(day)}
          >
            <div>{formattedDate}</div>
            <div className="text-sm text-gray-500">
              {notes[dayKey] && <span>📝</span>}
            </div>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={day} className="grid grid-cols-7 gap-1">
          {days}
        </div>
      );
      days = [];
    }
    return rows;
  };

  return (
    <div className="container mx-auto p-4 mt-20 shadow-lg transition duration-300 ease-in-out">
      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-blue-200 p-2 rounded"
          onClick={() => setCurrentDate(addDays(currentDate, -30))}
        >
          Previous
        </button>
        <h2 className="text-xl font-bold">{format(currentDate, "MMMM yyyy")}</h2>
        <button
          className="bg-blue-200 p-2 rounded"
          onClick={() => setCurrentDate(addDays(currentDate, 30))}
        >
          Next
        </button>
      </div>

      {/* Weekday header, responsive for small screens */}
      <div className="grid grid-cols-7 gap-1 text-center font-bold sm:grid-cols-7 md:grid-cols-7 lg:grid-cols-7 xl:grid-cols-7">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="p-2 text-xs sm:text-base md:text-lg">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid cells */}
      {renderCells()}

      {/* Notes section */}
      <div className="mt-4">
        <h3 className="text-lg font-bold">Notes for {selectedDate.toDateString()}</h3>
        <textarea
          className="w-full p-2 mt-2 transition duration-300 ease-in-out shadow-lg resize-none"
          rows="3"
          value={notes[selectedDate.toDateString()] || ""}
          onChange={handleNoteChange}
        />
      </div>
    </div>
  );
};

export default UserCalendar;
