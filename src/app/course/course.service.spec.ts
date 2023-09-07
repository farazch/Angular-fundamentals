import { TestBed } from "@angular/core/testing";
import { CourseService } from "./course.service";

describe("course Service",()=>{

    let service : CourseService;

    beforeEach(()=>{

        TestBed.configureTestingModule({

            //providers: [{ provide: CourseService }],

        });
        service = TestBed.inject(CourseService);

    });

    it('should create course service',() => {
        expect(service).toBeTruthy();

    });



});