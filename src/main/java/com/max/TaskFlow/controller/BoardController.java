package com.max.TaskFlow.controller;

import com.max.TaskFlow.DTO.BoardResponse;
import com.max.TaskFlow.DTO.CreateBoardRequest;
import com.max.TaskFlow.model.Board;
import com.max.TaskFlow.service.BoardService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class BoardController {

    @Autowired
    BoardService boardService;

    @GetMapping("/boards")
    public ResponseEntity<List<BoardResponse>> getAllBoards() {
        List<BoardResponse> boards = boardService.getBoards();

        return new ResponseEntity<>(boards, HttpStatus.OK);
    }

    @PostMapping("/new-board")
    public ResponseEntity<Board> createNewBoard(@Valid @RequestBody CreateBoardRequest request) {
        Board board = boardService.generateBoard(request);
        return new ResponseEntity<>(board, HttpStatus.CREATED);
    }
}
