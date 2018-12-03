import React from 'react';

const Noticia = (props) => {   
    //Acá tambien puede ser noticia.noticia in utilizar props 
    const {urlToImage, url, title,description,source} = props.noticia;
    return ( 
        <div className="col s6 l4">
            <div className="card">
                <div className="card-image">
                    <img src={urlToImage} alt={title}/>
                    <span className="card-title">{source.name}</span>
                </div>
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} target="_blank" className="waves-effects waves-light btn">
                        Leer
                    </a>
                </div>
            </div>
        </div>
        );
}
 
export default Noticia;