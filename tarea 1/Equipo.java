/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package futbol;

/**
 *
 * @author CC1
 */
public class Equipo {

    String NombreEquipo;
    String categoria;
    Jugador[] Jugadores;         
    
    
    public String getNombreEquipo() {
        return NombreEquipo;
    }

    public void setNombreEquipo(String NombreEquipo) {
        this.NombreEquipo = NombreEquipo;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public Jugador[] getJugadores() {
        return Jugadores;
    }

    public void setJugadores(Jugador[] Jugadores) {
        this.Jugadores = Jugadores;
    }
  
    public Equipo(String NombreEquipo, String categoria, Jugador[]Jugadores)
    {
        this.NombreEquipo=NombreEquipo;
        this.categoria=categoria;
        this.Jugadores=Jugadores;
    }
    
    public void imprimirE(){
        System.out.println(this.NombreEquipo);
        System.out.println(this.categoria);
        
        for(int i=0;i<this.Jugadores.length;i++)
        {
           this.Jugadores[i].imprimir();
        }
      
    }
    
    
    
    
}
