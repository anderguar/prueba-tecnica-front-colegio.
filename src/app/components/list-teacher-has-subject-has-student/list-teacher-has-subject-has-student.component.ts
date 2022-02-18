import { Component, OnInit } from '@angular/core';
import { TeacherSubjectStudentService } from 'src/app/services/teacher-subject-student.service';
import { ITeacher } from 'src/app/model/ITeacher';
import { ITeacherSubjectStudent } from 'src/app/model/ITeacherSubjectStudent';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-list-teacher-has-subject-has-student',
  templateUrl: './list-teacher-has-subject-has-student.component.html',
  styleUrls: ['./list-teacher-has-subject-has-student.component.css']
})
export class ListTeacherHasSubjectHasStudentComponent implements OnInit {
  teachers: ITeacher[] = [];
  teacherSubjectStudents: ITeacherSubjectStudent[] = []; 
  displayedColumns: string[] = ['nameSubject','nameStudent'];
  dataSource = new MatTableDataSource<ITeacherSubjectStudent>(this.teacherSubjectStudents);
  
  constructor(private service: TeacherSubjectStudentService) { }

  ngOnInit(): void {
    this.getAllTeachers();
    //this.onWriterChange(3);
  }

  getAllTeachers() {
    this.service.getAllTeacher().subscribe(dataAllTeachers => {
      this.teachers = dataAllTeachers;
    });
  }

  onWriterChange(idTeacher: number) {
      let response = this.service.getTeacherHasSubjectHasStudent(idTeacher);
      response.subscribe(data => {
        this.dataSource.data = data as ITeacherSubjectStudent[]
        //console.log(data);
      });
  }

}


