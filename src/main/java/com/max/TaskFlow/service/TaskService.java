package com.max.TaskFlow.service;

import com.max.TaskFlow.model.Task;
import com.max.TaskFlow.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    @Autowired
    TaskRepository taskRepository;
    public List<Task> getTasks() {
        return taskRepository.findAll();
    }
}
