import React, { Component } from "react";

import Noticia from "./Noticia";
class Noticias extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.noticias.map(noticia => (
          <Noticia key={noticia.url} noticia={noticia} />
        ))}
      </div>
    );
  }
}

export default Noticias;
