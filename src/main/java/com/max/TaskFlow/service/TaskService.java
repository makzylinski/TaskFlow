package com.max.TaskFlow.service;

import com.max.TaskFlow.DTO.CreateTaskRequest;
import com.max.TaskFlow.model.Task;
import com.max.TaskFlow.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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


    public List<Task> getTasks() {
        return taskRepository.findAll();
    }

    public Task generateTask(CreateTaskRequest request) {

        return taskRepository.save();
    }
}
