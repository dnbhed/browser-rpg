package com.legends.browserrpg.repositories.characterRepository;

import com.legends.browserrpg.models.Avatar;
import com.legends.browserrpg.projections.EmbedPlayerID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource(excerptProjection = EmbedPlayerID.class)
public interface AvatarRepository extends JpaRepository<Avatar, Long> {



}
