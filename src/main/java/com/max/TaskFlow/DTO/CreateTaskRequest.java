package com.max.TaskFlow.DTO;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CreateTaskRequest(@NotBlank
                                String name,
                                String description,
                                @NotNull
                                Long boardId) { }
