package com.legends.browserrpg.models;

import javax.persistence.*;

@Entity
@Table(name = "characters")
public class Character {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "max_hp")
    private int maxHP;

    @Column(name = "current_hp")
    private int currentHP;

    @Column(name = "power")
    private int power;

    @Column(name = "score")
    private int score;

    @Column(name = "alive")
    private Boolean alive;

    public Character() {
    }

    public Character(String name) {
        this.name = name;
        this.maxHP = 100;
        this.currentHP = 100;
        this.power = 50;
        this.score = 0;
        this.alive = true;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMaxHP() {
        return maxHP;
    }

    public void setMaxHP(int maxHP) {
        this.maxHP = maxHP;
    }

    public int getCurrentHP() {
        return currentHP;
    }

    public void setCurrentHP(int currentHP) {
        this.currentHP = currentHP;
    }

    public int getPower() {
        return power;
    }

    public void setPower(int power) {
        this.power = power;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public Boolean getAlive() {
        return alive;
    }

    public void setAlive(Boolean alive) {
        this.alive = alive;
    }
}
