package com.myproject.main.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myproject.main.entity.Person;
import com.myproject.main.pojo.PersonInfo;
import com.myproject.main.service.PersonService;

@RestController
@RequestMapping("api")
@CrossOrigin(origins = "http://arpan-fe.s3-website-us-east-1.amazonaws.com")
public class PersonController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(PersonController.class);
	
	@Autowired
	private PersonService serv;
	
	@GetMapping("get_people")
	public List<PersonInfo> getPeople() {
		LOGGER.info("Entering MyController.getPeople() at {}", System.currentTimeMillis());
		try {
			List<Person> people = serv.getPeople();
			LOGGER.info("Fetched people successfully...");
			List<PersonInfo> peopleInfo = new ArrayList<>();
			people.forEach(p -> {
				PersonInfo personInfo = new PersonInfo();
				personInfo.setFirstName(p.getFirstName());
				personInfo.setLastName(p.getLastName());
				peopleInfo.add(personInfo);
			});
			return peopleInfo;
		} catch (Exception e) {
			LOGGER.error("Some error occured inside MyController.getPeople() at {}", System.currentTimeMillis());
			throw e;
		} finally {
			LOGGER.info("Exiting from MyController.getPeople() at {}", System.currentTimeMillis());
		}
	}
	
	@PostMapping("add_person")
	public Person addPerson(@RequestBody Person p) {
		LOGGER.info("Entering MyController.addPerson() at {}", System.currentTimeMillis());
		try {
			Person newPerson = serv.addPerson(p);
			LOGGER.info("New person added -> {}", newPerson.toString());
			return newPerson;
		} catch (Exception e) {
			LOGGER.error("Some error occured inside MyController.addPerson() at {}", System.currentTimeMillis());
			throw e;
		} finally {
			LOGGER.info("Exiting from MyController.addPerson() at {}", System.currentTimeMillis());
		}
	}
	
}
