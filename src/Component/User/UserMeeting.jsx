import { useState } from "react";

function UserMeeting() {

  const [savedMeetings, setSavedMeetings] = useState([]);
  const [showForm, setShowForm] = useState(false); // State to control form visibility
  const [formData, setFormData] = useState({
    meetingText: "",
    meetingDate: "",
    meetingTime: "",
    meetingPeriod: "AM"
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
      meetingPeriod: "AM"
    });
    setShowForm(false); // Hide the form after adding a meeting
  };

  function createMeeting(){
    setShowForm(true);
  }

  return (
    <>
      <div className='flex w-full justify-center items-center mt-20'>
        <div className='min-h-screen flex mt-10'>
          <div className='p-6 rounded w-full'>
        

                <button className="btn btn-primary text-center" onClick={createMeeting} >
                    Create Meeting
                </button>
            
            {showForm && (
              <div className='mb-4'>
                <input
                  type='text'
                  name='meetingText'
                  placeholder='Enter meeting details'
                  value={formData.meetingText}
                  onChange={handleChange}
                  className='w-full p-2 border border-gray-300 rounded mb-2'
                />
                <input
                  type='date'
                  name='meetingDate'
                  value={formData.meetingDate}
                  onChange={handleChange}
                  className='w-full p-2 border border-gray-300 rounded mb-2'
                />
                <div className='flex space-x-2 mb-4'>
                  <input
                    type='time'
                    name='meetingTime'
                    value={formData.meetingTime}
                    onChange={handleChange}
                    className='w-full p-2 border border-gray-300 rounded'
                  />
                  <select
                    name='meetingPeriod'
                    value={formData.meetingPeriod}
                    onChange={handleChange}
                    className='p-2 border border-gray-300 rounded'
                  >
                    <option value='AM'>AM</option>
                    <option value='PM'>PM</option>
                  </select>
                </div>
                <button
                  onClick={addMeet}
                  className='bg-[#1d3d6d] text-white p-2 rounded w-full'
                >
                  Add Meeting
                </button>
              </div>
            )}

            <div className='mt-4'>

              {savedMeetings.map((meeting, index) => (
                <>
               
                <div key={index} className='bg-gray-200 p-2 rounded mt-2 flex justify-between items-center'>
                  <div className='md:w-[40rem] w-[15rem] flex justify-between'>
                    <div>
                      <div className='font-semibold'>{meeting.meetingText}</div>
                      <div className='text-sm text-gray-600'>
                        {meeting.meetingDate} at {meeting.meetingTime} {meeting.meetingPeriod}
                      </div>
                    </div>
                    <button
                      onClick={() => setSavedMeetings(savedMeetings.filter((_, i) => i !== index))}
                      className='bg-red-500 text-white p-1 rounded'
                    >
                      Delete
                    </button>
                  </div>
                </div>
                </>
              ))}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserMeeting;
