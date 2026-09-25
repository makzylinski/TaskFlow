package com.max.TaskFlow.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private LocalDateTime dateCreated;
    @ManyToMany(mappedBy = "boards")
    private Set<User> members = new HashSet<>();
    @OneToMany(mappedBy = "board")
    private List<Task> tasks = new ArrayList<>();

    public Board(String name, String description) {
        this.name = name;
        this.description = description;
        this.dateCreated = LocalDateTime.now();
    }
}
