import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid';
  cl=[];
  st=0
  sl=0
  td=[];

  // ngOnInit(){
  //   this.fetchData();
  // }
  constructor(private req:HttpClient)
  {
    //console.log("Data: " + JSON.stringify(data));
      this.req.get("https://coronavirus-19-api.herokuapp.com/countries").toPromise().then(
        data=>{
          // let mdata = JSON.stringify(data);
          // let tdata=JSON.parse(mdata);
          //console.log(data);
          //console.log(Object.keys(data))
          // console.log(typeof tdata);
          for (let  x in data)
          {
            ///console.log(data[x]['country'])
            this.cl.push(data[x])
            this.td.push(data[x]);
            //console.log(this.cl)
          }
          // this.sl=1;
          // console.log(this.cl);
          console.log(data);
          this.foo();
        }

      )

    }
    filter(e)
    {
      this.cl=this.td;
   // console.log(typeof e.target.value)
      let xx=[]
      for(let x of this.cl)
      {

        let st:string=x.country.toLowerCase( );
       // console.log(st)
        let tt:string=e.target.value.toLowerCase( );
       // console.log(typeof x['country'])
      //  console.log(st);
      //  console.log(tt);
        if(st.startsWith(tt))
        {
          xx.push(x);
        }
        //console.log(x['country'])
      }
      console.log(xx)
      this.cl=xx;
    }
    private foo()
    {
      console.log(this.cl[0])
      this.sl=1;
    }

  }
  // private async fetchData(){
  //   const data = await this.req.get("https://coronavirus-19-api.herokuapp.com/countries").toPromise();
  //   console.log(data);
  //   for(let x in data)
  //   {
  //    // this.cl.push(data[x]['country'])
  //          console.log(data[x]['country'])
  //         this.cl.push(data[x]['country'])
  //   }
  //   //
// }

// }
