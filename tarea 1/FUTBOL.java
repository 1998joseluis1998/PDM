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
public class FUTBOL {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        Jugador[]jugadores=new Jugador[1];
        Equipo[]equipos=new Equipo[1];
        Campeonato[]Campeonatos=new Campeonato[1];
        
        Jugador x =new Jugador("pepito1","huiy Ter1","4553422 cbba",20);
        jugadores[0]=x;
        
        Equipo n =new Equipo("not found","varones",jugadores);
        equipos[0]=n;
        
        Campeonato y=new Campeonato("Campeonato Unifranz",equipos);
        Campeonatos[0]=y;
        
        y.imprimirC();
        
    }
    
}
