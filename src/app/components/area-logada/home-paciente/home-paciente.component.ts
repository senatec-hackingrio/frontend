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
      window.open('https://www.google.com/maps/search/?api=1&query=' + parameter);
    });
  }

}



