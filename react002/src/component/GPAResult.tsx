import useCourseStore from "../store/CourseStore";

const gradeToPoint: Record<string, number> = {
  "A": 4.0,
  "B+": 3.5,
  "B": 3.0,
  "C+": 2.5,
  "C": 2.0,
  "D+": 1.5,
  "D": 1.0,
  "F": 0,
};

function GPAResult() {
  const courses = useCourseStore((s) => s.courses);

  const totalCredits = courses.reduce((sum, c) => sum + c.credits, 0);
  const totalPoints = courses.reduce((sum, c) => sum + (gradeToPoint[c.grade] || 0) * c.credits, 0);

  const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";

  return (
    <div className="p-4 mt-4 border rounded">
      <h2 className="text-lg font-bold mb-2">GPA รวม</h2>
      <p>หน่วยกิตรวม: {totalCredits}</p>
      <p>GPA: {gpa}</p>
    </div>
  );
}

export default GPAResult;
