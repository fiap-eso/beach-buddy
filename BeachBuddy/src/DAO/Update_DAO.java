package DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import ENTIDADES.Ativacao_ENT;
import ENTIDADES.Cadastro_ENT;
import ENTIDADES.Empresa_ENT;
import ENTIDADES.Login_ENT;
import ENTIDADES.Praia_ENT;



public class Update_DAO {

private Connection conexao;
	
	public void update_ativacao (Ativacao_ENT ativacao_up) {
		
		conexao = Connection_DAO.obterConexao();
		PreparedStatement cmd  = null;
		
		try {
			
			cmd = conexao.prepareStatement("UPDATE TB_ATIVACAO SET NOME_ATIV=?,NOME_PRAIA=?,NOME_EMPRESA=? WHERE ID_ATIV=?");
			
			cmd.setString(1, ativacao_up.getNome_ativ());
			cmd.setString(2, ativacao_up.getNome_empresa_ativ());
			cmd.setString(3, ativacao_up.getNome_praia_ativ());
			cmd.setInt(4, ativacao_up.getId_ativ());
			
			cmd.executeUpdate();
			
			conexao.close();
			cmd.close();
		}
		catch (SQLException ex)
		{
			ex.printStackTrace();
		}
	}
	
	public void update_cadastro (Cadastro_ENT cadastro_up) throws SQLException {
		conexao = Connection_DAO.obterConexao();
		PreparedStatement cmd  = null;
		
		try {
			
			cmd = conexao.prepareStatement("UPDATE TB_CADASTRO SET NOME_USER=?,EMAIL_USER=?,TELEFONE_USER=?,IDADE_USER=?,ESTADO_USER=?,GENERO_USER=?,CPF_USER=? WHERE ID_USER=?");
			
			cmd.setString(1, cadastro_up.getNome_user());
			cmd.setString(2, cadastro_up.getEmail_user());
			cmd.setInt(3, cadastro_up.getTelefone_user());
			cmd.setInt(4, cadastro_up.getIdade_user());
			cmd.setString(5, cadastro_up.getCidade_user());
			cmd.setString(6, cadastro_up.getEstado_user());
			cmd.setString(7, cadastro_up.getGenero_user());
			cmd.setInt(8, cadastro_up.getCpf_user());

			
			cmd.executeUpdate();
			
		}
		catch (SQLException ex)
		{
			ex.printStackTrace();
		}finally {
			conexao.close();
			cmd.close();
		}
	}
	
	public void update_empresa (Empresa_ENT empresa_up) {
		conexao = Connection_DAO.obterConexao();
		PreparedStatement cmd  = null;
		
		try 
		{
			cmd = conexao.prepareStatement("UPDATE TB_EMPRESA SET NOME_EMPRESA=?,CNPJ_EMPRESA=? WHERE ID_EMPRESA=?");
			
			cmd.setString(1, empresa_up.getNome_empresa());
			cmd.setInt(2, empresa_up.getCnpj_empresa());

			
			cmd.executeUpdate();
			
			conexao.close();
			cmd.close();
			
		}
		catch (SQLException ex)
		{
			ex.printStackTrace();
		}
	}
	
	public void update_login (Login_ENT login_up) {
		conexao = Connection_DAO.obterConexao();
		PreparedStatement cmd  = null;
		
		try 
		{
			
			cmd = conexao.prepareStatement("UPDATE TB_LOGIN SET NOME_USER=?,SENHA_LOGIN=? WHERE ID_LOGIN=?");
			
			cmd.setString(1, login_up.getNome_user_login());
			cmd.setString(2, login_up.getSenha_login());

			
			cmd.executeUpdate();
			
			conexao.close();
			cmd.close();
			
		}
		catch (SQLException ex)
		{
			ex.printStackTrace();
		}
	}
	
	public void update_praia (Praia_ENT praia_up) {
		
		conexao = Connection_DAO.obterConexao();
		PreparedStatement cmd  = null;
		
		try 
		{
			
			cmd = conexao.prepareStatement("UPDATE TB_PRAIAS SET NOME_PRAIA=?,CIDADE_PRAIA=?,ESTADO_PRAIA=?,STATUS_PRAIA=? WHERE ID_PRAIA=?");
			
			cmd.setString(1, praia_up.getNome_praia());
			cmd.setString(2, praia_up.getCidade_praia());
			cmd.setString(3, praia_up.getEstado_praia());
			cmd.setInt(4, praia_up.getStatus_praia());
			
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
