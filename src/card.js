import React from "react";

export default function Card(props) {
    return (
        <div className="col-lg-4">
            <div class="card">
                <img src="http://placehold.it/200x100" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.data.title}</h5>
                    <p class="card-text">{props.data.description}</p>
                    <p class="card-text">{props.data.price}</p>
                    <a href="/#" class="btn btn-outline-success" onClick={() => {props.handleCart(props.data.id)}} >Add to cart</a>
                </div>
            </div>
        </div>

    );
}