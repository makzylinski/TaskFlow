package com.max.TaskFlow.service;

import com.max.TaskFlow.DTO.CreateTaskRequest;
import com.max.TaskFlow.DTO.TaskResponse;
import com.max.TaskFlow.model.Task;
import com.max.TaskFlow.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TaskService {
    @Autowired
    TaskRepository taskRepository;

    public List<Task> initTestTasks() {
        List<Task> tasks = List.of(
                new Task("Design onboarding flow", "Create mobile onboarding screens in Figma"),
                new Task("Setup CI pipeline", "Configure GitHub Actions: build, test, lint"),
                new Task("Implement JWT auth", "Login and register endpoints with Spring Security"),
                new Task("Drag & drop on board", "Move tasks between columns using Angular CDK"),
                new Task("Write TaskService tests", "Unit tests with JUnit 5 and Mockito"),
                new Task("Add task filters", "Filter tasks by assignee and due date"),
                new Task("Dockerize backend", "Dockerfile + docker-compose with MySQL"),
                new Task("Fix CORS config", "Global CorsConfigurationSource for localhost:4200")
        );

        return taskRepository.saveAll(tasks);
    }

    @Transactional(readOnly = true)
    public List<TaskResponse> getTasks() {
        return taskRepository.findAll().stream()
                .map(t -> new TaskResponse(
                        t.getTaskId(),
                        t.getName(),
                        t.getDescription(),
                        t.getDateCreated(),
                        t.getStatus(),
                        t.getBoard() != null ? t.getBoard().getId() : null,
                        t.getAssignee() != null ? t.getAssignee().getUserId() : null
                )).toList();
    }

    public Task generateTask(CreateTaskRequest request) {
        Task task = new Task(request.name(), request.description());
        return taskRepository.save(task);
    }
}
