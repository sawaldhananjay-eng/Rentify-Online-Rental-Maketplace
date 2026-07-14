package com.itvedant.rentify.security;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

import com.itvedant.rentify.entities.User;
import com.itvedant.rentify.repositories.UserJpa;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserJpa jpa;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        User user = jpa.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found"));

        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                Collections.singletonList(
                        new SimpleGrantedAuthority(user.getRole().name()))
        );
    }
}
