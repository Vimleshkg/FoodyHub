export const RestaurantCard = ({image, name, description, price}) => {
    return (
        <div className="card">
          <img alt="" src={image}></img>
          <h2>{name}</h2>
          <h3>{description}</h3>
          <h4>{price}</h4>
        </div>
      );
    };
    