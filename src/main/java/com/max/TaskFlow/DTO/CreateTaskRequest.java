package com.max.TaskFlow.DTO;

import jakarta.validation.constraints.NotBlank;

public record CreateTaskRequest(@NotBlank
                                String name,
                                String description) { }
