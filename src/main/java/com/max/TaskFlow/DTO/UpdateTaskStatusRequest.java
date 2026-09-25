package com.max.TaskFlow.DTO;

import com.max.TaskFlow.model.TaskStatus;

import jakarta.validation.constraints.NotNull;

public record UpdateTaskStatusRequest(@NotNull TaskStatus status) {
}
