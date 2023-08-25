package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final CursoRepository repositoryI;
	private final AlumnoRepository repositoryM;
	private final ColegioRepository repositoryB;
	private final IntegranteRepository repositoryN;

	@Autowired
	public DatabaseLoader(
		CursoRepository repositoryI,
		AlumnoRepository repositoryM,
		ColegioRepository repositoryB,
		IntegranteRepository repositoryN
		) {
		this.repositoryI = repositoryI;
		this.repositoryM = repositoryM;
		this.repositoryB = repositoryB;
		this.repositoryN = repositoryN;
	}

	@Override
	public void run(String... strings) throws Exception {

		this.repositoryI.save(new Curso("Comunicacion", "letras", "aprendemos textos y el manejo de la comunicacion"));
		this.repositoryI.save(new Curso("Matematica","Numeros","apredemas numeros y enteractuar con nosotros mismos"));
		this.repositoryI.save(new Curso("Religon","Fe","Reza para que pases el curso"));
		Curso iVoz = new Curso("Voz","Viento de la Fe",".");
		this.repositoryI.save(iVoz);
		Curso iReligionLaFe = new Curso("Viento de la Fe","fe", ".");
		this.repositoryI.save(iReligionLaFe);
		this.repositoryI.save(new Curso("RRHH","LA LEY DE LEYES","."));

		this.repositoryM.save(new Alumno("Miguel a"));
		Alumno DLucas = new Alumno("Lucas");
		this.repositoryM.save(DLucas);
		Alumno FGorgue = new Alumno("Gorgue");
		this.repositoryM.save(FGorgue);

		Colegio fSteve = new Colegio("Steve");
		this.repositoryB.save(fSteve);

		this.repositoryN.save(new Integrante(fSteve, DLucas, iVoz));
		this.repositoryN.save(new Integrante(fSteve, FGorgue, iReligionLaFe));


	}
}