import {Component, OnInit} from '@angular/core';
import {IdmtlService} from "../idmtl.service";
import {map, timer} from "rxjs";

@Component({
  selector: 'app-departure',
  templateUrl: './departure.component.html',
  styleUrls: ['./departure.component.css']
})
export class DepartureComponent implements OnInit {

  departures: any = []
  firstDay: any
  secondDay: any

  constructor(private service: IdmtlService) {
  }

  ngOnInit() {
    timer(0, 5000).pipe(
      map(() => {
        this.service.getDepartures().subscribe(
          (res: any) => {
            this.departures = this.groupBy(res.data, (d: any) => d.planned_date)
            this.firstDay = {
              "date": Object.keys(this.departures)[0],
              "departures": this.departures[Object.keys(this.departures)[0]]
            }
            this.secondDay = {
              "date": Object.keys(this.departures)[1],
              "departures": this.departures[Object.keys(this.departures)[1]]
            }
          },
          (error) => {
            console.error('error:', error)
          }
        )
      })
    ).subscribe();

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
