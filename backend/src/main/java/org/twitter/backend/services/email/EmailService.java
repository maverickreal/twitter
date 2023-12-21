package org.twitter.backend.services.email;

import java.io.ByteArrayOutputStream;
import java.util.Properties;
import javax.mail.Session;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.twitter.backend.exceptions.email_sending_failure.EmailSendingFailureException;
import com.google.api.services.gmail.Gmail;
import com.google.api.services.gmail.model.Message;
import com.google.common.io.BaseEncoding;
import javax.mail.Message.RecipientType;

@Service
public class EmailService {
    @Autowired
    private Gmail gmail;

    public void sendEmail(String toAddress, String subject, String content) throws EmailSendingFailureException {
        var session = Session.getInstance(new Properties());
        var email = new MimeMessage(session);
        try {
            email.setFrom(new InternetAddress("adity.saxena09@gmail.com"));
            email.addRecipient(RecipientType.TO, new InternetAddress(toAddress));
            email.setSubject(subject);
            email.setText(content);
            var buffer = new ByteArrayOutputStream();
            email.writeTo(buffer);
            var rawMessageBytes = buffer.toByteArray();
            var encodedEmail = BaseEncoding.base64Url().omitPadding().encode(rawMessageBytes);
            var message = new Message();
            message.setRaw(encodedEmail);
            gmail.users().messages().send("me", message).execute();
        } catch (Exception err) {
            throw new EmailSendingFailureException();
        }
    }
}