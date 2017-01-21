package com.ullink.nyfix.shipit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.ullink.nyfix")
public class ShipItTemplateApp
{
    public static void main(String[] args)
    {
        SpringApplication.run(ShipItTemplateApp.class, args);
    }
}
