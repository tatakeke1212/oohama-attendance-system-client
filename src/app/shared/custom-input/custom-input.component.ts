import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
})
export class CustomInputComponent implements OnInit {
  @Input() type = '';
  @Input() label = '';
  @Input() required = false;

  constructor() {}

  ngOnInit(): void {}
}
