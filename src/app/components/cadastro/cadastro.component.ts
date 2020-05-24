import { Component, OnInit, ViewChild  } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  model: NgbDateStruct;
  date: { year: number, month: number };

  dp: NgbDatepicker;

  constructor(private calendar: NgbCalendar) { }

  ngOnInit() {
  }


  selectToday() {
    this.model = this.calendar.getToday();
  }

  setCurrent() {
    this.dp.navigateTo();
  }

  setDate() {
    this.dp.navigateTo({ year: 2013, month: 2 });
  }

  navigateEvent(event) {
    this.date = event.next;
  }

}
