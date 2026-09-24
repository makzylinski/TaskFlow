package com.max.TaskFlow.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    private int taskId;
    private String name;
    private String description;
    private LocalDateTime dateCreated;

}
