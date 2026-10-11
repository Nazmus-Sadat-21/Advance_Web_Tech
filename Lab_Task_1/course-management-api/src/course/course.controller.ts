import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service.js';


@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getAllcourse(){
    return this.courseService.getAllcourse()
  }

  @Get(":id")
  getCourseById(@Param("id") param:string){
    return this.courseService.getCourseById(param)
  }

  @Post()
  createCourse(){
    return this.courseService.createCourse()
  }

  @Put(":id")
  updateCourse(@Param("id") param:string){
    return this.courseService.updateCourse(param)
  }

  @Patch(":id")
  patchCourse(@Param("id") param:string){
    return this.courseService.patchCourse(param)
  }

  @Delete(":id")
  deleteCourse(@Param("id") param:string){
    return this.courseService.deleteCourse(param)
  }

}
