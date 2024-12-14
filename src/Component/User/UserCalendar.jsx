import React, { useState, useEffect } from "react";
import { format, startOfWeek, addDays, isSameDay } from "date-fns";

const App = () => {
  const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek(new Date(), { weekStartsOn: 0 }));
  const [notes, setNotes] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Load notes from localStorage on initial render
  useEffect(() => {
    const savedNotes = localStorage.getItem("dailyNotes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem("dailyNotes", JSON.stringify(notes));
  }, [notes]);

  // Handle note updates for selected day
  const handleNoteChange = (e) => {
    setNotes({ ...notes, [selectedDate.toDateString()]: e.target.value });
  };

  // Render days of the week
  const renderDays = () => {
    return Array.from({ length: 7 }, (_, index) => {
      const day = addDays(currentWeekStart, index);
      const isSelected = isSameDay(day, selectedDate);

      return (
        <div
          key={index}
          className={`border p-4 rounded cursor-pointer transition duration-300 ${
            isSelected ? "bg-blue-300 text-white" : "hover:bg-gray-100"
          }`}
          onClick={() => setSelectedDate(day)}
        >
          <div className="font-bold text-center">{format(day, "EEE, MMM d")}</div>
          <div className="mt-2 text-sm text-gray-700">
            {notes[day.toDateString()] ? notes[day.toDateString()] : "No notes"}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      {/* Header for Week Navigation */}
      <div className="flex justify-between items-center mb-6">
        <button
          className="btn btn-sm btn-outline"
          onClick={() => setCurrentWeekStart(addDays(currentWeekStart, -7))}
        >
          Previous Week
        </button>
        <h2 className="text-xl font-bold">{format(currentWeekStart, "MMMM yyyy")}</h2>
        <button
          className="btn btn-sm btn-outline"
          onClick={() => setCurrentWeekStart(addDays(currentWeekStart, 7))}
        >
          Next Week
        </button>
      </div>

      {/* Weekly View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {renderDays()}
      </div>

      {/* Notes Section */}
      <div className="mt-6">
        <h3 className="text-lg font-bold">
          Notes for {selectedDate.toDateString()}
        </h3>
        <textarea
          className="w-full p-3 border rounded mt-2"
          rows="4"
          value={notes[selectedDate.toDateString()] || ""}
          onChange={handleNoteChange}
          placeholder="Write your notes here..."
        ></textarea>
      </div>
    </div>
  );
};

export default App;
