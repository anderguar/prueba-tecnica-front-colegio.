import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTeacherHasSubjectHasStudentComponent } from './list-teacher-has-subject-has-student.component';

describe('ListTeacherHasSubjectHasStudentComponent', () => {
  let component: ListTeacherHasSubjectHasStudentComponent;
  let fixture: ComponentFixture<ListTeacherHasSubjectHasStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTeacherHasSubjectHasStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTeacherHasSubjectHasStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
