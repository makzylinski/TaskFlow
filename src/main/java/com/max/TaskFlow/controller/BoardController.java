package com.max.TaskFlow.controller;

import com.max.TaskFlow.model.Board;
import com.max.TaskFlow.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class BoardController {

    @Autowired
    BoardService boardService;

    @GetMapping("/boards")
    public ResponseEntity<List<Board>> getAllBoards() {
        List<Board> boards = boardService.getBoards();

        return new ResponseEntity<>(boards, HttpStatus.OK);
    }
}
