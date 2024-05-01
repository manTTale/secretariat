package org.backend.repository;

import org.backend.entities.Secretary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SecretaryRepository extends JpaRepository<Secretary, Integer> {


}
