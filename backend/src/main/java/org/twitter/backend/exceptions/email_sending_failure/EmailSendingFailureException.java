package org.twitter.backend.exceptions.email_sending_failure;

public class EmailSendingFailureException extends RuntimeException {
    private static final Long serialVersionUID = 1L;

    public EmailSendingFailureException() {
        super("A failure occured while sending an email.");
    }
}