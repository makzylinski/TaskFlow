package com.max.TaskFlow.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TaskController {

    @GetMapping("tasks")
    public String getTasks() {
        return "Hehe";
    }
}
