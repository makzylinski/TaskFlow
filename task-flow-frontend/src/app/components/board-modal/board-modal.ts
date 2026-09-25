import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

export interface NewBoard {
  name: string;
  description: string;
}

@Component({
  selector: 'app-board-modal',
  imports: [ReactiveFormsModule],
  styleUrl: './board-modal.scss',
  templateUrl: './board-modal.html',
  host: { '(document:keydown.escape)': 'closed.emit()' },
})
export class BoardModal {
  closed = output<void>();
  created = output<NewBoard>();

  form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    description: new FormControl('', { nonNullable: true }),
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { name, description } = this.form.getRawValue();
    this.created.emit({ name: name.trim(), description: description.trim() });
  }
}
