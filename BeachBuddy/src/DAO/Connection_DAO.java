package DAO;

import java.sql.Connection; 
import java.sql.DriverManager;
import java.sql.SQLException; 


public class Connection_DAO {

	public static Connection obterConexao() {
		Connection conexao = null;
		try 
		{
			conexao = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xepdb1","TESTE", "teste");
		}
		catch(SQLException ex)
		{
			ex.printStackTrace();
		}
		return conexao;
	}


}
