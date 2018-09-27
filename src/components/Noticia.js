import React from "react";

const Noticia = props => {
  const { urlToImage, url, title, source } = props.noticia;


  return (
    <div className=" mw9 center ph3-ns h-100-ns ">
    <a href={url} target="_blank" className=''>
      <div className='hover-bg-light-green  shadow-4 fl w-100 w-30-ns near-black grow bg-white br3  ma3'>
        <div className="card-image">
          <img src={urlToImage} alt=''  width="100%" className='br1 dim ps0 h5'/>
          <span className="helvetica ma3 pa1 bg-near-black white f6  br1 hl3 ">{source.name}</span>
        </div>
        <div className='pa2 tl h4'>
          <h3 className='sarif '>{title}</h3>
          {/* <p className='tj helvetica'>{description}</p> */}
        </div>
        <div className="tr pa2 ">
          <a href={url} target="_blank" className='link b black hover-near-white no-underline near-blue pa1'>
           VER MAS
          </a>
        </div>
      </div>
      </a>
    </div>
  );
};

export default Noticia;
