package com.legends.browserrpg.projections;

import com.legends.browserrpg.models.Avatar;
import com.legends.browserrpg.models.Player;
import org.springframework.data.rest.core.config.Projection;

@Projection(types={Avatar.class})
public interface EmbedPlayerID {

    Long getId();

    String getName();

    int getMaxHP();

    int getCurrentHP();

    int getPower();

    int getScore();

    Boolean getAlive();

    int getSpriteID();

    PlayerID getPlayer();

    interface PlayerID {
        Long getId();
    }

}
