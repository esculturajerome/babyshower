import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

function DetailedCard({ items }) {
  return (
    <DetailedWrapper>
      <div className="detailedcard">
        {items.map((item) => (
          <div className="detailedcard__container">
            <div className="detailedcard__imageContainer">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="detailedcard__image"
              />
            </div>
            <div className="detailedcard__context">
              <p className="detailedcard__title">{item.title}</p>
              <p className="detailedcard__caption">{item.caption}</p>
              <p className="detailedcard__price">
                Price: around P {item.price}
              </p>
            </div>
            {item.lazadaUrl && item.shopeeUrl && (
              <div className="detailedcard__actions">
                <p className="detailedcard__links">Links: </p>
                {item.lazadaUrl && <Button>Lazada</Button>}
                {item.shopeeUrl && <Button>Shopee</Button>}
              </div>
            )}
          </div>
        ))}
      </div>
    </DetailedWrapper>
  );
}
const DetailedWrapper = styled.div`
  .detailedcard {
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: center;
    display: grid;
    grid-gap: 0.6rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  .detailedcard__container {
    background: var(--white);
    padding: 10px;
    border-radius: 15px;
    // flex: 1 1 130px; /*  Stretching: */
    // // flex: 0 1 150px; /*  No stretching: */
    // margin: 5px;
  }
  .detailedcard__image {
    width: 100%;
    border-radius: 5px;
    object-fit: contain;
    margin-bottom: 15px;
  }
  .detailedcard__title {
    color: var(--primaryColor);
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: -0.3px;
  }
  .detailedcard__caption {
    margin-top: 1rem;
    color: var(--secondaryColor);
    text-transform: capitalize;
  }
  .detailedcard__price {
    margin: 1rem 0;
  }
  .detailedcard__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default DetailedCard;
