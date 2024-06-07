package org.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "form_template")
public class Form {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id", updatable=false, nullable=false)
    private Integer id;

    @Lob
    @Column(name = "data", columnDefinition = "longtext")
    private String data;

    public Form(String data) {
        this.data = data;
    }

    public Form(Form form) {
        this.data = form.data;
    }
}
