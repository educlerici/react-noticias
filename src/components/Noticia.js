import React from "react";

const Noticia = props => {
  const { urlToImage, url, title, description, source } = props.noticia;

  return (
    <div className="mb-4">
      <div className="card">
        <div className="card-image">
          <img src={urlToImage} alt={title} width="100%"/>
          <span className="badge badge-warning ml-3 mt-2">{source.name}</span>
        </div>
        <div className="card-body">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-footer">
          <a href={url} target="_blank" className="btn btn-primary">
            Ver Noticia
          </a>
        </div>
      </div>
    </div>
  );
};

export default Noticia;
