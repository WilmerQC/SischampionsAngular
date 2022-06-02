import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { School } from 'src/app/models/school.model';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-list-school',
  templateUrl: './list-school.component.html',
  styleUrls: ['./list-school.component.css']
})
export class ListSchoolComponent implements OnInit {

  schoolList:any=[]
  constructor(public schoolService:SchoolService, private router:Router) { }

  ngOnInit(): void {
    this.loadSchools();
  }

  loadSchools(){
    return this.schoolService.GetSchools().subscribe((data:{})=>{
      this.schoolList=data;
      console.log(data);
    });
  }

  deleteSchool(id:number){
    this.schoolService.deleteSchool(id).subscribe((response)=>{
      this.loadSchools();
    });
  }

  onEdit(client:School){
    console.log(client);
    this.schoolService.selectSchool=Object.assign({},client);
    this.router.navigate(["/add-school"]);
  }

}
