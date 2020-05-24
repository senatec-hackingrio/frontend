import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-paciente',
  templateUrl: './home-paciente.component.html',
  styleUrls: ['./home-paciente.component.css']
})
export class HomePacienteComponent implements OnInit {

  hudson: string;
  constructor() { }

  ngOnInit() {
  }

  changeTab(event) {
    console.log(this.hudson);
    console.log(event);
    if (event.nextId === 1) {
       // alert('fOI 0');
    } else if (event.nextId === 2) {
      window.open('https://maps.google.com?q=760+West+Genesee+Street+Syracuse+NY+13204');
      return;
    }

}

}
