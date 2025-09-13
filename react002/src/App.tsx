import './App.css';
import CourseForm from './component/CourseForm.tsx';
import CourseList from './component/CourseList.tsx';


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


