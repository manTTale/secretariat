package org.backend.controller;

import org.backend.entities.StudentSubmission;
import org.backend.service.SubmissionService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Validated
@RestController
@RequestMapping("/api/submissions")
@CrossOrigin("*")
public class SubmissionController {

    private final SubmissionService submissionService;

    public SubmissionController(SubmissionService submissionService) {
        this.submissionService = submissionService;
    }

    @GetMapping
    public List<StudentSubmission> getAllSubmissions() {
        return submissionService.getAllSubmissions();
    }

    @GetMapping("/{id}")
    public StudentSubmission getSubmissionById(@PathVariable Integer id) {
        return submissionService.getSubmissionById(id);
    }

    @PostMapping
    public StudentSubmission createSubmission(@RequestBody StudentSubmission request) {
        return submissionService.createSubmission(request.getSubmissionData(), request.getFormCode());
    }

    @DeleteMapping("/{id}")
    public void deleteSubmission(@PathVariable Integer id) {
        submissionService.deleteSubmission(id);
    }
}
