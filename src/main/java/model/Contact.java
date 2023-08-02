package model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "contacts")

public class Contact {

    @Id
    @SequenceGenerator(name = "my_seq", sequenceName = "seq1", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "my_seq")
    private Long id;

    @NonNull
    @Column(name = "first_name")
    @Size(min = 2, max = 50)
    private String firstName;

    @NonNull
    @Column(name = "last_name")
    @Size(min = 2, max = 50)
    private String lastName;

    @NonNull
    @Column(name = "code_name")
    @Size(min = 2, max = 100)
    private String codeName;

    @NonNull
    @Column(name = "phone")
    @Size(min = 2, max = 30)
    private String phone;

}
