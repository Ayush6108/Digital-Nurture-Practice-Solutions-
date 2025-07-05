package com.cognizant.librarymanagement_exercise_9.repository;
import com.cognizant.librarymanagement_exercise_9.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}