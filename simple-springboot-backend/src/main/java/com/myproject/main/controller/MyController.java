package com.myproject.main.controller;

import java.util.Date;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("message")
@CrossOrigin(origins = "http://localhost:4200")
public class MyController {
	
	@GetMapping("")
	public static String getMessage() {
		return "Hello from backend !!";
	}
	
}
