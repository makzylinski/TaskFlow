import { TaskModel } from '../components/task/task';

export const separateTasksByStatus = (tasks: TaskModel[]) => {
  const todo: TaskModel[] = [];
  const inProgress: TaskModel[] = [];
  const review: TaskModel[] = [];
  const done: TaskModel[] = [];

  tasks.forEach((element: TaskModel) => {
    console.log(element);
    if (element.status === 'To do') todo.push(element);
    else if (element.status === 'In progress') inProgress.push(element);
    else if (element.status === 'review') review.push(element);
    else if (element.status === 'done') done.push(element);
  });

  return { todo, inProgress, review, done };
};
