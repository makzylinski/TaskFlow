package com.max.TaskFlow;

import com.max.TaskFlow.repository.TaskRepository;
import com.max.TaskFlow.service.TaskService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TaskFlowApplication {

	public static void main(String[] args) {
		SpringApplication.run(TaskFlowApplication.class, args);
	}

	@Bean
	CommandLineRunner seedTasks(TaskRepository taskRepository, TaskService taskService) {
		return args -> {
			if (taskRepository.count() == 0) {
				taskService.initTestTasks();
			}
		};
	}

}