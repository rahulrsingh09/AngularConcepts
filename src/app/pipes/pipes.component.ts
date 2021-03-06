import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  val :number;

  pipeCode = `
@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: number, args?: number): number {
    if(!args){
      if(value != null){
        //console.log("Arg[0]"+args[1]+"Args[1]"+args[1]);
        return Math.pow(value,2);
      }else{
        return 0;
      }
    }
    else {
      if(value != null){
        //console.log("Arg[0]"+args[1]+"Args[1]"+args[1]);
        return Math.pow(value,2) + args;
      }else{
        return 0;
      }
    }
  }
}`;
  constructor() { }

  ngOnInit() {
  }

}
