package com.max.TaskFlow.DTO;

import java.time.LocalDateTime;

public record TaskResponse(Long id,
                           String name,
                           String description,
                           LocalDateTime dateCreated,
                           String status,
                           Long boardId,
                           Long userId) {}
