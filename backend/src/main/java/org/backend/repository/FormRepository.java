package org.backend.repository;

import org.backend.entities.Form;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface FormRepository extends JpaRepository<Form, Integer>, QuerydslPredicateExecutor<Form> {
}
