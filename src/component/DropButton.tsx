import useCourseStore from "../store/CourseStore";

interface DropButtonProps {
  code: string;
}

function DropButton({ code }: DropButtonProps) {
  const dropCourse = useCourseStore((s) => s.dropCourse);

  const handleDrop = () => {
    const success = dropCourse(code);
    if (!success) alert("ไม่พบวิชานี้ในระบบ");
  };

  return (
    <button onClick={handleDrop} className="bg-red-500 text-white px-2 py-1 rounded">
      ถอน
    </button>
  );
}

export default DropButton;
