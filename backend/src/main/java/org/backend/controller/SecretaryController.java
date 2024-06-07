package org.backend.controller;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;
import org.backend.entities.Secretary;
import org.backend.entities.StudentSubmission;
import org.backend.service.SecretaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Validated
@RestController
@RequestMapping(path = "/secretary")
@CrossOrigin("http://localhost:4200")
public class SecretaryController {

    @Autowired
    private SecretaryService secretaryService;

    @PostMapping("/addSecretary")
    public Secretary addSecretary(@RequestBody @Valid Secretary secretary) {
        var toReturn = secretaryService.addSecretary(secretary);
        return toReturn;
    }

    @PostMapping("/addSecretaries")
    public List<Secretary> addSecretaries(@RequestBody List<Secretary> secretaries) {
        var toReturn = secretaryService.addSecretaries(secretaries);
        return toReturn;
    }

    @GetMapping("/getSecretaryById/{id}")
    public Optional<Secretary> getSecretaryById(@PathVariable int id) {
        return secretaryService.getSecretaryById(id);
    }

    @GetMapping("/getAllSecretaries")
    public List<Secretary> getAllSecretaries() {
        return secretaryService.getAllSecretaries();
    }

    @PutMapping("/updateSecretary")
    public Secretary updateSecretary(@RequestBody Secretary secretary) {
        return secretaryService.updateSecretary(secretary);
    }

    @DeleteMapping("/deleteSecretaryById/{id}")
    public String deleteSecretaryById(@PathVariable int id) {
        return secretaryService.deleteSecretaryById(id);
    }

    @PutMapping("/update-status/{id}")
    public ResponseEntity<StudentSubmission> updateDocumentStatus(@PathVariable Integer id, @RequestParam String status) {
        return secretaryService.updateDocumentStatus(id, status)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
