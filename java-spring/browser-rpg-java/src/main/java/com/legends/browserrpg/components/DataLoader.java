package com.legends.browserrpg.components;

import com.legends.browserrpg.models.Avatar;
import com.legends.browserrpg.models.Enemy;
import com.legends.browserrpg.models.Player;
import com.legends.browserrpg.repositories.characterRepository.AvatarRepository;
import com.legends.browserrpg.repositories.enemyRepository.EnemyRepository;
import com.legends.browserrpg.repositories.playerRepository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PlayerRepository playerRepository;

    @Autowired
    AvatarRepository avatarRepository;

    @Autowired
    EnemyRepository enemyRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args){
        Player player = new Player("Greg");
        playerRepository.save(player);

        Avatar character = new Avatar("Steve", player, 1);
        avatarRepository.save(character);

        Enemy enemy = new Enemy("Michael 'the Job' Forbes");
        enemyRepository.save(enemy);
    }

}
