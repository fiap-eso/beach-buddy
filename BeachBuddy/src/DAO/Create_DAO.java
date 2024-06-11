package DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import ENTIDADES.Ativacao_ENT;
import ENTIDADES.Cadastro_ENT;
import ENTIDADES.Empresa_ENT;
import ENTIDADES.Login_ENT;
import ENTIDADES.Praia_ENT;



public class Create_DAO {
	private Connection conexao;
	
	// Verificar como Adicionar Date // 
	public void insert_ativacao (Ativacao_ENT ativacao_ins) {
		
		conexao = Connection_DAO.obterConexao();
		PreparedStatement cmd  = null;
		
		try {
			
			cmd = conexao.prepareStatement("INSERT INTO TB_ATIVACAO (ID_ATIV,NOME_ATIV,NOME_PRAIA,NOME_EMPRESA) VALUES (SQ_SEQUENCE,?,?,?,?)");
			
			cmd.setString(1, ativacao_ins.getNome_ativ());
			cmd.setString(2, ativacao_ins.getNome_empresa_ativ());
			cmd.setString(3, ativacao_ins.getNome_praia_ativ());
			cmd.setInt(4, ativacao_ins.getNum_participante_ativ());
			
			cmd.executeUpdate();
			
			conexao.close();
			cmd.close();
			
		}
		catch (SQLException ex)
		{
			ex.printStackTrace();
		}
	}

	public void insert_cadastro (Cadastro_ENT cadastro_ins) throws SQLException {
		conexao = Connection_DAO.obterConexao();
		PreparedStatement cmd  = null;
		
		try {
			
			cmd = conexao.prepareStatement("INSERT INTO TB_CADASTRO (ID_USER,NOME_USER,EMAIL_USER,TELEFONE_USER,IDADE_USER,ESTADO_USER,GENERO_USER,CPF_USER) VALUES (SQ_SEQUENCE,?,?,?,?,?,?,?,?)");
			
			cmd.setString(1, cadastro_ins.getNome_user());
			cmd.setString(2, cadastro_ins.getEmail_user());
			cmd.setInt(3, cadastro_ins.getTelefone_user());
			cmd.setInt(4, cadastro_ins.getIdade_user());
			cmd.setString(5, cadastro_ins.getCidade_user());
			cmd.setString(6, cadastro_ins.getEstado_user());
			cmd.setString(7, cadastro_ins.getGenero_user());
			cmd.setInt(8, cadastro_ins.getCpf_user());
			
			cmd.executeUpdate();

		}
		catch (SQLException ex)
		{
			ex.printStackTrace();
		}
		finally
		{
			conexao.close();
			cmd.close();
		}
	}
	
	public void insert_empresa (Empresa_ENT empresa_ins) {
		conexao = Connection_DAO.obterConexao();
		PreparedStatement cmd  = null;
		
		try {
			
			cmd = conexao.prepareStatement("INSERT INTO TB_EMPRESA (ID_EMPRESA,NOME_EMPRESA,CNPJ_EMPRESA) VALUES (SQ_SEQUENCE,?,?)");
			
			cmd.setString(1, empresa_ins.getNome_empresa());
			cmd.setInt(2, empresa_ins.getCnpj_empresa());

			
			cmd.executeUpdate();
			
			conexao.close();
			cmd.close();
			
		}
		catch (SQLException ex)
		{
			ex.printStackTrace();
		}
	}
	
	public void insert_login (Login_ENT login_ins) {
		conexao = Connection_DAO.obterConexao();
		PreparedStatement cmd  = null;
		
		try {
			
			cmd = conexao.prepareStatement("INSERT INTO TB_LOGIN (ID_LOGIN,NOME_USER,SENHA_LOGIN) VALUES (SQ_SEQUENCE,?,?)");
			
			cmd.setString(1, login_ins.getNome_user_login());
			cmd.setString(2, login_ins.getSenha_login());

			
			cmd.executeUpdate();
			
			conexao.close();
			cmd.close();
			
		}
		catch (SQLException ex)
		{
			ex.printStackTrace();
		}
	}
	
	public void insert_praia (Praia_ENT praia_ins) {
		conexao = Connection_DAO.obterConexao();
		PreparedStatement cmd  = null;
		
		try {
			
			cmd = conexao.prepareStatement("INSERT INTO TB_PRAIAS (ID_PRAIA,NOME_PRAIA,CIDADE_PRAIA,ESTADO_PRAIA,STATUS_PRAIA) VALUES (SQ_SEQUENCE,?,?,?,?)");
			
			cmd.setString(1, praia_ins.getNome_praia());
			cmd.setString(2, praia_ins.getCidade_praia());
			cmd.setString(3, praia_ins.getEstado_praia());
			cmd.setInt(4, praia_ins.getStatus_praia());
			
			cmd.executeUpdate();
			
			conexao.close();
			cmd.close();
			
		}
		catch (SQLException ex)
		{
			ex.printStackTrace();
		}
	}
	
	
}
