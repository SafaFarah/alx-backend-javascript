import { Subjects } from './Teacher';

export namespace Subjects {
  export class Subject {
    teacher: Subjects.Teacher;

    constructor(teacher: Subjects.Teacher) {
      this.teacher = teacher;
    }

    setTeacher(teacher: Subjects.Teacher): void {
      this.teacher = teacher;
    }
  }
}
