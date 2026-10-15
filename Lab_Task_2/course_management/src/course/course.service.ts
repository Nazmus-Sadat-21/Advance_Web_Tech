import { Injectable } from '@nestjs/common';
import { Express } from 'express';
import 'multer';
import { CreateCourse } from './dto/create-course.dto.js';
import { UpdateCourse } from './dto/update-course.dto.js';

@Injectable()
export class CourseService {
  getAllCourses() {
    return { message: "All courses fetched successfully", data: [] };
  }

  getCourseById(id: string) {
    return { message: "Course fetched successfully", id };
  }

  createCourse(dto: CreateCourse) {
    return { message: "Course created successfully", data: dto };
  }

  updateCourse(id: string, dto: UpdateCourse) {
    return { message: "Course updated successfully", id, data: dto };
  }

  patchCourse(id: string, dto: UpdateCourse) {
    const updatedFields = Object.keys(dto);
    return { message: "Course patched successfully", id, updatedFields };
  }

  deleteCourse(id: string) {
    return { message: "Course deleted successfully", id };
  }

  uploadCourseMaterial(id: string, file: Express.Multer.File) {
    return {
      message: "Material uploaded successfully",
      courseId: id,
      filename: file ? file.filename : '',
      path: file ? file.path : '',
    };
  }
}