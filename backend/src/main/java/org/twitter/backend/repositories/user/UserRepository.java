package org.twitter.backend.repositories.user;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.twitter.backend.models.application_user.ApplicationUserModel;

@Repository
public interface UserRepository extends JpaRepository<ApplicationUserModel, Integer> {
    Optional<ApplicationUserModel> findByUsername(String username);

    Optional<Boolean> existsByUsername(String username);
}