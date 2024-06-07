package org.backend.repository;

import org.backend.entities.StudentSubmission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentSubmissionRepository extends JpaRepository<StudentSubmission, Integer>, QuerydslPredicateExecutor<StudentSubmission> {

}
