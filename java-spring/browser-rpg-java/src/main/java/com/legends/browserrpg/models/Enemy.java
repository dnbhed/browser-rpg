package com.legends.browserrpg.models;

import javax.persistence.*;

@Entity
@Table(name = "enemies")
public class Enemy {

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

    @Column(name = "alive")
    private boolean alive;

    public Enemy(String name) {
        this.name = name;
        this.maxHP = 120;
        this.currentHP = maxHP;
        this.power = 30;
        this.alive = true;
    }

    public Enemy() {
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

    public int getPower() {
        return power;
    }

    public void setPower(int power) {
        this.power = power;
    }

    public int getCurrentHP() {
        return currentHP;
    }

    public void setCurrentHP(int currentHP) {
        this.currentHP = currentHP;
    }

    public boolean isAlive() {
        return alive;
    }

    public void setAlive(boolean alive) {
        this.alive = alive;
    }
}
