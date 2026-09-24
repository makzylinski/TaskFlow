package com.max.TaskFlow.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Task {
    @Id()
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long taskId;
    private String name;
    private String description;
    private LocalDateTime dateCreated;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "assignee_id")
    private User assignee;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_id")
    private Board board;

    public Task(String name, String description) {
        this.name = name;
        this.description = description;
    }

}
