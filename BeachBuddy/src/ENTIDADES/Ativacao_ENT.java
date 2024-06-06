package ENTIDADES;

public class Ativacao_ENT {

	public Integer id_ativ;
	public String nome_ativ;
	public String nome_praia_ativ;
	public String nome_empresa_ativ;
	public Integer num_participante_ativ;
	// public Date data_ativ;
	
	public Integer getId_ativ() {
		return id_ativ;
	}
	public void setId_ativ(Integer id_ativ) {
		this.id_ativ = id_ativ;
	}
	public String getNome_ativ() {
		return nome_ativ;
	}
	public void setNome_ativ(String nome_ativ) {
		this.nome_ativ = nome_ativ;
	}
	public String getNome_praia_ativ() {
		return nome_praia_ativ;
	}
	public void setNome_praia_ativ(String nome_praia_ativ) {
		this.nome_praia_ativ = nome_praia_ativ;
	}
	public String getNome_empresa_ativ() {
		return nome_empresa_ativ;
	}
	public void setNome_empresa_ativ(String nome_empresa_ativ) {
		this.nome_empresa_ativ = nome_empresa_ativ;
	}
	public Integer getNum_participante_ativ() {
		return num_participante_ativ;
	}
	public void setNum_participante_ativ(Integer num_participante_ativ) {
		if(num_participante_ativ<0.0) {
			throw new IllegalArgumentException("Valor não pode ser negativo");
		}
		this.num_participante_ativ = num_participante_ativ;
	}

}
