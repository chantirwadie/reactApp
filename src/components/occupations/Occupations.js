import React, { Component } from 'react'
import axios from 'axios'
export class Occupations extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             occupations :[]
        }
    }
    getOccupation = () =>{
        axios.get("https://fierce-ridge-76224.herokuapp.com/occupations/").then(
            Response =>{
                this.setState({
                    occupations : Response.data
                })
            }
        )
    }
    componentDidMount(){
        this.getOccupation()
    }
    
    render() {
        return (
            <div>
                <div>
                    <h1 class="text-center"> HISTORIQUE D'OCCUPATIONS DES SALLES</h1>
                </div>
                <div className='m-5'>
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>SALLE</th>
                            <th>DATE DEBUT</th>
                            <th>DATE FIN</th>
                            <th>DATE DE RESERVATION</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.occupations.map(occupation =>(
                             
                             <tr>
                                 
                                  <td scope="row">{occupation._id}</td>
                                         <td>{occupation.salle.name}</td>
                                         <td>{occupation.chrono.dateDebut}</td>
                                         <td>{occupation.chrono.dateFin}</td>
                                         <td>{occupation.created_at}</td>
                             </tr>
                                 ))}
                    </tbody>
                </table>
                
            </div>
            </div>
        )
    }
}

export default Occupations
