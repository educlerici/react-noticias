import React, { Component } from "react";

import Noticia from "./Noticia";
class Noticias extends Component {
  state = {};
  render() {
    return (
      <div className=''>
        {this.props.noticias.map(noticia => (
          <Noticia key={noticia.url} noticia={noticia} />
        ))}
      </div>
    );
  }
}

export default Noticias;
