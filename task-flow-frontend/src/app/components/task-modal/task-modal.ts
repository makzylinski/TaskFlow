import { Component, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../services/taskService';

export interface NewTask {
  name: string;
  description: string;
}

@Component({
  selector: 'app-task-modal',
  imports: [ReactiveFormsModule],
  styleUrl: './task-modal.scss',
  templateUrl: './task-modal.html',
  host: { '(document:keydown.escape)': 'closed.emit()' },
})
export class TaskModal {
  closed = output<void>();
  created = output<NewTask>();

  taskService = inject(TaskService);

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
    this.taskService.saveNewTask(name, description).subscribe();
  }
}
