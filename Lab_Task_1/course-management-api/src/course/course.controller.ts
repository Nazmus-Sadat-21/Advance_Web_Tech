import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service.js';


@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getAllcourse(){
    return "Get all courses"
  }

  @Get(":id")
  getCourseById(@Param("id") param:string){
    return `Get Course By ID ${param}`
  }

  @Post()
  createCourse(){
    return "Create new course"
  }

  @Put(":id")
  updateCourse(@Param("id") param:string){
    return `ID: ${param} Updated Full Course`
  }

  @Patch(":id")
  patchCourse(@Param("id") param:string){
    return `ID: ${param} updated partial course`
  }

  @Delete(":id")
  deleteCourse(@Param("id") param:string){
    return `ID: ${param} course deleted`
  }

}
