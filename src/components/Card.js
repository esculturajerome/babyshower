import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";

function Card({ imageUrl, message }) {
  return (
    <CardWrapper>
      <div className="card large">
        {imageUrl && <img className="card__image" src={imageUrl} />}
      </div>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  .card {
    transition: transform 0.45s;
  }
  .card:hover {
    transform: scale(1.05);
  }
  .card__avatar {
    margin-top: -70px;
    margin-left: 150px;
  }
  .card__image {
    height: 200px;
    object-fit: contain;
    border-radius: 18px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .large .card__image {
    height: 300px;
  }
  .large .card__avatar {
    margin-left: 250px;
  }
`;

export default Card;
