const Restrocard = (props) => {
    const { resData} = props;

// const {image.url, name, rating.aggregate_rating, cfo.text, } = resData?.info;

    return (
        <div className="res-card">
            <img className="res-image"
            src={resData.info.image.url} alt="resimage"></img>
            <h3>{resData.info.name}</h3>
            {/* <h4>{resData.info.cuisine.join().name} </h4> */}
            <h4>{resData.info.rating.aggregate_rating} stars</h4>
            <h4>{resData.info.cfo.text}</h4>
            <h4>{resData.order.deliveryTime}</h4>
            
        </div>
    );
};

export default Restrocard;