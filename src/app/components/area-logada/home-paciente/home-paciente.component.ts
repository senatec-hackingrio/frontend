import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-paciente',
  templateUrl: './home-paciente.component.html',
  styleUrls: ['./home-paciente.component.css']
})
export class HomePacienteComponent implements OnInit {

  hudson: string;
  latitude: any;
  longitude: any;


  constructor() { }

  ngOnInit() {
  }

  async changeTab(event) {

    if (event.nextId === 2) {
      this.openMap();
    }
}


  openMap() {
    navigator.geolocation.getCurrentPosition(pos => {
      const parameter = pos.coords.latitude + ',' + pos.coords.longitude;
      const xx = 'https://app.powerbi.com/view?r=eyJrIjoiMjgwZDYxMDItMDBmNC00ZWE2LWE0ZDEtMWVkNzY3OTc5NzA5IiwidCI6IjE2YzFkZTc5LWEyNjUtNDJjZS05OGMyLTk1NGFlYzNhZjY1MSJ9';
      // window.open('https://www.google.com/maps/search/?api=1&query=' + parameter);
      window.open(xx);
    });
  }

}



