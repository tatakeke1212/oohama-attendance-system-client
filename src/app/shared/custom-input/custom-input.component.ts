import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
})
export class CustomInputComponent implements OnInit {
  @Input() name = '';
  @Input() type = '';
  @Input() label = '';
  @Input() required = false;
  @Input()
  get value() {
    return this._value;
  }
  set value(val: any) {
    this._value = val;
    this.valueChange.emit(this._value);
  }
  private _value: any = null;

  @Output() valueChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
