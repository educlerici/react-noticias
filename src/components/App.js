import React, { Component } from "react";

import Header from "./Header";
import Noticias from "./Noticias";
import Formulario from "./Formulario";

class App extends Component {
  state = {
    noticias: []
  };
  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = (categoria = "general") => {
    let url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=5d9a16c222dd4b94b2177e7c94c7c471`;
    console.log(url);
    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(noticias => {
        this.setState({
          noticias: noticias.articles
        });
      });
  };

  render() {
    return (
      <div className=''>
        <Header titulo="Noticias" />
        <div className="container">
          {/* <Formulario consultarNoticias={this.consultarNoticias} /> */}
          <Noticias noticias={this.state.noticias} />
        </div>
      </div>
    );
  }
}

export default App;
