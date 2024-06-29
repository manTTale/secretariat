package org.backend.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="student")
@Table(name="student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id", updatable=false, nullable=false)
    private Integer id;

    @NotEmpty
    @Column(name="last_name")
    private String lastName;

    @Column(name="first_name")
    private String firstName;

    @Column(name="specialization")
    private String specialization;

    @Column(name="group_number")
    private String groupNumber;

    @Column(name="matriculation_number")
    private String matriculationNumber;

    @Column(name="user_name")
    private String userName;

    @Column(name="password")
    private String password;

}
