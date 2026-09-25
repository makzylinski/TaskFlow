package com.max.TaskFlow.DTO;

import java.time.LocalDateTime;

// DTO/BoardResponse.java
public record BoardResponse(
        Long id,
        String name,
        String description,
        LocalDateTime dateCreated,
        int taskCount
) {}