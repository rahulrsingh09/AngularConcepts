import { Observable, Subscriber } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  count = new Observable<number>((observer: Subscriber<number>) => {
    setInterval(() => observer.next(5), 1000);
  });

  /*Making use of fork join 
  
  when all observables complete, give the last
  emitted value from each as an array
  

  import 'rxjs/add/operator/mergeMap';
  import 'rxjs/add/observable/forkJoin';
  
    Observable.forkJoin([this.alldata.services_detail(), this.alldata.booking_type()]).mergeMap((data:any[]) => {
        this.ServicesArea = data[0];
        this.Bookings_detail = data[1];
  
        //Here you can do whatever you want, bevor you request SomeData4
        return this.alldata.serviceCall(this.ServicesArea, this.Bookings_detail); // pass the values to a new service method
    }).subscribe((data) => {
        console.log(data); // your data
    });
  

   // Merge is similar to concat, but it will interleave the emitted values instead of completing the first observable before starting the second one.
  // flatMap or switch map is how we handle dependencies between observables. My sample is contrived, but I am returning a value from the first observable that is needed by the second observable to calculate a sum.
    this.userService.getUser()
        .do(u => this.user = u) //.do just invokes the function. does not manipulate the stream, return value is ignored.
        .flatMap(u => this.userService.getPreferences(u.username))
        .subscribe(p => this.preferences = p);


  // The eas­i­est way to remem­ber the dif­fer­ence between mergeMap and switchMap is
 
  //When you hear the word merge, think — use every­thing on all the streams aka. merge every­thing. 
  //Whereas when you hear the word switch, think — switch to using data on the newer stream no data is ever lost in flat or merge map as both contibue to emit.
  //where as in switchmap 
  //Switch subscribes to an Observable that emits Observables. Each time it observes one of these emitted Observables, the Observable returned by Switch unsubscribes from the previously-emitted Observable begins emitting items from the latest Observable. Note that it will unsubscribe from the previously-emitted Observable when a new Observable is emitted from the source Observable, not when the new Observable emits an item.    

//good article on rxjs observables http://www.syntaxsuccess.com/viewarticle/combining-multiple-rxjs-streams-in-angular-2.0

//Map operator in rxjs

//The Map operator applies a function of your choosing to each item emitted by the source Observable, and returns an Observable that emits the results of these function applications.

*/
}
