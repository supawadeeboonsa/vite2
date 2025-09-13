import useCourseStore from "../store/CourseStore";
import DropButton from "./DropButton";

export default function CourseList() {
  const courses = useCourseStore((s) => s.courses);

  if (courses.length === 0)
    return <p className="text-center mt-6 text-gray-500 italic">ยังไม่มีรายวิชา</p>;

  return (
    <div className="mt-8 w-full max-w-5xl mx-auto px-4">
      <h3 className="text-xl font-bold mb-6 text-center text-blue-700">รายวิชาที่ลงทะเบียน</h3>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-blue-50">
            <tr>
              {["รหัส", "ชื่อวิชา (ไทย)", "ชื่อวิชา (Eng)", "หน่วยกิต", "อาจารย์", "เกรด", "ถอน"].map((title) => (
                <th
                  key={title}
                  className="border px-4 py-2 text-center text-gray-700 font-medium"
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {courses.map((c) => (
              <tr key={c.code} className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition-colors">
                <td className="border px-4 py-2">{c.code}</td>
                <td className="border px-4 py-2">{c.nameTH}</td>
                <td className="border px-4 py-2">{c.nameEN}</td>
                <td className="border px-4 py-2">{c.credits}</td>
                <td className="border px-4 py-2">{c.instructor}</td>
                <td className="border px-4 py-2">{c.grade}</td>
                <td className="border px-4 py-2">
                  <DropButton code={c.code} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


