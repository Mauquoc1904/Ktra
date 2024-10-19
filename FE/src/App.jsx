import React, { useState, useEffect } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

const App = () => {
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);

  // Hàm để gọi API và lấy danh sách sinh viên
  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:3002/student');
      const data = await response.json();
      setStudents(data.data);  
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  // Gọi fetchStudents khi component được render lần đầu
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container">
      <h1>Student Management</h1>
      
      {/* Hiển thị form thêm sinh viên */}
      <StudentForm
        currentStudent={currentStudent}
        setCurrentStudent={setCurrentStudent}
        fetchStudents={fetchStudents}
      />
      
     <h1>Student list</h1>
      <StudentList
        students={students}
        onEdit={setCurrentStudent}
        fetchStudents={fetchStudents}
      />
    </div>
  );
};

export default App;
