// creat a student enrollmnet system using Javascript classes, implement two classes, student and Admission to manage student enrollment, course admission and enrollment traking. the student class should have methods for enrolling in course and displaying enrolled courses, while the admission class should handle student enrollments, course admision and the display of enrolled students your task is to implement these classes with clear and organied code. 

// Student class to manage individual student information and their enrolled courses
class Student {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.courses = []; 
    }
  
    enrollCourse(course) {
      if (!this.courses.includes(course)) {
        this.courses.push(course);
        console.log(`${this.name} has been enrolled in ${course}.`);
      } else {
        console.log(`${this.name} is already enrolled in ${course}.`);
      }
    }
  
    showCourses() {
      if (this.courses.length > 0) {
        console.log(`${this.name} is enrolled in the following courses: ${this.courses.join(", ")}`);
      } else {
        console.log(`${this.name} is not enrolled in any courses yet.`);
      }
    }
  }
  
  // Admission class to manage student enrollments and course assignments
  class Admission {
    constructor() {
      this.enrolledStudents = []; 
    }
  
    enrollStudent(student) {
      if (!this.enrolledStudents.includes(student)) {
        this.enrolledStudents.push(student);
        console.log(`${student.name} has been successfully enrolled.`);
      } else {
        console.log(`${student.name} is already enrolled.`);
      }
    }
  
    assignCourse(student, course) {
      if (this.enrolledStudents.includes(student)) {
        student.enrollCourse(course);
      } else {
        console.log(`Error: ${student.name} is not enrolled. Cannot assign course.`);
      }
    }
  
    showEnrolledStudents() {
      if (this.enrolledStudents.length > 0) {
        console.log("Enrolled Students:");
        this.enrolledStudents.forEach((student, index) => {
          console.log(`${index + 1}. Name: ${student.name}, Email: ${student.email}`);
        });
      } else {
        console.log("No students are enrolled yet.");
      }
    }
  }
  

  const admissionOffice = new Admission();
  
  const student1 = new Student("Mithun", "mithun@pw.live");
  const student2 = new Student("Farman", "farman@pw.live");
  
  admissionOffice.enrollStudent(student1);
  admissionOffice.enrollStudent(student2);
  
  admissionOffice.assignCourse(student1, "Full Stack Web Development");
  admissionOffice.assignCourse(student2, "Data Science Master");
  
  student1.showCourses();
  student2.showCourses();
  
  admissionOffice.showEnrolledStudents();
  