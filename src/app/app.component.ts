import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { TestService } from './test.service';
import { firstValueFrom, of, takeUntil } from 'rxjs';
import { filter } from 'rxjs';
import { Observable,mergeMap } from 'rxjs';
import { from } from 'rxjs';
import { interval } from 'rxjs';
import { Router,Route } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PropertyEnumTs } from './property.enum.ts';
import { AddressCategory } from './addressCategory.enum';

//import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
//import { MatDialogRef } from '@angular/material/dialog';

import { DomSanitizer,SafeHtml } from '@angular/platform-browser';

import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { DialogComponent } from './dialog/dialog.component';

import {MatExpansionModule} from '@angular/material/expansion';
import { MatMenuTrigger } from '@angular/material/menu';

import {A11yModule} from '@angular/cdk/a11y';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import { MatRadioChange } from '@angular/material/radio';

import { setSelectedValue } from './shared/store/radio-button.actions'
import { selectSelectedValue } from './shared/store/radio-button.selectors';
import { Store, select } from '@ngrx/store';
// import { MatRadioModule } from '@angular/material';

interface Styles {
  fontSize: string;
  color: string;
  decoration?:string|'kk';
  hover?:boolean;
}

export interface Monthly {
  label?: string;
  description?: string;  
  quantity?: number;
}


// interface TEComponentCheckBox {
//   id:{display:string};
// }

export interface TEComponentCheckBox {
  display: string;
}

export interface OfferInterface {
  [key: string]: TEComponentCheckBox;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit,AfterViewInit {
  scrollStrategy: ScrollStrategy;
  dialogRef: any;

  @Input() isVisible: boolean = false;
  //@ViewChild("testAddress",{static:false}) testAddress:ElementRef;
  //@ViewChild('testdataref',{static:false}) testdataref: TemplateRef<any>);
  @ViewChild('testdata', { static: false }) templateRef!: TemplateRef<any>;

  @ViewChild('testdataNew') testdataNewVariable!: TemplateRef<any>;

  @ViewChild('dialogComponent') dialogMain!: TemplateRef<any>;

  @ViewChild(DialogComponent) childComponent!: DialogComponent;

  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;

  // @ViewChild('myTemplate') myTemplate: TemplateRef<any>;

  @ViewChild('container',{read:ViewContainerRef,static:true}) container!: ViewContainerRef;

  currentStatus: PropertyEnumTs = PropertyEnumTs.House;
  styles: Styles;
  

  title = 'hello-world';
  author = 'faraz';

  color = 'orange';
  
  eventBindingTitle : string = "Sample Title";
  twoWayBindingTitle : string = "Two way binding title to explain the term";

  src = "https://picsum.photos/536/354";

  headings = ['hh1','hh2','hh3'];

  public show:boolean = true;
  public buttonName:any = 'Hide';

  public isDisplayed:boolean = false;
  monthly: Monthly = {
    label: 'haii gg',
    description: "Test desc",
    quantity: 1,
  }

  // Example 1 
  ff$ = of(1,4,5,6).pipe(filter((item) => item>4)).subscribe(out => console.log("OUT:",out)); 

  // Example 2
  //ff2$ = from([11,14,15,16]).pipe(filter((item) => item > 10)).subscribe(out => console.log("OUT:",out)); 

html:string = "aween baween maween taween";

 htmlString = '<p>This is <strong>safe</strong> HTML content.</p>';
// outputsafe:string = '';


 // Example 3


  //public squaredNums = squareValues(nums);
  /*
  of('faraz','is','learning').subscribe({
    next: value=>console.log(value),
    error: err=>console.log(err),

  })
  */
  textFieldControl = new FormControl();

   offer: OfferInterface = {
    '1-29P': {
      display:"Internet"
    }}
    
    isAutoPaySelected$ : Observable<any>;
    isAutoPaySelected : boolean;
    
    selectedValue$: Observable<string>;
   
  constructor(
    public _testService: TestService, 
    private router: Router,
    public dialog:MatDialog,
    private readonly sso: ScrollStrategyOptions,
    public sanitizer: DomSanitizer,
    public route:ActivatedRoute,
    private store: Store,
    ) 
    {
      this.selectedValue$ = this.store.pipe(select(selectSelectedValue));

      this.isAutoPaySelected$ = of([]);
      this.isAutoPaySelected = true;
      //cost description = alternateLabel ?alternateLabel.alternateSubLevel : item?.description;
      // const desc = this.monthly?.label 
      // ? ( this.monthly?.quantity > 1 ) ? `${this.monthly.quantity} ${this.monthly.label}`: this.monthly.label  
      // : ` No label`;
      
      //const label = `${this.monthly.quantity}${this.monthly?.quantity === 1 ? ` ${this.monthly.label}` : ''}`;
      //const desc = this.monthly?.label ? label : ` No label`;
      
      const desc = this.monthly?.label
    ? (this.monthly.quantity && this.monthly.quantity > 1)
        ?`${this.monthly.quantity} ${this.monthly.label}`
        : this.monthly.label
    : this.monthly.description;
      
      console.log("Description::::::",desc);


      console.log("isDisplayed constructor:",this.isDisplayed);
      // sanitizedHtml =  this.sanitizer.bypassSecurityTrustHtml(this.htmlString);
     // debugger
    this.scrollStrategy = this.sso.noop();
    enum Answer {
      No = "No",
      Yes = "Yes",
    }

    this.styles = {
      fontSize: '14px',
      color: 'green',
      decoration:'underline',
      hover:true,
    };

    const userStatus = Answer.No;
    
    localStorage.setItem("isloggedin","false");
    let srcObservable= of(1,2,3,4)
    let innerObservable= of('A','B','C','D')
    srcObservable.pipe(
      mergeMap( val => {
        console.log('Source value '+val)
        console.log('starting new observable')
        return innerObservable
      })
    )
    .subscribe(ret=> {
      console.log('Recd ' + ret);
    })

    //this.openDialogNew();
   
  }

  createComponent(){
    this.container.clear;
    this.container.createComponent(CoursesComponent);
  }

  openMenu(event:Event):void{ 
    event.preventDefault();
    this.menuTrigger.openMenu();
  }
  buttonKeyDown(event: any) {
    console.log(event);
    if (event.key === 'Tab' || (event.key === 'Tab' && event.shiftKey)) {
      event.stopPropagation();
    }
  }

  radioSelection(event: MatRadioChange){
  //radioSelection(event: Event){
    
    //const inputElement = event.target as HTMLInputElement;
    const value = event.value;
    console.log("inputElement: ",value);
  }
  onRadioChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.store.dispatch(setSelectedValue({ value: inputElement.value }));
  }

