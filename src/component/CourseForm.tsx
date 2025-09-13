import { useState } from "react";
import useCourseStore from "../store/CourseStore";

const AVAILABLE_COURSES = [
  { code: "10301211", nameTh: "คณิตศาสตร์สำหรับวิทยาการคอมพิวเตอร์", nameEng: "Mathematics for Computer Science" },
  { code: "10301222", nameTh: "โครงสร้างข้อมูลและอัลกอริทึม", nameEng: "Data Structures and Algorithms" },
  { code: "10301223", nameTh: "ฐานข้อมูลโครงสร้างเชิงสัมพันธ์", nameEng: "Relational Database" },
  { code: "10301225", nameTh: "วิศวกรรมซอฟต์แวร์", nameEng: "Software Engineering" },
  { code: "10301231", nameTh: "เว็บเทคโนโลยี", nameEng: "Web Technology" },
  { code: "10700313", nameTh: "ภาษาอังกฤษเชิงวิทยาศาสตร์และนวัตกรรม", nameEng: "English for Science and Innovation" },
];

export default function CourseForm() {
  const addCourse = useCourseStore((s) => s.addCourse);

  const [form, setForm] = useState({
    code: "",
    nameTh: "",
    nameEn: "",
    credit: 3,
    teacher: "",
    grade: "A",
  });

  const handleCodeChange = (code: string) => {
    const found = AVAILABLE_COURSES.find((c) => c.code === code);
    if (found) {
      setForm({ ...form, code: found.code, nameTh: found.nameTh, nameEn: found.nameEng });
    } else {
      setForm({ ...form, code, nameTh: "", nameEn: "" });
    }
  };

  const handleAdd = () => {
    if (!form.code || !form.nameTh) {
      alert("กรุณาเลือกวิชาก่อน");
      return;
    }
    addCourse({
      code: form.code,
      nameTH: form.nameTh,
      nameEN: form.nameEn,
      credits: form.credit,
      instructor: form.teacher,
      grade: form.grade,
    });
    setForm({ code: "", nameTh: "", nameEn: "", credit: 3, teacher: "", grade: "A" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center">เพิ่มรายวิชา</h2>

        {/* เลือกวิชา */}
        <select
          value={form.code}
          onChange={(e) => handleCodeChange(e.target.value)}
          className="border rounded p-2"
        >
          <option value="">-- เลือกวิชา --</option>
          {AVAILABLE_COURSES.map((c) => (
            <option key={c.code} value={c.code}>
              {c.code} - {c.nameTh}
            </option>
          ))}
        </select>

        {/* ชื่อวิชา */}
        <input
          placeholder="ชื่อวิชา (ไทย)"
          value={form.nameTh}
          readOnly
          className="border rounded p-2 bg-gray-100"
        />
        <input
          placeholder="ชื่อวิชา (Eng)"
          value={form.nameEn}
          readOnly
          className="border rounded p-2 bg-gray-100"
        />

        {/* ฟิลด์เพิ่มเติม */}
        <input
          type="number"
          placeholder="หน่วยกิต"
          value={form.credit}
          onChange={(e) => setForm({ ...form, credit: +e.target.value })}
          className="border rounded p-2"
        />
        <input
          placeholder="อาจารย์ผู้สอน"
          value={form.teacher}
          onChange={(e) => setForm({ ...form, teacher: e.target.value })}
          className="border rounded p-2"
        />
        <select
          value={form.grade}
          onChange={(e) => setForm({ ...form, grade: e.target.value })}
          className="border rounded p-2"
        >
          <option>A</option>
          <option>B+</option>
          <option>B</option>
          <option>C+</option>
          <option>C</option>
          <option>D+</option>
          <option>D</option>
          <option>F</option>
        </select>

        {/* ปุ่มเพิ่มวิชา */}
        <button
          onClick={handleAdd}
          disabled={!form.code}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          เพิ่มวิชา
        </button>
      </div>
    </div>
  );
}

