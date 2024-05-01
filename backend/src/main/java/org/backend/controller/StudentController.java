package org.backend.controller;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;
import org.backend.entities.Student;
import org.backend.service.StudentService;
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
@RequestMapping(path = "/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/addStudent")
    public Student addStudent(@RequestBody @Valid Student student) {
        System.out.println("inside Controller -> addStudent before processing");
        var toReturn = studentService.addStudent(student);
        System.out.println("inside Controller -> addStudents after processing and the secretary is " + student);
        return toReturn;
    }

    @PostMapping("/addStudents")
    public List<Student> addStudents(@RequestBody List<Student> students) {
        System.out.println("inside Controller -> addStudents before processing");
        var toReturn = studentService.addStudents(students);
        System.out.println("inside Controller -> addStudents after processing and the Secretaries are " + students);
        return toReturn;
    }

    @GetMapping("/getStudentById/{id}")
    public Optional<Student> getStudentById(@PathVariable int id) {
        return studentService.getStudentById(id);
    }

    @GetMapping("/getAllStudents")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @PostMapping("/updateStudent")
    public Student updateStudent(@RequestBody Student student) {
        return studentService.updateStudent(student);
    }

    @DeleteMapping("/deleteStudentById/{id}")
    public String deleteStudentById(@PathVariable int id) {
        return studentService.deleteStudentById(id);
    }
}
