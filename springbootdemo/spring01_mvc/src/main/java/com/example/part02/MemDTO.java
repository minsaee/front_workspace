package com.example.part02;

public class MemDTO {
	private int num;
	private String name;
	private int age;
	private String loc;

	public MemDTO() {

	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getLoc() {
		return loc;
	}

	public void setLoc(String loc) {
		this.loc = loc;
	}
	
	public String toString() {
		return String.format("%d %s %d %s", num, name, age, loc);
	}

}// end class
