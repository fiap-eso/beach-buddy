package DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import ENTIDADES.Ativacao_ENT;
import ENTIDADES.Cadastro_ENT;
import ENTIDADES.Empresa_ENT;
import ENTIDADES.Login_ENT;
import ENTIDADES.Praia_ENT;


public class Delete_DAO {

	private Connection conexao;
	
	public void delete_ativacao (Ativacao_ENT ativacao_del) throws SQLException {
		conexao = Connection_DAO.obterConexao();
		PreparedStatement cmd  = null;
		
		try {
			
			cmd = conexao.prepareStatement("DELETE FROM TB_ATIVACAO WHERE ID_ATIV=?");
			
			cmd.setInt(1, ativacao_del.getId_ativ());
			
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
	
	public void delete_cadastro (Cadastro_ENT cadastro_del) {
		conexao = Connection_DAO.obterConexao();
		PreparedStatement cmd  = null;
		
		try {
			
			cmd = conexao.prepareStatement("DELETE FROM TB_CADASTRO WHERE ID_USER=?");
			
			cmd.setInt(1, cadastro_del.getId_user());
			
			cmd.executeUpdate();
			
			conexao.close();
			cmd.close();
			

		}
		catch (SQLException ex)
		{
			ex.printStackTrace();
		}
	}
	
	public void delete_empresa (Empresa_ENT empresa_del) {
		conexao = Connection_DAO.obterConexao();
		PreparedStatement cmd  = null;
		
		try {
			
			cmd = conexao.prepareStatement("DELETE FROM TB_EMPRESA WHERE ID_EMPRESA=?");
			
			cmd.setInt(1, empresa_del.getId_empresa());
			
			cmd.executeUpdate();
			
			conexao.close();
			cmd.close();
			

		}
		catch (SQLException ex)
		{
			ex.printStackTrace();
		}
	}
	
	public void delete_login (Login_ENT login_del) {
		conexao = Connection_DAO.obterConexao();
		PreparedStatement cmd  = null;
		
		try {
			
			cmd = conexao.prepareStatement("DELETE FROM TB_ATIVACAO WHERE ID_LOGIN=?");
			
			cmd.setInt(1, login_del.getId_login());
			
			cmd.executeUpdate();
			
			conexao.close();
			cmd.close();
			

		}
		catch (SQLException ex)
		{
			ex.printStackTrace();
		}
	}
	
	public void delete_praia (Praia_ENT praia_del) {
		conexao = Connection_DAO.obterConexao();
		PreparedStatement cmd  = null;
		
		try {
			
			cmd = conexao.prepareStatement("DELETE FROM TB_ATIVACAO WHERE ID_PRAIA=?");
			
			cmd.setInt(1, praia_del.getId_praia());
			
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
