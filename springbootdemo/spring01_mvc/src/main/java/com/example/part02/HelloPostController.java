package com.example.part02;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class HelloPostController {

	@PostMapping("/hellomodel")
	public MemDTO postExecute(@RequestBody MemDTO dto) {
		log.info("mto {}", dto);
		return dto;
	}

}// end class
