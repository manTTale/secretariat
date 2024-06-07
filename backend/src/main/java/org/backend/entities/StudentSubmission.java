package org.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.backend.enums.DocumentStatus;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "student_submissions")
public class StudentSubmission {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", updatable = false, nullable = false)
    private Integer id;

    @Lob
    @Column(name = "submission_data", columnDefinition = "longtext")
    private String submissionData;

    @Column(name = "form_code")
    private String formCode;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "student_id")
    private Student student;

    @Enumerated(EnumType.STRING)
    @Column(name = "document_status")
    private DocumentStatus documentStatus;;

    public StudentSubmission(String submissionData, String formCode ) {
        this.submissionData = submissionData;
        this.formCode = formCode;
    }
}
