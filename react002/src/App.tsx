import React from 'react';
import CourseForm from './component/CourseForm';
import CourseList from './component/CourseList';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>ระบบถอนรายวิชา</h1>
      <CourseForm />
      <CourseList />
    </div>
  );
}

export default App;


