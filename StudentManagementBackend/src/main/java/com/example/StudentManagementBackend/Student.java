package com.example.StudentManagementBackend;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Student {
  
    @Id
    private int id;
    private  String name;
    private String mail;
    private String course;

    public Student(){}

    public Student(int id, String name, String mail, String course) {
        this.id = id;
        this.name = name;
        this.mail = mail;
        this.course = course;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", mail='" + mail + '\'' +
                ", course='" + course + '\'' +
                '}';
    }
}
