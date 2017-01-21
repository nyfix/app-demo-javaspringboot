package com.ullink.nyfix.shipit.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.ullink.nyfix.shipit.controller.bean.ShipitappBean;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/shipit")
public class ShipitappsController
{

    private final Logger logger = LoggerFactory.getLogger(getClass());

    @RequestMapping(method = RequestMethod.GET, value = "/shipitapps", produces = "application/json")
    public List<ShipitappBean> shipitapps(Principal principal)
    {
        logger.info("Received request to GET /shipitapps from {}", principal.getName());
        List<ShipitappBean> beanList = new ArrayList<>();
        beanList.add(new ShipitappBean(1, "My first awesome Shipit App"));
        beanList.add(new ShipitappBean(2, "My second awesome Shipit App"));
        return beanList;
    }
}
