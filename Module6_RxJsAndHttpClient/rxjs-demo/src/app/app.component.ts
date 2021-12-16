import { MapType } from '@angular/compiler';
import { Component } from '@angular/core';
import { merge } from 'rxjs';
import { from, interval, of, throwError,pipe} from 'rxjs';
import { catchError, filter, find, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-demo';

  constructor() {
    this.ofFunctionDemo();
    this.fromFunctionDemo();
    this.throwErrorDemo();
    this.intervalFunctionDemo();
    this.mergeFunctionDemo();
    this.pipeAndMapunctionDemo();
    this.findDemo();
    this.takeDemo();
    this.filterDemo();
    this.catchErrorDemo();
  }

 
  
  ofFunctionDemo(){
    console.log("======Of demo=======");
    // of function lets you create stream of response as an observable
    const array = [2,34,56,777,888,999];
    of (array)
    .subscribe(
      (response) => {
        console.log("Next handler: " + response);// next handler will run only once
      },
      (error) => {
        console.log("Error handler: " + error);
      },
      () => {
        console.log("Complete handler: all values processed of array");
      }

    )
  }

  fromFunctionDemo() {
    //lets you create a stream of responses as an observable
    console.log("======from demo=======");
    const array = [2,34,56,777,888,999];
    from (array)
    .subscribe(
      (response) => {
        console.log("Next handler: " + response); // next handler will run 6 times
      },
      (error) => {
        console.log("Error handler: " + error);
      },
      () => {
        console.log("Complete handler: all values processed of array");
      }

    )
  }

  throwErrorDemo() {
    //lets you throw an error explicitly as observable
    console.log("======throw error demo=======");
    throwError ("License Expired. Pls renew the license")
    .subscribe(
      (response) => {
        console.log("Next handler: " + response); // next handler will run 6 times
      },
      (error) => {
        console.log("Error handler: " + error);
      },
      () => {
        console.log("Complete handler: all values processed of array");
      }

    )
  }

  intervalFunctionDemo() {
    //lets you emit values after predefined inyervals of time as an observable
    console.log("======interval function demo=======");

    interval (2000) //two seconds
    .subscribe(
      (response) => {
        console.log("Next handler of intervalFunctionDemo: " + response); // next handler will run after every two seconds
      },
      (error) => {
        console.log("Error handler: " + error);
      },
      () => {
        console.log("Complete handler: all values processed of array");
      }

    )
  }

  mergeFunctionDemo(){
    console.log("======merge demo=======");
    // of function lets you combine observable streams into one observable stream
    const array = [2,34,56,777,888,999];
    let list1 = of (2,34,56,777,888,999);
    let list2 = of ('a','b','c','d');
    let finalList = merge(list1,list2);
    finalList
    .subscribe(
      (response) => {
        console.log("Next handler: " + response);// next handler will run only once
      },
      (error) => {
        console.log("Error handler: " + error);
      },
      () => {
        console.log("Complete handler: all values processed of array");
      }

    )
  }


  pipeAndMapunctionDemo() {
    //pipe lets you transfirm observable by running various operations in a sequence
    // map lets you transform each and every value
    console.log("======pipe and map demo=======");
    const list = from([2,34,56,777,888,999]);
    list
    .pipe(
      map(x => x * 10),
      map(y => y - 3),
      map(z => `Rs ${z}/-`)
    )
    .subscribe(
      (response) => {
        console.log("Next handler: " + response); // next handler will run 6 times
      },
      (error) => {
        console.log("Error handler: " + error);
      },
      () => {
        console.log("Complete handler: all values processed of array");
      }

    )
  }

  findDemo() {
    //find lets you find teh first occurence of the value in a stream of responses

    console.log("======find demo=======");
    const list = from([2,34,21,56,777,888,999]);
    list
    .pipe(
      find( x => x%3 == 0)
    )
    .subscribe(
      (response) => {
        console.log("Next handler: " + response); // next handler will run 6 times
      },
      (error) => {
        console.log("Error handler: " + error);
      },
      () => {
        console.log("Complete handler: all values processed of array");
      }

    )
  }

  takeDemo() {
    //lets you choose the values from a stream of values

    console.log("======take demo=======");
    const list = from([2,34,21,56,777,888,999]);
    interval(2000)
    .pipe(
      take(5) // it will take only 5 values and then break. else without this the interval would make it run infinitely
    )
    .subscribe(
      (response) => {
        console.log("Next handler of take demo: " + response); // next handler will run 6 times
      },
      (error) => {
        console.log("Error handler: " + error);
      },
      () => {
        console.log("Complete handler: all values processed of array");
      }

    )

  }

  filterDemo(){
    //lets you filter all values i a stream of responses

    console.log("======filter demo=======");
    const list = from([2,34,21,56,777,888,999]);
    
    list.pipe(
      filter(x => x%3 == 0) // it will take only 5 values and then break. else without this the interval would make it run infinitely
    )
    .subscribe(
      (response) => {
        console.log("Next handler : " + response); // next handler will run 6 times
      },
      (error) => {
        console.log("Error handler: " + error);
      },
      () => {
        console.log("Complete handler: all values processed of array");
      }

    )
  }

  catchErrorDemo(){
    //lets you catch and handlea an Erroro in a stream of responses

    console.log("======catch error demo=======");
    const list = from([2,34,21,56,777,888,999]);
    
    list.pipe(
      map(
        (x) => {
          if (x == 56) {
            throw 'Some Error'
          }
          return x;
        }),
        catchError((err:any) => {
          console.log("Error value is :" + err);
          return of (56);
        })
    )
    .subscribe(
      (response) => {
        console.log("Next handler : " + response); // next handler will run 6 times
      },
      (error) => {
        console.log("Error handler: " + error);
      },
      () => {
        console.log("Complete handler: all values processed of array");
      }

    )

  }

}
