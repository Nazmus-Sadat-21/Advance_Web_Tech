import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  getAllcourse(): string {
    return 'Get All Cources - From Services';
  }
  getCourseById(id: string): string {
    return `Get cource ID: ${id} - from services`;
  }
  createCourse() {
    return 'Create course from services';
  }
  updateCourse(id: string): string {
    return `Update course ${id} - from services`;
  }
  patchCourse(id: string): string {
    return `Patch course ${id} - from services`;
  }

  deleteCourse(id: string): string {
    return `Delete course ${id} - from services`;
  }
}
