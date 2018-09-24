import React, { Component } from "react";

class Formulario extends Component {
  categoriaRef = React.createRef();

  cambiarCategoria = e => {
    e.preventDefault();

    // Enviar por props
    this.props.consultarNoticias(this.categoriaRef.current.value);
  };

  render() {
    return (
      <div className="my-4">
        <form onSubmit={this.cambiarCategoria}>
          <h2>Noticias por Categoria</h2>
          <div className="mb-3 form-group">
            <select ref={this.categoriaRef}>
              <option value="general" defaultValue>
                General
              </option>
              <option value="negocios" defaultValue>
                Negocios
              </option>
              <option value="entertainment" defaultValue>
                Entretenimiento
              </option>
              <option value="health" defaultValue>
                Salud
              </option>
              <option value="science" defaultValue>
                Ciencia
              </option>
              <option value="sports" defaultValue>
                Deporte
              </option>
              <option value="technology" defaultValue>
                Tecnología
              </option>
              <option value="business" defaultValue>
                Negocios
              </option>
            </select>
          </div>
          <div className="">
            <button type="submit" className="btn btn-primary">
              Buscar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Formulario;
