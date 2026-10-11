import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service.js';


@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getAllcourse(){
    return "Get all courses"
  }

  @Get(":id")
  getCourseById(){
    return "Get Course By ID"
  }

  @Post()
  createCourse(){
    return "Create new course"
  }

  @Put(":id")
  updateCourse(){
    return "Update Full Course"
  }

  @Patch(":id")
  patchCourse(){
    return "Update partial course"
  }

  @Delete(":id")
  deleteCourse(){
    return "Delete course"
  }

}
