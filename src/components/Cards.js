import React from "react";

import "./Cards.css";
import { CardMedia, CardActions, IconButton, Card } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Cards() {
  return (
    <div className="row">
      <div className="cards">
        <Card
          style={{
            width: 345,
            borderRadius: "20px",
          }}
        >
          <CardMedia
            style={{
              height: 0,
              paddingTop: "56.25%",
            }}
            image="https://ph-test-11.slatic.net/p/971223ef85fc52d383364bf536619167.jpg_720x720q80.jpg_.webp"
            title="Milk"
          />
          <CardActions>
            <IconButton aria-label="add to favorites">
              <ShoppingCartIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>

        {/* <img
          className="card__image"
          src="https://ph-test-11.slatic.net/p/971223ef85fc52d383364bf536619167.jpg_720x720q80.jpg_.webp"
        />
        <img
          className="card__image"
          src="https://ph-test-11.slatic.net/p/c19ab69692938d0a1c0bfdb8b463bc1f.jpg_720x720q80.jpg_.webp"
        />
        <img
          className="card__image"
          src="https://ph-test-11.slatic.net/p/971223ef85fc52d383364bf536619167.jpg_720x720q80.jpg_.webp"
        />
        <img
          className="card__image"
          src="https://ph-test-11.slatic.net/p/c19ab69692938d0a1c0bfdb8b463bc1f.jpg_720x720q80.jpg_.webp"
        />
        <img
          className="card__image"
          src="https://ph-test-11.slatic.net/p/971223ef85fc52d383364bf536619167.jpg_720x720q80.jpg_.webp"
        />
        <img
          className="card__image"
          src="https://ph-test-11.slatic.net/p/c19ab69692938d0a1c0bfdb8b463bc1f.jpg_720x720q80.jpg_.webp"
        />
        <img
          className="card__image"
          src="https://ph-test-11.slatic.net/p/971223ef85fc52d383364bf536619167.jpg_720x720q80.jpg_.webp"
        />
        <img
          className="card__image"
          src="https://ph-test-11.slatic.net/p/c19ab69692938d0a1c0bfdb8b463bc1f.jpg_720x720q80.jpg_.webp"
        /> */}
      </div>
    </div>
  );
}
export default Cards;
