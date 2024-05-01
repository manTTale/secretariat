package org.backend.service;

import java.util.List;
import java.util.Optional;
import org.backend.entities.Secretary;
import org.backend.repository.SecretaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SecretaryService {

    @Autowired
    private SecretaryRepository secretaryRepository;

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
        var toReturn = secretaryRepository.save(secretaryToUpdate);
        return toReturn;
    }

    public String deleteSecretaryById(int id) {
        secretaryRepository.deleteById(id);
        return "The user with the id of " + id + " was deleted";
    }
}
