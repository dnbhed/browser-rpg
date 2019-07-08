package com.legends.browserrpg.repositories.characterRepository;

import com.legends.browserrpg.models.Avatar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@Repository
public interface AvatarRepository extends JpaRepository<Avatar, Long> {



}
