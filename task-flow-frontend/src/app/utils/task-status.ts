import { TaskModel } from '../components/task/task';
import { TaskStatus } from '../enum/task-status.enum';

export const separateTasksByStatus = (tasks: TaskModel[]) => {
  const todo: TaskModel[] = [];
  const inProgress: TaskModel[] = [];
  const review: TaskModel[] = [];
  const done: TaskModel[] = [];

  tasks.forEach((element: TaskModel) => {
    switch (element.status) {
      case TaskStatus.IN_PROGRESS:
        inProgress.push(element);
        break;
      case TaskStatus.REVIEW:
        review.push(element);
        break;
      case TaskStatus.DONE:
        done.push(element);
        break;
      default:
        todo.push(element);
    }
  });

  return { todo, inProgress, review, done };
};
