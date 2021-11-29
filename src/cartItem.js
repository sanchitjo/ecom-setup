import React from "react";

export default function CartItem(props) {
    return (
        <div>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">{props.data.title}</div>
                    {props.data.price}
                </div>
                <span onClick={() => {props.handleRemove(props.data.id)}} style={{ cursor: "pointer" }} class="badge bg-success rounded-pill">X</span>
            </li>
        </div>
    );
}