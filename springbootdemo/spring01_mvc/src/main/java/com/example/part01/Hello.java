package com.example.part01;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;
//@RequestBody : JSON을 Java 객체로 변환해주는 역할을 한다.

@Slf4j
//@Controller
@RestController // @Controller + @ResponseBody
public class Hello {

//	@ResponseBody // Java 객체를 JSON으로 변환해주는 역할을 한다.
	@GetMapping("/hello") //@RequestMapping("/hello")
	public String process() {
		log.info("info", "hello world");
		return "hello world";
	} // end process()
}// end class