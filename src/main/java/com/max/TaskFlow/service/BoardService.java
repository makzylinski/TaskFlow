package com.max.TaskFlow.service;

import com.max.TaskFlow.DTO.BoardResponse;
import com.max.TaskFlow.DTO.CreateBoardRequest;
import com.max.TaskFlow.model.Board;
import com.max.TaskFlow.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BoardService {
    @Autowired
    BoardRepository boardRepository;

    @Transactional(readOnly = true)
    public List<BoardResponse> getBoards() {
        return boardRepository.findAll().stream()
                .map(b -> new BoardResponse(
                        b.getId(),
                        b.getName(),
                        b.getDescription(),
                        b.getDateCreated(),
                        b.getTasks().size()
                )).toList();
    }

    public Board generateBoard(CreateBoardRequest request) {
        Board board = new Board(request.name(), request.description());
        return boardRepository.save(board);
    }
}
