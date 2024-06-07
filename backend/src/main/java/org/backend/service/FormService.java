package org.backend.service;

import org.backend.entities.Form;
import org.backend.entities.WebFormTemplate;
import org.backend.exceptions.ResourceNotFoundException;
import org.backend.repository.FormRepository;
import org.backend.repository.WebFormTemplateRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormService {

    private final FormRepository formRepository;

    private final WebFormTemplateRepository webFormTemplateRepository;

    public FormService(FormRepository formRepository, WebFormTemplateRepository webFormTemplateRepository) {
        this.formRepository = formRepository;
        this.webFormTemplateRepository = webFormTemplateRepository;
    }

    public List<WebFormTemplate> getAllForms() {
        return webFormTemplateRepository.findAll();
    }

    public WebFormTemplate getFormById(Integer id) {
        return webFormTemplateRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Form not found"));
    }

    public WebFormTemplate createForm(WebFormTemplate formTemplate) {
        return webFormTemplateRepository.save(formTemplate);
    }

    public WebFormTemplate updateForm(Integer id, WebFormTemplate formTemplate) {
        WebFormTemplate existingForm = getFormById(id);
        existingForm.setCode(formTemplate.getCode());
        existingForm.setName(formTemplate.getName());
        existingForm.setDescription(formTemplate.getDescription());
        existingForm.setForm(formTemplate.getForm());
        return webFormTemplateRepository.save(existingForm);
    }

    public void deleteForm(Integer id) {
        webFormTemplateRepository.deleteById(id);
    }

    public Form submitForm(Form form) {
        return formRepository.save(form);
    }

    public WebFormTemplate getFormTemplateByCode(String code) {
        return webFormTemplateRepository.findByCode(code);
    }
}
