import { TaskModel } from '../components/task/task';

export const separateTasksByStatus = (tasks: TaskModel[]) => {
  const todo: TaskModel[] = [];
  const inProgress: TaskModel[] = [];
  const review: TaskModel[] = [];
  const done: TaskModel[] = [];

  tasks.forEach((element: TaskModel) => {
    switch (element.status?.toLowerCase()) {
      case 'in progress':
        inProgress.push(element);
        break;
      case 'review':
        review.push(element);
        break;
      case 'done':
        done.push(element);
        break;
      default:
        todo.push(element);
    }
  });

  return { todo, inProgress, review, done };
};
