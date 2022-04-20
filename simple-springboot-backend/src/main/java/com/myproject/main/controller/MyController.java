package com.myproject.main.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myproject.main.pojo.Body;

@RestController
@RequestMapping("message")
@CrossOrigin(origins = "http://localhost:4200")
public class MyController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(MyController.class);
	
	@GetMapping("")
	public static String getMessage() {
		LOGGER.info("Inside MyController.MyController.getMessage() at {}", System.currentTimeMillis());
		return "Hello from backend !!";
	}
	
	@PostMapping("")
	public static String postMessage(@RequestBody Body obj) {
		LOGGER.info("Inside MyController.MyController.postMessage() at {}", System.currentTimeMillis());
		return obj.toString();
	}
	
}
