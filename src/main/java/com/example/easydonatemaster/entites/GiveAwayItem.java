package com.example.easydonatemaster.entites;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class GiveAwayItem implements Serializable {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String productName;
    private boolean availability;
    private String pickUpLocation;
    private String description;
    @ManyToOne
    private User user;
}
