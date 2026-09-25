package com.max.TaskFlow.controller;

import com.max.TaskFlow.DTO.CreateTaskRequest;
import com.max.TaskFlow.DTO.TaskResponse;
import com.max.TaskFlow.service.TaskService;
import jakarta.validation.Valid;
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

    @GetMapping("/tasks/{boardId}")
    public ResponseEntity<List<TaskResponse>> getTasks(@PathVariable Long boardId) {
        List<TaskResponse> tasks = taskService.getTasks(boardId);
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }

    @PostMapping("/new-task")
    public ResponseEntity<TaskResponse> createTask(@Valid @RequestBody CreateTaskRequest request) {
        TaskResponse task = taskService.generateTask(request);
        return new ResponseEntity<>(task, HttpStatus.CREATED);
    }
}
