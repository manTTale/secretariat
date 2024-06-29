package org.backend.service;

import java.util.List;
import java.util.Optional;
import org.backend.entities.Secretary;
import org.backend.entities.StudentSubmission;
import org.backend.enums.DocumentStatus;
import org.backend.repository.SecretaryRepository;
import org.backend.repository.StudentSubmissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SecretaryService {

    @Autowired
    private SecretaryRepository secretaryRepository;

    @Autowired
    private StudentSubmissionRepository studentSubmissionRepository;


    public Secretary addSecretary(Secretary secretary) {
        var toReturn = secretaryRepository.save(secretary);
        return toReturn;
    }

    public List<Secretary> addSecretaries(List<Secretary> secretaries) {
        var toReturn = secretaryRepository.saveAll(secretaries);
        return toReturn;
    }

    public Optional<Secretary> getSecretaryById(int id) {
        return secretaryRepository.findById(id);
    }

    public List<Secretary> getAllSecretaries() {
        return secretaryRepository.findAll();
    }

    public Secretary updateSecretary(Secretary secretary) {
        var secretaryToUpdate = secretaryRepository.getReferenceById(secretary.getId());
        secretaryToUpdate.setLastName(secretary.getLastName());
        secretaryToUpdate.setFirstName(secretary.getFirstName());
        secretaryToUpdate.setUserName(secretary.getUserName());
        secretaryToUpdate.setPassword(secretary.getPassword());

        var toReturn = secretaryRepository.save(secretaryToUpdate);
        return toReturn;
    }

    public String deleteSecretaryById(int id) {
        secretaryRepository.deleteById(id);
        return "The user with the id of " + id + " was deleted";
    }

    public Optional<StudentSubmission> updateDocumentStatus(Integer submissionId, String newStatus) {
        Optional<StudentSubmission> submissionOpt = studentSubmissionRepository.findById(submissionId);
        if (submissionOpt.isPresent()) {
            StudentSubmission submission = submissionOpt.get();
            submission.setDocumentStatus(DocumentStatus.valueOf(newStatus));
            studentSubmissionRepository.save(submission);
            return Optional.of(submission);
        }
        return Optional.empty();
    }
}
