import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panelcontrol',
  templateUrl: './panelcontrol.component.html',
  styleUrls: ['./panelcontrol.component.css']
})
export class PanelcontrolComponent implements OnInit {
  title = 'grokonez';
  description = 'Angular8-Firebase Demo';
  constructor() { }

  ngOnInit(): void {
  }

}
