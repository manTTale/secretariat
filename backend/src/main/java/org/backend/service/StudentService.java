package org.backend.service;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;
import org.backend.entities.Student;
import org.backend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.PessimisticLockingFailureException;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

    public List<Student> addStudents(List<Student> students) {
        return studentRepository.saveAll(students);
    }

    public Optional<Student> getStudentById(int id) {
        return studentRepository.findById(id);
    }

    public CompletableFuture<List<Student>> getAllStudents() {
        return CompletableFuture.completedFuture(studentRepository.findAll());
    }

    public Student updateStudent(Student student) {
        try {
            var studentToUpdate = studentRepository
                    .findByIdWithLock(student.getId())
                    .orElseThrow(() -> new RuntimeException("Student was not found"));
            studentToUpdate.setLastName(student.getLastName());
            studentToUpdate.setFirstName(student.getFirstName());
            studentToUpdate.setSpecialization(student.getSpecialization());
            studentToUpdate.setGroupNumber(student.getGroupNumber());
            studentToUpdate.setStudentId(student.getStudentId());
            return studentRepository.save(studentToUpdate);
        } catch (PessimisticLockingFailureException e) {
            throw new RuntimeException("Lock wasn't acquired for the operation", e);
        }
    }

    public String deleteStudentById(int id) {
        studentRepository.deleteById(id);
        return "The user with the id of " + id + " was deleted";
    }
}
