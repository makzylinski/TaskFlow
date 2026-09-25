package com.max.TaskFlow.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum TaskStatus {
    @JsonProperty("To do") TO_DO,
    @JsonProperty("In progress") IN_PROGRESS,
    @JsonProperty("Review") REVIEW,
    @JsonProperty("Done") DONE
}