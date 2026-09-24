package com.max.TaskFlow.repository;

import com.max.TaskFlow.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
