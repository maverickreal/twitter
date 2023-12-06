package org.twitter.backend.exceptions.Incorrect_Verification_code;

public class IncorrectVerificationCodeException extends RuntimeException {
    private static final Long serialVersionUID = 1L;

    public IncorrectVerificationCodeException() {
        super("The provided code and generated code do not match.");
    }
}