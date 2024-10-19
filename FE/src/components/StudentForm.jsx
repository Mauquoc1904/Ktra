import React, { useState, useEffect } from 'react';

const StudentForm = ({ currentStudent, setCurrentStudent, fetchStudents }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [avatar, setAvatar] = useState(null);


  useEffect(() => {
    if (currentStudent) {
      setName(currentStudent.name);
      setAge(currentStudent.age);
      setAvatar(null);
    } else {
      setName('');
      setAge('');
      setAvatar(null);
    }
  }, [currentStudent]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bc = {
      name: name,
      age: age
    }

    try {
      if (currentStudent && currentStudent._id) {
        await fetch(`http://localhost:3002/student/edit/${currentStudent._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(bc), 
        });
        setCurrentStudent(null)
      } else {
        await fetch('http://localhost:3002/student/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(bc), 
        });
        setName('')
        setAge('')
      }
      fetchStudents();
    } catch (error) {
      console.error('Failed to submit student data', error);
    }
  
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Student Name"
        required
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Student Age"
        required
      />
      <input
        type="file"
        onChange={(e) => setAvatar(e.target.files[0])}
      />
      <button type="submit">{currentStudent ? 'Update Student' : 'Add Student'}</button>
    </form>
  );
};

export default StudentForm;
