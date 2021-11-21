// import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
// @Directive({
//   selector: '[appMaskInput]'
// })
// export class MaskInputDirective implements OnInit {

//   // private regexOne: RegExp = new RegExp(/^\D\/$/);

//   private regexTwo: RegExp = new RegExp(/\D/g);

//   // private regexThree: RegExp = new RegExp(/^\d\/$/);

//   private specialKeys: Array<string> = ['Backspace'];

//   @Input() appMaskValue: string;
//   constructor(
//     private elRef: ElementRef,
//     private renderer: Renderer2
//   ) { }
//   ngOnInit(): void {
//   }
//   @HostListener('input', ['$event'])
//   onInput(event) {

//     var userInputValue = event.target.value;

//     console.log("userinput value:"+ userInputValue);

//     let regexOne: RegExp = new RegExp('/\D\/$');

//     if(regexOne.test(userInputValue)){
//       console.log("works")
//     }else{
//       console.log("didn work")
//     }

//     if (regexOne.test(userInputValue)) userInputValue = userInputValue.substring(0, userInputValue.length - 3);
//     console.log(userInputValue);
//     console.log(userInputValue.length);

//     var values = userInputValue.split('/').map(function(v) {
//       console.log("split value :" +v);
//       // let regexTwo: RegExp = new RegExp(/\D/g);
//       return v.replace(/\D/g, '')
//     });
//     console.log("After 37 line: " + values)
//     if (values[0]) values[0] = this.checkValue(values[0], 12);
//     if (values[1]) values[1] = this.checkValue(values[1], 31);

//     console.log(values);
//     var output = values.map(function(v, i) {
//       return v.length == 2 && i < 2 ? v + ' / ' : v;
//     });

//     console.log("Output"+ output)
//     event.target.value = output.join('').substr(0, 14);
//     console.log(event.target.value)

//   }

//    checkValue = (inputNumber, maxValue)=>{
//     if(inputNumber.charAt(0) !=='0' || inputNumber == '00'){
//       let number = parseInt(inputNumber);

//       if(isNaN(number) || number <=0 || number > maxValue) number = 1;

//       inputNumber = number > parseInt(maxValue.toString().charAt(0)) && number.toString().length == 1 ? '0' + number : number.toString();
//     }
//   }

// }

// // import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
// // @Directive({
// //   selector: '[appMaskInput]'
// // })
// // export class MaskInputDirective implements OnInit {

// //   private regexOne: RegExp = new RegExp(/^\d{2}$/);
// //   private regexTwo: RegExp = new RegExp(/^\d{2}\/\d{2}$/);

// //   // private regexThree: RegExp = new RegExp(/^\d\/$/);

// //   private specialKeys: Array<string> = ['Backspace'];

// //   @Input() appMaskValue: string;
// //   constructor(
// //     private elRef: ElementRef,
// //     private renderer: Renderer2
// //   ) { }
// //   ngOnInit(): void {
// //   }
// //   @HostListener('input', ['$event'])

// //   onInput(event) {

// //     if (this.specialKeys.indexOf(event.key) !== -1) {
// //       return;
// //     }

// //     // console.log("Naumy"+ event);
// //     // if (this.appMaskValue && (this.appMaskValue.length === 2 || this.appMaskValue.length === 5) && event.key !== 'Backspace') {
// //     //   this.renderer.setProperty(this.elRef.nativeElement, 'value', this.appMaskValue + '/');
// //     // }
// //     // console.log("Test" + this.appMaskValue);

// //     let v = event.target.value;

// //     let test = v.keyCode;

// //     console.log(test);

 


// //     if (v.match(this.regexOne) !== null) {
// //       event.target.value = v + ' / ';
// //     } else if (v.match(this.regexTwo) !== null) {
// //       event.target.value = v + ' / ';
// //     }
// //     // else if(v.match(this.regexThree)){
// //     //   if(event.keyCode != 8 && event.keyCode != 46){
// //     //     event.target.value = '0' + v ;
// //     //    }
// //     // }

// //     // console.log('calledEveryTime',v)

// //   }

// // }

import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appMaskInput]'
})
export class MaskInputDirective implements OnInit {

  private regexOne: RegExp = new RegExp(/^\d{2}$/);
  private regexTwo: RegExp = new RegExp(/^\d{2}\/\d{2}$/);

  // private regexThree: RegExp = new RegExp(/^\d\/$/);

  private specialKeys: Array<string> = ['Backspace'];

  @Input()
    appMaskValue!: string;
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }
  ngOnInit(): void {
  }
  @HostListener('input', ['$event'])

  onInput(event: { key: string; target: { value: string; }; }) {

    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }

    // console.log("Naumy"+ event);
    // if (this.appMaskValue && (this.appMaskValue.length === 2 || this.appMaskValue.length === 5) && event.key !== 'Backspace') {
    //   this.renderer.setProperty(this.elRef.nativeElement, 'value', this.appMaskValue + '/');
    // }
    // console.log("Test" + this.appMaskValue);

    let v = event.target.value;

    // let test = v.keyCode;

    // console.log(test);

 


    if (v.match(this.regexOne) !== null) {
      event.target.value = v + '/';
    } else if (v.match(this.regexTwo) !== null) {
      event.target.value = v + '/';
    }
    // else if(v.match(this.regexThree)){
    //   if(event.keyCode != 8 && event.keyCode != 46){
    //     event.target.value = '0' + v ;
    //    }
    // }

    // console.log('calledEveryTime',v)

  }

}