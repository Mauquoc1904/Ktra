import React from 'react';
import icon from '../assets/person.jpg'
const StudentList = ({ students, onEdit, fetchStudents }) => {
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3002/student/delete/${id}`, {
        method: 'DELETE',
      });
      fetchStudents();  // Cập nhật danh sách sau khi xóa
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <ul>
      {students.map((student) => (
        <li key={student._id}>
          <img 
            src={icon} 
            alt={student.name} 
            width="50" 
            height="50" 
          />
          <p>{student.name} - Age: {student.age}</p>
          <div>
            <button onClick={() => onEdit(student)}>Edit</button>
            <button className='btn-delete' onClick={() => handleDelete(student._id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
