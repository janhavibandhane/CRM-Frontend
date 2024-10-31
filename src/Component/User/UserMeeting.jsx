import { useState } from "react";

function UserMeeting() {
  const [savedMeetings, setSavedMeetings] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    meetingText: "",
    meetingDate: "",
    meetingTime: "",
    meetingPeriod: "AM",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addMeet = () => {
    setSavedMeetings([...savedMeetings, formData]);
    setFormData({
      meetingText: "",
      meetingDate: "",
      meetingTime: "",
      meetingPeriod: "AM",
    });
    setShowForm(false);
  };

  function createMeeting() {
    setShowForm(true);
  }

  return (
    <>
      <div className="flex flex-col items-center mt-16 p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Meeting Scheduler</h1>
        
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg mb-4"
          onClick={createMeeting}
        >
          Create Meeting
        </button>

        {showForm && (
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">New Meeting Details</h2>
            <input
              type="text"
              name="meetingText"
              placeholder="Enter meeting details"
              value={formData.meetingText}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring focus:ring-blue-200"
            />
            <input
              type="date"
              name="meetingDate"
              value={formData.meetingDate}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring focus:ring-blue-200"
            />
            <div className="flex space-x-4 mb-4">
              <input
                type="time"
                name="meetingTime"
                value={formData.meetingTime}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              />
              <select
                name="meetingPeriod"
                value={formData.meetingPeriod}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
            <button
              onClick={addMeet}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-700 transition duration-300 ease-in-out shadow-md"
            >
              Add Meeting
            </button>
          </div>
        )}

        <div className="w-full max-w-lg space-y-4">
          {savedMeetings.map((meeting, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <div>
                <div className="text-lg font-medium text-gray-800">{meeting.meetingText}</div>
                <div className="text-sm text-gray-600">
                  {meeting.meetingDate} at {meeting.meetingTime} {meeting.meetingPeriod}
                </div>
              </div>
              <button
                onClick={() => setSavedMeetings(savedMeetings.filter((_, i) => i !== index))}
                className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out shadow-md"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserMeeting;
