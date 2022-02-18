import { TestBed } from '@angular/core/testing';

import { TeacherSubjectStudentService } from './teacher-subject-student.service';

describe('TeacherSubjectStudentService', () => {
  let service: TeacherSubjectStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherSubjectStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
