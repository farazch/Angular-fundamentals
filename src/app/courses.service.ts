
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



export class CoursesService{
    private _url: string = "/assets/data/employees.json";

    constructor(){


    }

    getCourses(){
        return ["OOP","OS","DB"];
    }

    getCoursesStruct(){
        return {"Blogs": [
            {"id":1,"title":"Angular"},
            {"id":2,"title":"React"},

        ]}
    }

    

}