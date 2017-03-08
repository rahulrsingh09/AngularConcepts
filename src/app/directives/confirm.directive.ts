import {Directive, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appConfirm]'
})
export class ConfirmDirective {

  //we can also add the attribute directive liek this [appconfirm] if the input in the directive has same name as appConfirm like
  //@Input() appConfirm:string; and then in component button we can use the directive like
  //<button type="button" [appConfirm] = "Rahul">Click to Send to Directive</button>
  @Input() value:string;

  @HostListener('click',['$event'])
  confirm(){
      const confirmed = window.confirm("Are you Sure ?");
      if(confirmed){
        window.alert("This is Value ["+this.value+"] Passed by the Component to the Directive")
      }
  }

  constructor() { }

}
