import {Component} from '@angular/core';
import {IdmtlService} from "../idmtl.service";
import {map, timer} from "rxjs";

@Component({
  selector: 'app-arrival',
  templateUrl: './arrival.component.html',
  styleUrls: ['./arrival.component.css']
})
export class ArrivalComponent {

  arrivals: any = []
  firstDay: any
  secondDay: any

  constructor(private service: IdmtlService) {
  }

  ngOnInit() {
    timer(0, 5000).pipe(
      map(() => {
        this.service.getArrivals().subscribe(
          (res: any) => {
            this.arrivals = this.groupBy(res.data, (d: any) => d.planned_date)
            this.firstDay = {
              "date": Object.keys(this.arrivals)[0],
              "arrivals": this.arrivals[Object.keys(this.arrivals)[0]]
            }
            this.secondDay = {
              "date": Object.keys(this.arrivals)[1],
              "arrivals": this.arrivals[Object.keys(this.arrivals)[1]]
            }
          },
          (error) => {
            console.error('error:', error)
          }
        )
      })).subscribe();
  }


  groupBy<T>(arr: T[], fn: (item: T) => any) {
    return arr.reduce<Record<string, T[]>>((prev, curr) => {
      const groupKey = fn(curr);
      const group = prev[groupKey] || [];
      group.push(curr);
      return {...prev, [groupKey]: group};
    }, {});
  }

}
