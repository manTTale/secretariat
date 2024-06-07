package org.backend.repository;

import org.backend.entities.WebFormTemplate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface WebFormTemplateRepository extends JpaRepository<WebFormTemplate, Integer>, QuerydslPredicateExecutor<WebFormTemplate> {
    WebFormTemplate findByCode(String code);
}
