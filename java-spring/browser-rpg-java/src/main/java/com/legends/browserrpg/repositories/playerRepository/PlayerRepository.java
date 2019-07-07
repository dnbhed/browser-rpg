package com.legends.browserrpg.repositories.playerRepository;

import com.legends.browserrpg.models.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {



}
