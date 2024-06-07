package org.backend.service;

import org.backend.entities.Student;
import org.backend.entities.StudentSubmission;
import org.backend.enums.DocumentStatus;
import org.backend.repository.StudentRepository;
import org.backend.repository.StudentSubmissionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubmissionService {

    private final StudentSubmissionRepository studentSubmissionRepository;

    private final StudentRepository studentRepository;

    public SubmissionService(StudentSubmissionRepository studentSubmissionRepository, StudentRepository studentRepository) {
        this.studentSubmissionRepository = studentSubmissionRepository;
        this.studentRepository = studentRepository;
    }

    public List<StudentSubmission> getAllSubmissions() {
        return studentSubmissionRepository.findAll();
    }

    public StudentSubmission getSubmissionById(Integer id) {
        return studentSubmissionRepository.findById(id).orElse(null);
    }

    public StudentSubmission saveSubmission(StudentSubmission submission) {
        return studentSubmissionRepository.save(submission);
    }

    public void deleteSubmission(Integer id) {
        studentSubmissionRepository.deleteById(id);
    }

    public StudentSubmission createSubmission(String submissionData, String formCode) {
        StudentSubmission submission = new StudentSubmission(submissionData, formCode);
        submission.setDocumentStatus(DocumentStatus.DEPUS);
        return studentSubmissionRepository.save(submission);
    }
}
