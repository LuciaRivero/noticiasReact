import React, { Component } from 'react';
import Header from './Componentes/Header';
import Noticias from './Componentes/Noticias';
import Formulario from './Componentes/Formulario';

class App extends Component {
  state = {
    noticias: []
  }

  componentDidMount() {
    this.consultarNoticias();
  }
  consultarNoticias = (categoria = 'general') => {
    let url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=b0a87b851fc44ee9a3680bfb6f85f16b`;
    

    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(noticias => {
        this.setState({
          noticias: noticias.articles
        })
      })
  }
  render() {
    return (
      <div className="contenedor-app">
        <Header
          titulo = 'Noticias'/>
        <div className="container white contenedor-noticias">
          <Formulario
            //paso al formulario el mismo metodo que hace la consulta a la api.
            consultarNoticias={this.consultarNoticias}
          />
          <Noticias 
          noticias = {this.state.noticias}/>
        </div>
      </div>
    );
  }
}

export default App;


//b0a87b851fc44ee9a3680bfb6f85f16b