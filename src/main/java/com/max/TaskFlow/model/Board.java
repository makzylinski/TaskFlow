package com.max.TaskFlow.model;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Board {
    private int boardId;
    private String name;
    private String description;
    private LocalDateTime dateCreated;
}
