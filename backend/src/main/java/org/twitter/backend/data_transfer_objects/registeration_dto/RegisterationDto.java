package org.twitter.backend.data_transfer_objects.registeration_dto;

import java.sql.Date;

public record RegisterationDto(
        String firstName, String lastName, String email,
        Date dateOfBirth) {
}