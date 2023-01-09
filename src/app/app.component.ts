import { Component } from '@angular/core';
import { LazyLoadEvent, PrimeNGConfig } from 'primeng/api';
import { Hss } from './models/hss';
import { HssService } from './services/hss.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datasource: Hss[] = [];

  hsses: Hss[] = [];

  totalRecords: number = 0;

  //cols: any[]|undefined;

  loading: boolean = false;

  constructor(private hssService: HssService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
      //datasource imitation
    //   this.hssService.getHssData().subscribe(data => {
    //       this.datasource = data;
    //       this.totalRecords = data.length;
    //   });

      this.hssService.getHssData().then((data: Hss[]) => {
        console.log("I am in ngOnInit IN data =====> ", data);
       this.datasource = data;
       console.log("I am in ngOnInit IN this.datasource =====> ", this.datasource);
       this.totalRecords = data.length;
       this.hsses = data;
   });

      this.loading = true;
      this.primengConfig.ripple = true;
  }

  loadHsses(event: LazyLoadEvent) {
      this.loading = true;

      //imitate db connection over a network
      setTimeout(() => {
          if (this.datasource) {
            //  this.hsses = this.datasource.slice(event.first, (event.first + event.rows));
              this.loading = false;
          }
      }, 1000);
  }
}