  // this.isAutoPaySelected$.pipe(takeUntil(this.destroy$)).subscribe((isAutoPaySelected) => {
  //   this.isAutoPaySelected= isAutoPaySelected
  // });


   closeDialog(res:any): void {
    console.log("hhh");
    this.dialogRef.close();
   }
   //   
  openDialog(): void { 
    
    // Example 1 with scrollStrategy
    // const dialogRef = this.dialog.open(this.templateRef, {scrollStrategy: this.scrollStrategy 
    // });
    
    this.dialogRef = this.dialog.open(this.templateRef, {
     
      // scrollStrategy: this.scrollStrategy,
      // panelClass:'test_class',
      height:'20px',
      // autoFocus: false,
      data:{
        title:"TEMP DUMMY TITLE"
      }
    });

    // Subscribe to the afterClosed observable
    this.dialogRef.afterClosed().subscribe((result:string) => {
      console.log('Dialog closed with result:', result);
      // Perform additional actions or handle the result as needed
    });    
  } 

  openDialogNew(): void { 
    // Below working
    this.dialogRef = this.dialog.open(this.testdataNewVariable,{
      height:'90px',
      // autoFocus: false,
    });


    //this.dialogRef = this.dialog.open(this.childComponent);
    

    //this.dialogRef = this.dialog.open(this.dialogMain);
    
  } 



  async getValue() { console.log("HEEEEEEEERRREE");
    //try {
      const value = await firstValueFrom(this.textFieldControl.valueChanges);
      console.log('First value:', value);
    //} catch (error) {
    //  console.error('Error getting value:', error);
    //}
  }

  continuebtn(){
    console.log("heree continue btn");
  }

  closeModal() {
    this.isVisible = false;
}

  addHeading(newHeading:string){
    this.headings.push(newHeading);
  }

  getData(data:string){
  }

  ngOnInit(): void {
    //this.testAddress.nativeElement.style.color = "red";
    //this.router.navigate(['/Course']);
    //console.log("isDisplayed ngOnInit:",this.isDisplayed);
    data$: Observable<number>;
    data$ : of(7,8);

    
    const queryParams = this.route.snapshot.queryParams;
    const processedParams: Record<AddressCategory,string> = {
      street: '',
      zip:'',
      city:'',
    };
    
    console.log("before");
    for(const key in queryParams){
      console.log("QP Key:",key);
      if(queryParams.hasOwnProperty(key))
      {
          // if(processedParams[key]){
          //   console.log("Own key:",key);
          // }
      }
    }
    //material$ = of('video','cd');
    /*
    material$.subscribe(res => {
      console.log(res);
    });
    */

    /*
    data$.pipe(map(x=>x+10){
    }).subscribe();
    */

    of(2,4).subscribe(
      item=>console.log(`resulting item ... ${item}`),
      err=>console.log(`error occured ... ${err}`),
      () => console.log("Completed")
    );
    

    from([110,112]).subscribe(
      item=>console.log(`resulting item ... ${item}`),
      err=>console.log(`error occured ... ${err}`),
      () => console.log("Completed")
    );

  }

  ngAfterViewInit(): void {
    //this.openDialogNew();
    //console.log("In ngoninit");
    this.execute();

    //console.log("VC: ",this.testAddress);
    
    

  }


  async  execute(){
    const source$ = interval(2000);

    

    //console.log(`source is: ${source$}`);
    
    const firstValue =  firstValueFrom(source$);
    //console.log(`First number is: ${firstValue}`);
  }


  toggle() {
    this.show = !this.show;

    // Change the name of the button.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }


  onEnter(event: any) { 
    console.log('Enter key pressed');
    console.log('Event object:', event.target.value);
    this.eventBindingTitle = event.target.value;
    console.log('Updated Value:'+this.eventBindingTitle);
  }


  printDialog(){
    window.print();
  }


}


