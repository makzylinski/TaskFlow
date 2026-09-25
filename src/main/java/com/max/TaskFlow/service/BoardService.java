package com.max.TaskFlow.service;

import com.max.TaskFlow.model.Board;
import com.max.TaskFlow.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {
    @Autowired
    BoardRepository boardRepository;

    public List<Board> getBoards() {
        return boardRepository.findAll();
    }
}
