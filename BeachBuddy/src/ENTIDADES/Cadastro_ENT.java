package ENTIDADES;

public class Cadastro_ENT {
	
	public Integer id_user;
	public String nome_user;
	public String email_user;
	public Integer telefone_user;
	public Integer idade_user;
	public String  cidade_user;
	public String estado_user;
	public String genero_user;
	public Integer cpf_user;
	
	public Integer getId_user() {
		return id_user;
	}
	public void setId_user(Integer id_user) {
		this.id_user = id_user;
	}
	public String getNome_user() {
		return nome_user;
	}
	public void setNome_user(String nome_user) {
		this.nome_user = nome_user;
	}
	public String getEmail_user() {
		return email_user;
	}
	public void setEmail_user(String email_user) {
		this.email_user = email_user;
	}
	public Integer getTelefone_user() {
		return telefone_user;
	}
	public void setTelefone_user(Integer telefone_user) {
		this.telefone_user = telefone_user;
	}
	public Integer getIdade_user() {
		return idade_user;
	}
	public void setIdade_user(Integer idade_user) {
		if(idade_user<0.0) {
			throw new IllegalArgumentException("Valor não pode ser negativo");
		}
		this.idade_user = idade_user;
	}
	public String getCidade_user() {
		return cidade_user;
	}
	public void setCidade_user(String cidade_user) {
		this.cidade_user = cidade_user;
	}
	public String getEstado_user() {
		return estado_user;
	}
	public void setEstado_user(String estado_user) {
		this.estado_user = estado_user;
	}
	public String getGenero_user() {
		return genero_user;
	}
	public void setGenero_user(String genero_user) {
		this.genero_user = genero_user;
	}
	public Integer getCpf_user() {
		return cpf_user;
	}
	public void setCpf_user(Integer cpf_user) {
		
		this.cpf_user = cpf_user;
	}
	
	
}
