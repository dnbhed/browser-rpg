package com.legends.browserrpg.repositories.enemyRepository;

import com.legends.browserrpg.models.Enemy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@Repository
public interface EnemyRepository extends JpaRepository<Enemy, Long> {
}
