package org.twitter.backend.exceptions.user_does_not_exist_exception;

public class UserDoesNotExistException extends RuntimeException {
    public UserDoesNotExistException() {
        super("User does not exist.");
    }
}