package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Integrante {
    
    private @Id @GeneratedValue Long id;

    @ManyToOne()
    @JoinColumn(name = "id_colegio")
    private Colegio colegio;

    @ManyToOne()
    @JoinColumn(name = "id_alumno")
    private Alumno alumno;

    @ManyToOne()
    @JoinColumn(name = "id_curso")
    private Curso curso;

    public Integrante() {}

    public Integrante(Colegio colegio, Alumno alumno, Curso curso) {
        this.colegio = colegio;
        this.alumno = alumno;
        this.curso = curso;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Colegio getColegio() {
		return colegio;
	}

	public void setColegio(Colegio colegio) {
		this.colegio = colegio;
	}

	public Alumno getAlumno() {
		return alumno;
	}

	public void setAlumno(Alumno alumno) {
		this.alumno = alumno;
	}

	public Curso getCurso() {
		return curso;
	}

	public void setCurso(Curso curso) {
		this.curso = curso;
	}

	
    

}
