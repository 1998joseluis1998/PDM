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
public class Campeonato {

    String nombreCampeonato;
    Equipo[]Equipos;
     
    public String getNombreCampeonato() {
        return nombreCampeonato;
    }

    public void setNombreCampeonato(String nombreCampeonato) {
        this.nombreCampeonato = nombreCampeonato;
    }

    public Equipo[] getEquipos() {
        return Equipos;
    }

    public void setEquipos(Equipo[] Equipos) {
        this.Equipos = Equipos;
    }
   
     
    
     public Campeonato(String nombreCampeonato,Equipo[]Equipos)
     {
         this.nombreCampeonato=nombreCampeonato;
         this.Equipos=Equipos;
         
         
     }
     
     public void imprimirC()
     {
         System.out.println(this.nombreCampeonato);
         
         for(int i=0;i<this.Equipos.length;i++)
         {
             if(this.Equipos[i]!=null)
             {
                 this.Equipos[i].imprimirE(); 
             }
            
         }

     }
     
    
}
