# NYFIX ShipIt Template Application

## Intro

This project is a sample/bootstrap application for the purpose of writing a NYFIX Portal app from scratch.

It includes:
- backend:
  [Spring Boot](https://projects.spring.io/spring-boot/), authentication with Sentry OAuth server using spring-security

- frontend:
  Simple Javascript app written using AngularJS 1.X, authentication layer provided via oauth-sentry webjar(hosted on ul-central), some css.

## Application.yml configuration explained

Spring boot encourages to use [yml configuration](http://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-external-config.html#boot-features-external-config-yaml)
```
spring:
  application:
    name: app-shipit-template ---> Name of your app

server:
  port: 9292 ---> port on which tomcat will be started
```
```
  clientId: 12345678-1234-1234-1234-012345678901 ---> Change it with the Client Id from the above step
  clientSecret: 12345678-1234-1234-1234-012345678901 ---> Change it with the Client Secret from the above step
  accessTokenUri: https://login-sandbox.nyfix.com/sentrygw/api/token/access_token ---> Sentry access token URL
  userAuthorizationUri: https://login-sandbox.nyfix.com/sentrygw/api/oauth2/authorize ---> Sentry OAuth authorization URL
resource:
  userInfoUri: https://login-sandbox.nyfix.com/sentrygw/api/token/resource ---> Sentry User Info URI
```

### How to build

Prerequisite: You need to have maven installed

- run `mvnw install` in app-shipit-template folder, since the packaging is 'jar', an executable app-shipit-template-1.0.0-SNAPSHOT.jar is built and copied to generated target folder 

## Run the app
- Go to the target folder of  app-shipit-template and run 'java -jar app-shipit-template-1.0.0-SNAPSHOT.jar', since spring boot comes with inbuilt tomcat, the app will be deployed and fired up in tomcat

## Lauch the app from Portal 
- Login into [NYFIX portal sandbox](https://portal-sandbox.nyfix.com/x/) and click on your app

## Questions/Issues

- If you have any questions or if you come accross any errors etc, please send an email to TBD-nyfixportal@ullink.com 
