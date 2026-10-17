# UniversitySystemAPI — Lab Task 03

NestJS project demonstrating:
- Intra-module dependency injection: `CourseController` -> `CourseService`
- Inter-module dependency injection: `EnrollmentService` -> `CourseService`
- Circular dependency injection: `EnrollmentService` <-> `NotificationService` via `forwardRef()`

## Run

```bash
npm install
npm run start:dev
```

API runs at `http://localhost:3000`.

## Postman tests

### Course
- `GET http://localhost:3000/course`
- `GET http://localhost:3000/course/101`
- `POST http://localhost:3000/course`

```json
{ "name": "NestJS", "code": "CS301" }
```

### Enrollment
- `GET http://localhost:3000/enrollment`
- `POST http://localhost:3000/enrollment`

```json
{ "studentName": "John Doe", "courseId": "101" }
```

### Notification
- `POST http://localhost:3000/notification/send`

```json
{ "studentName": "John Doe", "message": "Welcome!" }
```

- `POST http://localhost:3000/notification/check`

```json
{ "studentName": "John Doe", "courseId": "101" }
```

This is a teaching/demo API. It returns example objects and does not persist courses or enrollments to a database.
