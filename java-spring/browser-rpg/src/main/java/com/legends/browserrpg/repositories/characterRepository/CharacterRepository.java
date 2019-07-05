package com.legends.browserrpg.repositories.characterRepository;

import com.legends.browserrpg.models.Avatar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CharacterRepository extends JpaRepository<Avatar, Long> {



}
