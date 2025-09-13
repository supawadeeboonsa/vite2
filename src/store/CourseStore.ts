import { create } from "zustand";

export interface Course {
  code: string;
  nameTH: string;
  nameEN: string;
  credits: number;
  instructor: string;
  grade: string;
}

interface CourseState {
  courses: Course[];
  droppedCourses: Course[];
  addCourse: (course: Course) => void;
  dropCourse: (code: string) => boolean;
  calculateGPA: () => number;
}

const gradePoint: Record<string, number> = {
  "A": 4,
  "B+": 3.5,
  "B": 3,
  "C+": 2.5,
  "C": 2,
  "D+": 1.5,
  "D": 1,
  "F": 0,
};

const useCourseStore = create<CourseState>((set, get) => ({
  courses: [],
  droppedCourses: [],

  addCourse: (course) => {
    const exists = get().courses.find(c => c.code === course.code);
    if (!exists) {
      set({ courses: [...get().courses, course] });
    }
  },

  dropCourse: (code) => {
    const course = get().courses.find(c => c.code === code);
    if (!course) return false;
    set({
      courses: get().courses.filter(c => c.code !== code),
      droppedCourses: [...get().droppedCourses, course],
    });
    return true;
  },

  calculateGPA: () => {
    const courses = get().courses;
    if (courses.length === 0) return 0;
    const totalCredits = courses.reduce((acc, c) => acc + c.credits, 0);
    const totalPoints = courses.reduce((acc, c) => acc + (gradePoint[c.grade] * c.credits), 0);
    return totalPoints / totalCredits;
  },
}));

export default useCourseStore;
