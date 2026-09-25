package com.max.TaskFlow.repository;

import com.max.TaskFlow.model.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {
}
