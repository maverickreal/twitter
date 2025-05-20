package org.twitter.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.twitter.backend.models.role.RoleModel;
import org.twitter.backend.repositories.role.RoleRepository;
import org.twitter.backend.repositories.user.UserRepository;
import org.twitter.backend.services.user.UserService;

@SpringBootApplication
public class Main {
	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);
	}

	@Bean
	CommandLineRunner run(RoleRepository roleRepo, UserRepository userRepo, UserService userService) {
		return args -> {
			roleRepo.save(new RoleModel(1, "ROLE_USER"));
			// ApplicationUserModel       user = new ApplicationUserModel();
			// user.setFirstName("John");
			// user.setLastName("Doe");
			// userService.registerUser(user);
			// var roles = new HashSet<RoleModel>();
			// roles.add(roleRepo.findByAuthority("ROLE_USER").get());
			// user.setAuthorities(roles);
			// userRepo.save(user);
		};
	}
}