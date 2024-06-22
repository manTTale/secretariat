package org.backend.repository;

import jakarta.persistence.LockModeType;
import jakarta.persistence.QueryHint;
import java.util.Optional;
import org.backend.entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;

public interface StudentRepository extends JpaRepository<Student, Integer> {

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT s FROM student s WHERE s.id = :id")
    @QueryHints({@QueryHint(name = "javax.persistence.lock.timeout", value = "3000")})
    Optional<Student> findByIdWithLock(int id);

}
