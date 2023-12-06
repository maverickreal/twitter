package org.twitter.backend.exceptions.email_already_used;

public class EmailAlreadyUsedException extends RuntimeException {
    private final static Long serialVersionUid = 1L;

    public EmailAlreadyUsedException() {
        super("The provided email is already under use.");
    }
}