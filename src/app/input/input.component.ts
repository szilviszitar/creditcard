import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() control!: FormControl;
  @Input() label: string | undefined;


  showErrors() {
    return this.control.dirty && this.control.touched && this.control.errors
  }
}
