package org.twitter.backend.services.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.twitter.backend.data_transfer_objects.registeration_dto.RegisterationDto;
import org.twitter.backend.exceptions.Incorrect_Verification_code.IncorrectVerificationCodeException;
import org.twitter.backend.exceptions.email_already_used.EmailAlreadyUsedException;
import org.twitter.backend.exceptions.email_sending_failure.EmailSendingFailureException;
import org.twitter.backend.exceptions.user_does_not_exist_exception.UserDoesNotExistException;
import org.twitter.backend.models.application_user.ApplicationUserModel;
import org.twitter.backend.repositories.role.RoleRepository;
import org.twitter.backend.repositories.user.UserRepository;
import org.twitter.backend.services.email.EmailService;

@Service
public class UserService {
    static private String generateUsername(String name) {
        Long numericCode = (long) Math.floor(Math.random() * 1_000_000_000);
        return name + numericCode;
    }

    @Autowired
    private UserRepository userRepo;
    @Autowired
    private RoleRepository roleRepo;
    @Autowired
    EmailService emailService;

    public ApplicationUserModel registerUser(RegisterationDto reg) throws EmailAlreadyUsedException {
        var user = new ApplicationUserModel();
        user.setFirstName(reg.firstName());
        user.setLastName(reg.lastName());
        user.setEmail(reg.email());
        user.setDateOfBirth(reg.dateOfBirth());

        String generatedUsername = "";
        Boolean isSuffixCodeUnique = false;
        while (!isSuffixCodeUnique) {
            generatedUsername = generateUsername(user.getFirstName() + user.getLastName());
            isSuffixCodeUnique = !userRepo.existsByUsername(generatedUsername).get();
        }
        user.setUsername(generatedUsername);

        var roles = user.getAuthorities();
        roles.add(roleRepo.findByAuthority("ROLE_USER").get());
        user.setAuthorities(roles);
        try {
            return userRepo.save(user);
        } catch (Exception err) {
            throw new EmailAlreadyUsedException();
        }
    }

    public ApplicationUserModel updatePhoneNumber(String username, String phoneNumber)
            throws UserDoesNotExistException {
        ApplicationUserModel user = userRepo.findByUsername(username).orElseThrow(UserDoesNotExistException::new);
        user.setPhoneNumber(phoneNumber);
        return userRepo.save(user);
    }

    public void generateEmailVerificationCode(String username) {
        ApplicationUserModel user = userRepo.findByUsername(username).orElseThrow(UserDoesNotExistException::new);
        user.setVerification(generateEmailVerificationCode());
        emailService.sendEmail(user.getEmail(), "Verification code",
                "Here's your verification code: " + user.getVerification());
        userRepo.save(user);
    }

    private static Long generateEmailVerificationCode() {
        return (long) Math.floor(Math.random() * 1_000_000_000);
    }

    public ApplicationUserModel verifyEmail(String username, Long code) {
        ApplicationUserModel user = userRepo.findByUsername(username).orElseThrow(UserDoesNotExistException::new);
        if (code.equals(user.getVerification())) {
            user.setVerification(null);
            user.setEnabled(true);
            userRepo.save(user);
            return user;
        }
        throw new IncorrectVerificationCodeException();
    }
}