package org.backend.controller;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;
import org.backend.entities.Secretary;
import org.backend.service.SecretaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Validated
@RestController
@RequestMapping(path = "/secretary")
public class SecretaryController {

    @Autowired
    private SecretaryService secretaryService;

    @PostMapping("/addSecretary")
    public Secretary addSecretary(@RequestBody @Valid Secretary secretary) {
        System.out.println("inside Controller -> addSecretary before processing");
        var toReturn = secretaryService.addSecretary(secretary);
        System.out.println("inside Controller -> addSecretaries after processing and the secretary is " + secretary);
        return toReturn;
    }

    @PostMapping("/addSecretaries")
    public List<Secretary> addSecretaries(@RequestBody List<Secretary> secretaries) {
        System.out.println("inside Controller -> addSecretaries before processing");
        var toReturn = secretaryService.addSecretaries(secretaries);
        System.out.println("inside Controller -> addSecretaries after processing and the Secretaries are " + secretaries);
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

    @PostMapping("/updateSecretary")
    public Secretary updateSecretary(@RequestBody Secretary secretary) {
        return secretaryService.updateSecretary(secretary);
    }

    @DeleteMapping("/deleteSecretaryById/{id}")
    public String deleteSecretaryById(@PathVariable int id) {
        return secretaryService.deleteSecretaryById(id);
    }
}
