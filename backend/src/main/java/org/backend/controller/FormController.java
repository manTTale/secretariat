package org.backend.controller;

import org.backend.entities.Form;
import org.backend.entities.WebFormTemplate;
import org.backend.service.FormService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Validated
@RestController
@RequestMapping("/api/forms")
@CrossOrigin("*")
public class FormController {

    private final FormService formService;

    public FormController(FormService formService) {
        this.formService = formService;
    }

    @GetMapping
    public List<WebFormTemplate> getAllForms() {
        return formService.getAllForms();
    }

    @GetMapping("/{id}")
    public WebFormTemplate getFormById(@PathVariable Integer id) {
        return formService.getFormById(id);
    }

    @PostMapping
    public WebFormTemplate createForm(@RequestBody WebFormTemplate formTemplate) {
        return formService.createForm(formTemplate);
    }

    @PutMapping("/{id}")
    public WebFormTemplate updateForm(@PathVariable Integer id, @RequestBody WebFormTemplate formTemplate) {
        return formService.updateForm(id, formTemplate);
    }

    @DeleteMapping("/{id}")
    public void deleteForm(@PathVariable Integer id) {
        formService.deleteForm(id);
    }

    @PostMapping("/submit")
    public Form submitForm(@RequestBody Form form) {
        return formService.submitForm(form);
    }

    @GetMapping("/code/{code}")
    public WebFormTemplate getFormTemplateByCode(@PathVariable String code) {
        return formService.getFormTemplateByCode(code);
    }
}
