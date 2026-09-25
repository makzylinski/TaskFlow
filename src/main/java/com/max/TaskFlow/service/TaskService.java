package com.max.TaskFlow.service;

import com.max.TaskFlow.DTO.CreateTaskRequest;
import com.max.TaskFlow.DTO.TaskResponse;
import com.max.TaskFlow.model.Board;
import com.max.TaskFlow.model.Task;
import com.max.TaskFlow.model.TaskStatus;
import com.max.TaskFlow.repository.BoardRepository;
import com.max.TaskFlow.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class TaskService {
    @Autowired
    TaskRepository taskRepository;
    @Autowired
    BoardRepository boardRepository;

    @Transactional(readOnly = true)
    public List<TaskResponse> getTasks(Long boardId) {
        return taskRepository.findByBoardId(boardId).stream()
                .map(this::toResponse)
                .toList();
    }

    @Transactional
    public TaskResponse generateTask(CreateTaskRequest request) {
        Board board = boardRepository.findById(request.boardId())
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Board not found: " + request.boardId()));

        Task task = new Task(request.name(), request.description());
        task.setBoard(board);
        Task saved = taskRepository.save(task);

        return toResponse(saved);
    }

    private TaskResponse toResponse(Task t) {
        return new TaskResponse(
                t.getTaskId(),
                t.getName(),
                t.getDescription(),
                t.getDateCreated(),
                t.getStatus(),
                t.getBoard() != null ? t.getBoard().getId() : null,
                t.getAssignee() != null ? t.getAssignee().getUserId() : null);
    }

    public TaskResponse updateTask(Long id, TaskStatus status) {
        Task task = taskRepository.findById(id).orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Task not found: " + id));

        task.setStatus(status);
        taskRepository.save(task);
        return toResponse(task);
    }
}
