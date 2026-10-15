import { PartialType } from "@nestjs/mapped-types";
import { CreateCourse } from "./create-course.dto.js";


export class UpdateCourse extends PartialType(CreateCourse) {}