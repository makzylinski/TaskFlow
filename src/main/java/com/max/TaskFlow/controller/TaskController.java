package com.max.TaskFlow.controller;

import com.max.TaskFlow.model.Task;
import com.max.TaskFlow.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class TaskController {

    @Autowired
    TaskService taskService;

    @GetMapping("/tasks")
    public ResponseEntity<List<Task>> getTasks() {
        List<Task> tasks = taskService.getTasks();
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }

    @PostMapping("/new-task")
    public ResponseEntity<Task> createTask() {
        Task task = taskService.generateTask();
        return new ResponseEntity<>(task, HttpStatus.CREATED);
    }
}
