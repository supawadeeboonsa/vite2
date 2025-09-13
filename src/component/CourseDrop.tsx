import useCourseStore from "../store/CourseStore";

function CourseDrop() {
  const dropped = useCourseStore((s) => s.droppedCourses);

  if (dropped.length === 0) return <p>ยังไม่มีวิชาที่ถอน</p>;

  return (
    <div className="mt-4">
      <h3 className="font-bold mb-2">รายวิชาที่ถอน</h3>
      <ul>
        {dropped.map(c => (
          <li key={c.code}>{c.code} - {c.nameTH} ({c.grade})</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDrop;
