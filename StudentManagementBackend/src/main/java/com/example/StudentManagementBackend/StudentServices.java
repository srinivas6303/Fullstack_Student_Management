package com.example.StudentManagementBackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StudentServices {
    @Autowired
    private StudentRepo studentRepo;

    public String addStudent(Student student) {
        Optional<Student> stud = studentRepo.findById(student.getId());
        if (!stud.isPresent()) {
            studentRepo.save(student);
            return "Student saved successfully.";
        } else {
            return "Student already present with this ID.";
        }
    }

    public List<Student> getAll() {
        List<Student> students = studentRepo.findAll();
        if (students.isEmpty()) {
            System.out.println("Student list is Empty!");
        }
        return students;
    }

    public Student getById(int id) {
        Optional<Student> student = studentRepo.findById(id);
        if (student.isPresent()) {
            return student.get();
        }
        return null;
    }

    public String deleteById(int id) {
        Optional<Student> student = studentRepo.findById(id);
        if (student.isPresent()) {
            studentRepo.delete(student.get());
            return "Student is deleted with id: " + id;
        }
        return "Student not founded with id: " + id;
    }


    public String updateStudent(Student student) {
        Optional<Student> existingStudent = studentRepo.findById(student.getId());
        if (existingStudent.isPresent()) {
            Student s = existingStudent.get();
            s.setName(student.getName());
            s.setMail(student.getMail());
            s.setCourse(student.getCourse());
            studentRepo.save(s);
            return "Student record updated!";
        }
        return "Student not founded with this id: " + student.getId();
    }

    public List<Student> findByName(String name) {
        return studentRepo.findByNameIgnoreCase(name);
    }

    public List<Student> findBySubString(String str) {
            List<Student> students = studentRepo.findAll();
            List<Student> filtered = new ArrayList<>();

            for (Student s : students) {
                String name = s.getName() != null ? s.getName().toLowerCase() : "";
                String mail = s.getMail() != null ? s.getMail().toLowerCase() : "";
                String course = s.getCourse() != null ? s.getCourse().toLowerCase() : "";
                String id = String.valueOf(s.getId());

                if (name.contains(str.toLowerCase()) ||
                        mail.contains(str.toLowerCase()) ||
                        course.contains(str.toLowerCase()) ||
                        id.contains(str)) {
                    filtered.add(s);
                }
            }
            return filtered;
    }
}



