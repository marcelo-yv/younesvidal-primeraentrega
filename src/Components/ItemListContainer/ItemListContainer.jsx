import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <h1 className="Item-ListCont-title">{greeting}</h1>
            <div className="Item-ListCont">
                <div className="itemList-children">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width="100%" height={200} aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style={{ fontSize: '1.125rem', textAnchor: 'middle' }}>
                            <rect width="100%" height="100%" fill="#868e96" />
                            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                        </svg>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="card-body">
                            <a href="#" className="card-link">Agregar al Carrito</a>
                        </div>
                    </div>
                </div>

                <div className="itemList-children">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width="100%" height={200} aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style={{ fontSize: '1.125rem', textAnchor: 'middle' }}>
                            <rect width="100%" height="100%" fill="#868e96" />
                            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                        </svg>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="card-body">
                            <a href="#" className="card-link">Agregar al Carrito</a>
                        </div>
                    </div>
                </div>

                <div className="itemList-children">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width="100%" height={200} aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style={{ fontSize: '1.125rem', textAnchor: 'middle' }}>
                            <rect width="100%" height="100%" fill="#868e96" />
                            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                        </svg>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="card-body">
                            <a href="#" className="card-link">Agregar al Carrito</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ItemListContainer;
