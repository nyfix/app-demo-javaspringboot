# NYFIX ShipIt Template Application

## Intro

This project is a sample/bootstrap application for the purpose of writing a NYFIX Portal app from scratch.

It includes:
- backend:
  [Spring Boot](https://projects.spring.io/spring-boot/), authentication with Sentry OAuth server using spring-security

- frontend:
  Simple Javascript app written using AngularJS 1.X, authentication layer provided via oauth-sentry webjar(hosted on ul-central), some css.
 
`little about sentry`
Sentry is a multi-tenant OAuth2 Authorization server with OpenID Connect capabilities provided by one of the Ullink vendors.


## NYFIX Portal Registration

`If you do not have a login for devcenter, please send an email to TBD-nyfixportal@ullink.com`
- Login into [NYFIX dev center](https://devcenter-sandbox.nyfix.com/x)
- Go to `MY APPS` and click on `Create New Application`
- Provide the required details
 ![Screen_Shot_2016-11-21_at_4.45.01_PM](/uploads/3554e8a38cdaf553c5f11ea7fa5cd333/Screen_Shot_2016-11-21_at_4.45.01_PM.png)

- Upload the logo image for your app(Logo should be at least 200x200 px and square, sample logo below)

![NYFIX_API_Portal_512](/uploads/fb478f406c4427ba75cf510ae0007ce2/NYFIX_API_Portal_512.png)

- Provide the Sandbox Launch URI(`Note:` If you want to run this app locally, since 9292 has already been regisred with sentry of sandbox-dev, change the port in Application.yml and provide http://127.0.0.1:`port`/login as Sandbox Launch URI)
![Screen_Shot_2016-11-21_at_5.02.11_PM](/uploads/624c6d7f65c1e5165dde6c8ea0dd846b/Screen_Shot_2016-11-21_at_5.02.11_PM.png)
- Save the app, if the app was successfully registered, a popup will be shown with client ID and secret (write them down, you can't get them again)
 ![Screen_Shot_2016-11-21_at_5.00.05_PM](/uploads/acf8c13a599de3a9a49d9a2a0dafb89e/Screen_Shot_2016-11-21_at_5.00.05_PM.png)


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
