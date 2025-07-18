package com.example.StudentManagementBackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

    @Autowired
    private StudentServices studentServices;

    @PostMapping("/addStudent")
    public ResponseEntity<String> addStudent(@RequestBody Student student){
        String result = studentServices.addStudent(student);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @GetMapping("/getAllStudents")
    public ResponseEntity<List<Student>> getAllStudents(){
        return new ResponseEntity<>(studentServices.getAll(), HttpStatus.OK);
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<Student> getById(@PathVariable int id){
        return new ResponseEntity<>(studentServices.getById(id), HttpStatus.OK);
    }

    @DeleteMapping("/deleteById/{id}")
    public ResponseEntity<String> deleteById(@PathVariable int id){
        return new ResponseEntity<>(studentServices.deleteById(id), HttpStatus.OK);
    }

    @PutMapping("/updateStudent")
    public ResponseEntity<String> updateStudent(@RequestBody Student student){
        return new ResponseEntity<>(studentServices.updateStudent(student), HttpStatus.OK);
    }

    @GetMapping("/findByName/{name}")
    public ResponseEntity<List<Student>> findByName(@PathVariable String name){
        return new ResponseEntity<>(studentServices.findByName(name), HttpStatus.OK);
    }

    @GetMapping("/findBySubString/{str}")
    public ResponseEntity<List<Student>> findBySubString(@PathVariable String str){
        return new ResponseEntity<>(studentServices.findBySubString(str), HttpStatus.OK);
    }
}