package com.myproject.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myproject.main.entity.Person;
import com.myproject.main.repository.PersonRepository;

@Service
public class PersonService {
	
	@Autowired
	private PersonRepository repo;
	
	public Person addPerson(Person p) {
		return repo.save(p);
	}
	
	public List<Person> getPeople() {
		return repo.findAll();
	}

}
