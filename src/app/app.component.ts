import { Component, NgZone, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { take } from "rxjs/operators";



declare function testDateFormatter() :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'datePicker-issue-fix';

  @ViewChild('d') datePicker: any;

  dateOffBirth: NgbDateStruct | any;

  public isValidStartDate : boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private ngZone: NgZone
  ){}

  public patientsInfoForm: FormGroup = this.formBuilder.group({
    DOB: ["", Validators.required]
  });

  
  ngOnInit(): void {
    testDateFormatter();


    // let dtobDate = (this.patients.DOB != null) ? new Date(this.patients.DOB) : null;
    // if (dtobDate != null) {
    //   const utcDatePipe = new UtcDatePipe();
    //   const utcDate = utcDatePipe.transform(dtobDate.toString());
    //   let dtDOB = new Date(utcDate);
    //   this.dateOffBirth = {
    //     year: dtDOB.getFullYear(),
    //     month: dtDOB.getMonth() + 1,
    //     day: dtDOB.getDate(),
    //   };
    // }

    this.patientsInfoForm.patchValue({
      DOB: this.dateOffBirth
    });  
  }

  inputDateFRomCalender(e : any) {
    console.log("I am inputDateformatter");
    
    let dateSplite = e.target.value.split("/");
    if (dateSplite.length == 3) {
      console.log("Month:" + dateSplite[0].length)
      console.log("Day:" + dateSplite[1].length)
      console.log("Year:" + dateSplite[2].length)
      if (
        dateSplite[2].length == 4 &&
        dateSplite[0] != "" &&
        dateSplite[1] != ""
      )  {
          this.isValidStartDate = true;
          let date: NgbDateStruct = {
            year: Number(dateSplite[2]),
            month: Number(dateSplite[0]),
            day: Number(dateSplite[1]),
          };
          this.dateOffBirth = date;

          console.log(date.month + " month", date.day + " day", date.year + " year");
    }
  }
  }

  public toggleDatePicker(): void {
    this.datePicker.toggle();
    if (this.datePicker.isOpen()) {

    this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
        const elementToFocus = this.datePicker._elRef.nativeElement;
        if (elementToFocus) {
          elementToFocus.focus();
        }
      });
    }
  }

  

}
