# AngularConcepts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)
By Rahul Singh <rahulrsingh09@gmail.com>

Please fork this repo or write to me at rahulrsingh09@gmail.com to add more concepts that you have .

For any problem raise and issue will be glad to to help.

This Repo Gives a code Demo of some of the Concepts of Angular 2 in a basic way , will update it for more soon :- 
Angular Core Concepts

<li>Simple Angular  Component</li>
<li>Custom Pipes</li>
<li>Custom Directives</li>
<li>Event Emitters  Input & Output</li>
<li>Form Controls in Reactive or Data Driven Forms </li>
<li>Form Controls In Template Driven Forms</li>
<li>Example of Http Client Module how to create a service in angular, error handling and Interceptors in Services</li>
<li>Angular 4 Rc2 IF else</li>
<li>Dynamic Components using Component Factory Resolver </li>
<li>Angular Testing Components and Custom Components like Directives ,Pipes, Router etc [work in progress] </li>
<li>Angular Router Guards using CanActivate and Can Deactivate Interfaces</li>
<li>Passing Data via Router and also Retriving them look at Angular4Component for code</li>
<li>Usage of Host and Host-Context in Angular 2 Components [The shadow Dom]</li>
<li>View Child , View Children and Content Children Example</li>
<li>Ngrx Store[Redux] Simple Example and Observables Gist</li>
<li>Angular Router Resolve Explanation</li>
<li>For Router Resolve Please Refer to my Other repo as i have used them in detail over there in https://github.com/rahulrsingh09/FootBallScores</li>
<li>For Lazy Loading in Angular Please Refer the Same repo https://github.com/rahulrsingh09/FootBallScores I have used them in Detail</li>
<li>Also i have used Shared Modules , Feature Modules and Core Modules in repo https://github.com/rahulrsingh09/FootBallScores </li>
<li>Use of HighCharts to Show Graphical Info of Data that is mostly used now a days in web apps [Multi level , Multi level - multi chart  Drill Down Included]</li>
<li>Using Firebase with Angular using ng2 Firebase</li>
<li>Saving data to Real time Firebase Database and making a Commenting Section out of it using Renderer 2</li>
<li>Facebook and google Auth in Angular Apps</li>
<li>Notes on very common Angular Questions in the Notes section and use of third party JS Library In Angular</li>
<li>File Upload and Download Using Angular HttpClient and Node Server</li>
Working Example of the following code can be found under 
https://rahulrsingh09.github.io/AngularConcepts


## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run ```ng build``` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Build using AOT ```ng build --prod --env=prod --output-hashing none```


## Running unit tests

Run ```ng test``` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run ```ng e2e``` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


### To update

```npm install @angular/common@next @angular/compiler@next @angular/compiler-cli@next @angular/core@next @angular/forms@next @angular/http@next @angular/platform-browser@next @angular/platform-browser-dynamic@next @angular/platform-server@next @angular/router@next @angular/animations@next --save```


### To get Latest Info on Angular 

https://github.com/angular/angular/blob/master/CHANGELOG.md

### Things to Note

While Forking this Repo and trying to build the same,  you might encounter this error 
```Cannot find module './shared/firebase.config' in app.module and enviornment```

This is because i have some Production and Development Enviornment Settings that load my Firebase Details accordindly, you need to create your own firebase credentials.


So what you need to do is to create a file named as firebase.config.ts in Shared folder
and add your Firebase Credentials to the same , with a Structure like this in your firebase database
```
YOUR APP
|
|
| Comments
|   |
|    users
| pageCount
```

Like - 
```
export const firebaseConfigDev = {
    apiKey: "XXXXX",
    authDomain: "XXX",
    databaseURL: "XXX",
    projectId: "XXX",
    storageBucket: "XXXX",
    messagingSenderId: "XXXX"
};
```
and like wise or prod if any 
```
export const firebaseConfig = {
    apiKey: "XXXXX",
    authDomain: "XXX",
    databaseURL: "XXX",
    projectId: "XXX",
    storageBucket: "XXXX",
    messagingSenderId: "XXXX"
};
```
This credentials will be given by Firebase when you create a new Webapp inside of ther console if any doubts please comment or get in touch .

