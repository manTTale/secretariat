package org.backend.service;

import java.util.List;
import java.util.Optional;
import org.backend.entities.Student;
import org.backend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
    
    @Autowired
    private StudentRepository studentRepository;

    public Student addStudent(Student student) {
        var toReturn = studentRepository.save(student);
        return toReturn;
    }

    public List<Student> addStudents(List<Student> students) {
        var toReturn = studentRepository.saveAll(students);
        return toReturn;
    }

    public Optional<Student> getStudentById(int id) {
        return studentRepository.findById(id);
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student updateStudent(Student student) {
        var studentToUpdate = studentRepository.getReferenceById(student.getId());
        studentToUpdate.setLastName(student.getLastName());
        studentToUpdate.setFirstName(student.getFirstName());
        studentToUpdate.setSpecialization(student.getSpecialization());
        studentToUpdate.setGroupNumber(student.getGroupNumber());
        studentToUpdate.setMatriculationNumber(student.getMatriculationNumber());
        var toReturn = studentRepository.save(studentToUpdate);
        return toReturn;
    }

    public String deleteStudentById(int id) {
        studentRepository.deleteById(id);
        return "The user with the id of " + id + " was deleted";
    }
}
