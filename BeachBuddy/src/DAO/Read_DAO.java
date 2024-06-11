package DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import ENTIDADES.Ativacao_ENT;
import ENTIDADES.Cadastro_ENT;
import ENTIDADES.Empresa_ENT;
import ENTIDADES.Login_ENT;
import ENTIDADES.Praia_ENT;


public class Read_DAO {

	private Connection conexao;
	
	public Ativacao_ENT read_atv (Ativacao_ENT ativacao_sel) {
		conexao = Connection_DAO.obterConexao();
		PreparedStatement cmd  = null;
		
		try 
		{
			
			cmd = conexao.prepareStatement("SELECT * FROM TB_ATIVACAO");
		
			ResultSet resultado = cmd.executeQuery();
			if (resultado.next())
			{
				ativacao_sel.setId_ativ(resultado.getInt(1));
				ativacao_sel.setNome_ativ(resultado.getString(2));
				ativacao_sel.setNome_praia_ativ(resultado.getString(3));
				ativacao_sel.setNome_empresa_ativ(resultado.getString(4));
			}
			conexao.close();
			cmd.close();
			
		}
		catch (SQLException ex)
		{
			ex.printStackTrace();
		}
		
		return ativacao_sel;
	}

	public Cadastro_ENT read_cad (Cadastro_ENT cadastro_sel) {
		conexao = Connection_DAO.obterConexao();
		PreparedStatement cmd  = null;
		
		try 
		{			
			cmd = conexao.prepareStatement("SELECT * FROM TB_CADASTRO");
		
			ResultSet resultado = cmd.executeQuery();
			if (resultado.next())
			{
				cadastro_sel.setId_user(resultado.getInt(1));
				cadastro_sel.setNome_user(resultado.getString(2));
				cadastro_sel.setEmail_user(resultado.getString(3));
				cadastro_sel.setTelefone_user(resultado.getInt(4));
				cadastro_sel.setIdade_user(resultado.getInt(5));
				cadastro_sel.setCidade_user(resultado.getString(6));
				cadastro_sel.setEstado_user(resultado.getString(7));
				cadastro_sel.setGenero_user(resultado.getString(8));
				cadastro_sel.setCpf_user(resultado.getInt(9));
			}
			
			conexao.close();
			cmd.close();
			
		}
		catch (SQLException ex)
		{
			ex.printStackTrace();
		}
		
		return cadastro_sel;
	}
	
	public Empresa_ENT read_empresa (Empresa_ENT empresa_sel) {
		conexao = Connection_DAO.obterConexao();
		PreparedStatement cmd  = null;
		
		try 
		{
			
			cmd = conexao.prepareStatement("SELECT * FROM TB_EMPRESA");
		
			ResultSet resultado = cmd.executeQuery();
			if (resultado.next())
			{
				empresa_sel.setId_empresa(resultado.getInt(1));
				empresa_sel.setNome_empresa(resultado.getString(2));
				empresa_sel.setCnpj_empresa(resultado.getInt(3));

			}
			
			conexao.close();
			cmd.close();
			
		}
		catch (SQLException ex)
		{
			ex.printStackTrace();
		}

		return empresa_sel;
	}
		
	public Login_ENT read_login (Login_ENT login_sel) {
		conexao = Connection_DAO.obterConexao();
		PreparedStatement cmd  = null;
		
		try 
		{
			
			cmd = conexao.prepareStatement("SELECT * FROM TB_LOGIN");
		
			ResultSet resultado = cmd.executeQuery();
			if (resultado.next())
			{
				login_sel.setId_login(resultado.getInt(1));
				login_sel.setNome_user_login(resultado.getString(2));
				login_sel.setSenha_login(resultado.getString(3));
			}
			
			conexao.close();
			cmd.close();
			
		}
		catch (SQLException ex)
		{
			ex.printStackTrace();
		}
		return login_sel;
	}
	
	public Praia_ENT read_praia (Praia_ENT praia_sel) {
		conexao = Connection_DAO.obterConexao();
		PreparedStatement cmd  = null;
		
		try 
		{
			
			cmd = conexao.prepareStatement("SELECT * FROM TB_PRAIAS");
		
			ResultSet resultado = cmd.executeQuery();
			if (resultado.next())
			{
				praia_sel.setId_praia(resultado.getInt(1));
				praia_sel.setNome_praia(resultado.getString(2));
				praia_sel.setCidade_praia(resultado.getString(3));
				praia_sel.setStatus_praia(resultado.getInt(5));
				praia_sel.setEstado_praia(resultado.getString(4));
			}			
			conexao.close();
			cmd.close();			
		}
		catch (SQLException ex)
		{
			ex.printStackTrace();
		}
		return praia_sel;
	}
}
