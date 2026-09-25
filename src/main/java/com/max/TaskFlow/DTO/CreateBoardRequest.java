package com.max.TaskFlow.DTO;

import jakarta.validation.constraints.NotBlank;

public record CreateBoardRequest(@NotBlank
                                 String name,
                                 String description) {
}
