package org.twitter.backend.controllers.authentication_controller;

import java.util.LinkedHashMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.twitter.backend.data_transfer_objects.registeration_dto.RegisterationDto;
import org.twitter.backend.exceptions.email_already_used.EmailAlreadyUsedException;
import org.twitter.backend.exceptions.email_sending_failure.EmailSendingFailureException;
import org.twitter.backend.exceptions.user_does_not_exist_exception.UserDoesNotExistException;
import org.twitter.backend.models.application_user.ApplicationUserModel;
import org.twitter.backend.services.user.UserService;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    @Autowired
    private UserService userService;

    @ExceptionHandler({ EmailSendingFailureException.class })
    public ResponseEntity<String> handleEmailSendingFailureException(EmailSendingFailureException err) {
        return new ResponseEntity<>(err.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler({ EmailAlreadyUsedException.class })
    public ResponseEntity<String> handleEmailAlreadyUsedException(EmailAlreadyUsedException err) {
        return ResponseEntity.badRequest().body(err.getMessage());
    }

    @ExceptionHandler({ UserDoesNotExistException.class })
    public ResponseEntity<String> handleUserDoesNotExistException(UserDoesNotExistException err) {
        return ResponseEntity.badRequest().body(err.getMessage());
    }

    @PostMapping("/register")
    public ApplicationUserModel registerUser(@RequestBody RegisterationDto user) {
        return userService.registerUser(user);
    }

    @PatchMapping("/update/phone_number")
    public ApplicationUserModel updatePhoneNumber(@RequestBody LinkedHashMap<String, String> body) {
        String username = body.get("username"), phoneNumber = body.get("phoneNumber");
        return userService.updatePhoneNumber(username, phoneNumber);
    }

    @PostMapping("/email/code")
    public ResponseEntity<String> createEmailVerificationCode(@RequestBody LinkedHashMap<String, String> body) {
        userService.generateEmailVerificationCode(body.get("username"));
        return new ResponseEntity<>("Email verification code sent", HttpStatus.OK);
    }
}