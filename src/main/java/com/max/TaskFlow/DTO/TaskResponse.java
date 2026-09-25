package com.max.TaskFlow.DTO;

import com.max.TaskFlow.model.TaskStatus;

import java.time.LocalDateTime;

public record TaskResponse(Long id,
                           String name,
                           String description,
                           LocalDateTime dateCreated,
                           TaskStatus status,
                           Long boardId,
                           Long userId) { }