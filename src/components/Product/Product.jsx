import React, { useState } from "react";
import "./Product.css";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

const Product = () => {
  const [MinMaxSize, setMinMaxSize] = useState("20%");
  const [QuickView, setQuickView] = useState(false);
  const [ImageURL, setImageURL] = useState(
    "https://5.imimg.com/data5/SELLER/Default/2022/9/XR/TQ/KY/38630640/casual-shoes.jpg"
  );

  // Array of products
  const products = [
    {
      tag: "hot",
      title: "Encore Seafoods Stuffed Alaskan Salmon",
      category: "Snack",
      price: "$28.85",
      oldPrice: "$75.85",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-1-1.jpg",
      rating: 4.5,
      brand: "NestFood",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "$12.85",
      oldPrice: "$25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-2-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "$12.85",
      oldPrice: "$25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-3-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "$12.85",
      oldPrice: "$25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-4-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "$12.85",
      oldPrice: "$25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-5-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "$12.85",
      oldPrice: "$25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-6-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "$12.85",
      oldPrice: "$25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-7-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "$12.85",
      oldPrice: "$25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-8-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "$12.85",
      oldPrice: "$25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-9-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "$12.85",
      oldPrice: "$25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-10-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "$12.85",
      oldPrice: "$25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-11-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "$12.85",
      oldPrice: "$25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-12-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "$12.85",
      oldPrice: "$25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-13-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "$12.85",
      oldPrice: "$25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-14-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "$12.85",
      oldPrice: "$25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-15-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "$12.85",
      oldPrice: "$25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-1-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "$12.85",
      oldPrice: "$25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-2-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "$12.85",
      oldPrice: "$25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-3-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "$12.85",
      oldPrice: "$25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-4-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "$12.85",
      oldPrice: "$25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-5-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
    },
  ];

  const ZoomMinMaxSize = (size) => {
    setMinMaxSize(size);
  };

  const QuickViewHandel = (value) => {
    setQuickView(value);
    console.log("My Value--", value);
  };

  return (
    <>
      <div className="HomeProduct">
        <div className="container-fluid">
          <div className="Header">
            <h2 className="hd">Popular Product</h2>
            <div className="Cat">
              <ul>
                <li>All</li>
                <li>Milks & Dairies</li>
                <li>Coffee & Teas</li>
                <li>Pet Foods</li>
                <li>Meats</li>
                <li>Vegetables</li>
                <li>Fruits</li>
                <li onClick={() => ZoomMinMaxSize("25%")}>
                  <GridViewIcon />
                </li>
                <li onClick={() => ZoomMinMaxSize("20%")}>
                  <ViewCompactIcon />
                </li>
              </ul>
            </div>
          </div>

          {QuickView && (
            <div
              className={
                "QuickViewContainer x mandatory-scroll-snapping always-stop"
              }
            >
              <div className="contentBox">
                <div className="CloseButton">
                  <Link>
                    <CloseIcon
                      className="fs-2"
                      onClick={() => setQuickView(false)}
                    />
                  </Link>
                </div>
                <div className="row">
                  <div className="col-md-5 productView">
                    <div className="Image1">
                      <InnerImageZoom
                        className="InnerImageZoom border"
                        src={ImageURL}
                      />
                    </div>
                    <div className="Images2">
                      <div className="SmallImage">
                        <img
                          src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
                          alt=""
                          onClick={(e) => setImageURL(e.target.src)}
                        />
                      </div>
                      <div className="SmallImage">
                        <img
                          src="https://m.media-amazon.com/images/I/614aiM56siL._SL1500_.jpg"
                          alt=""
                          onClick={(e) => setImageURL(e.target.src)}
                        />
                      </div>
                      <div className="SmallImage">
                        <img
                          src="https://assets.ajio.com/medias/sys_master/root/20230804/163c/64cc0468a9b42d15c98a1af5/-473Wx593H-466417359-white-MODEL.jpg"
                          alt=""
                          onClick={(e) => setImageURL(e.target.src)}
                        />
                      </div>
                      <div className="SmallImage">
                        <img
                          src="https://www.shutterstock.com/shutterstock/photos/92008067/display_1500/stock-photo-vintage-red-shoes-on-white-background-92008067.jpg"
                          alt=""
                          onClick={(e) => setImageURL(e.target.src)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 MainTextCol">
                    <div className="TextCol">
                      <h1>Seeds of Change Organic Quinoa, Brown</h1>
                    </div>
                    <div className="RatingBox">
                      <span>
                        <Rating
                          name="half-rating-read"
                          value={4.5}
                          precision={0.5}
                          readOnly
                        />
                      </span>
                      <span>(32 reviews)</span>
                    </div>
                    <div className="PriceBox mt-3 d-flex">
                      <h1 className="text-g  ">$49.50</h1>
                      <div className="OfferBox ms-2 lh-1 mt-1">
                        <p className="text-warning p-0 m-0">26% Off</p>
                        <h4 className="text-secondary">
                          <del>$79.80</del>
                        </h4>
                      </div>
                    </div>
                    <div className=" ButtonBox mt-4">
                      <input type="number" />
                      <Button className="AddCartButton">
                        {" "}
                        <ShoppingCartIcon /> &nbsp; Add to cart
                      </Button>
                    </div>

                    <div className="mt-3">
                      <p className="m-0">
                        Vendor: <span className="text-g">Nest</span>
                      </p>
                      <p>
                        MFG: <span className="text-g">Jun 4.2024</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className={"ProductRow"}>
            {products.map((product, index) => (
              <div className="item" style={{ width: MinMaxSize }} key={index}>
                <ProductCard
                  tag={product.tag}
                  title={product.title}
                  category={product.category}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  image={product.image}
                  rating={product.rating}
                  brand={product.brand}
                  QuickViewHandel={QuickViewHandel}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

const ProductCard = (props) => {
  return (
    <div className="ProductThumb row">
      {props.tag && (
        <span className={`Badge ${props.tag}  text-center`}>{props.tag}</span>
      )}
      <div className="ImageWrapper">
        <img src={props.image} alt={props.title} className="w-100" />
        <div className="overLay transition">
          <ul className="list list-inline mb-0">
            <li className="list-inline-item">
              <Link
                href=""
                style={{ borderRight: "1px solid #BCE3C9" }}
                tooltip="Add to Wishlist"
              >
                <FavoriteBorderOutlinedIcon />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                href=""
                style={{ borderRight: "1px solid #BCE3C9" }}
                tooltip="Compare"
              >
                <CompareArrowsIcon />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link
                href=""
                tooltip="Quick View"
                onClick={() => props.QuickViewHandel(true)}
              >
                <VisibilityIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="Info">
        <span className="d-block CategoryName">{props.category}</span>
        <h4 className="Title">{props.title}</h4>
        <Rating
          name="half-rating-read"
          value={props.rating}
          precision={0.5}
          readOnly
        />
        <span className="BrandName d-block">
          By &nbsp;
          <a href="" className="text-g">
            {props.brand}
          </a>{" "}
        </span>

        <div className="d-flex align-items-center mt-2 mb-2 ">
          <div className="d-flex align-items-center">
            <span className="Price text-g">${props.price}</span>{" "}
            <span className="OldPrice">
              <s>${props.oldPrice}</s>
            </span>
          </div>
          <Button className="transition">
            {" "}
            <ShoppingCartIcon /> &nbsp; Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };

// import React, { useState } from "react";
// import "./Product.css";
// import Rating from "@mui/material/Rating";
// import Button from "@mui/material/Button";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import GridViewIcon from "@mui/icons-material/GridView";
// import ViewCompactIcon from "@mui/icons-material/ViewCompact";

// const Product = () => {
//   const [MinMaxSize, setMinMaxSize] = useState("20%");

//   const ZoomMinMaxSize = (size) => {
//     setMinMaxSize(size);
//   };

//   return (
//     <>
//       <div className="HomeProduct">
//         <div className="container-fluid">
//           <div className="Header">
//             <h2 className="hd">Popular Product</h2>
//             <div className="Cat">
//               <ul>
//                 <li>All</li>
//                 <li>Milks & Dairies</li>
//                 <li>Coffee & Teas</li>
//                 <li>Pet Foods</li>
//                 <li>Meats</li>
//                 <li>Vegetables</li>
//                 <li>Fruits</li>
//                 <li onClick={() => ZoomMinMaxSize("25%")}>
//                   <GridViewIcon />
//                 </li>
//                 <li onClick={() => ZoomMinMaxSize("20%")}>
//                   <ViewCompactIcon />
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="ProductRow">
//             <div className="item" style={{ width: MinMaxSize }}>
//               <ProductCard tag={"hot"} />
//             </div>
//             <div className="item" style={{ width: MinMaxSize }}>
//               <ProductCard tag={"sale"} />
//             </div>
//             <div className="item" style={{ width: MinMaxSize }}>
//               <ProductCard tag={"new"} />
//             </div>
//             <div className="item" style={{ width: MinMaxSize }}>
//               <ProductCard tag={"best"} />
//             </div>
//             <div className="item" style={{ width: MinMaxSize }}>
//               <ProductCard tag={"hot"} />
//             </div>
//             <div className="item" style={{ width: MinMaxSize }}>
//               <ProductCard tag={"sale"} />
//             </div>
//             <div className="item" style={{ width: MinMaxSize }}>
//               <ProductCard tag={"new"} />
//             </div>
//             <div className="item" style={{ width: MinMaxSize }}>
//               <ProductCard tag={"best"} />
//             </div>
//             <div className="item" style={{ width: MinMaxSize }}>
//               <ProductCard tag={"hot"} />
//             </div>
//             <div className="item" style={{ width: MinMaxSize }}>
//               <ProductCard tag={"sale"} />
//             </div>
//             <div className="item" style={{ width: MinMaxSize }}>
//               <ProductCard tag={"new"} />
//             </div>
//             <div className="item" style={{ width: MinMaxSize }}>
//               <ProductCard tag={"best"} />
//             </div>
//             <div className="item" style={{ width: MinMaxSize }}>
//               <ProductCard tag={"hot"} />
//             </div>
//             <div className="item" style={{ width: MinMaxSize }}>
//               <ProductCard />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Product;

// const ProductCard = (props) => {
//   const RatingValue = 4;

//   return (
//     <div className="  ProductThumb row">
//       {props.tag !== null && props.tag !== undefined && (
//         <span className={`Badge ${props.tag}  text-center`}>{props.tag}</span>
//       )}
//       <div className="ImageWrapper">
//         <img
//           src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-8-2.jpg"
//           alt=""
//           className="w-100"
//         />
//         <div className="overLay transition">
//           <ul className="list list-inline mb-0">
//             <li className="list-inline-item">
//               <a
//                 href=""
//                 style={{
//                   borderRight: "1px solid #BCE3C9",
//                 }}
//                 tooltip="Add to Wishlist"
//               >
//                 <FavoriteBorderOutlinedIcon />
//               </a>
//             </li>
//             <li className="list-inline-item">
//               <a
//                 href=""
//                 style={{
//                   borderRight: "1px solid #BCE3C9",
//                 }}
//                 tooltip="Compare"
//               >
//                 <CompareArrowsIcon />
//               </a>
//             </li>
//             <li className="list-inline-item">
//               <a href="" tooltip="Quick View">
//                 <VisibilityIcon />
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="Info">
//         <span className="d-block CategoryName">Snack</span>
//         <h4 className="Title">Encore Seafoods Stuffed Alaskan Salmon</h4>
//         <Rating
//           name="half-rating-read"
//           defaultValue={2.5}
//           precision={0.5}
//           readOnly
//         />
//         <span className="BrandName d-block">
//           By &nbsp;
//           <a href="" className="text-g">
//             NestFood
//           </a>{" "}
//         </span>

//         <div className="d-flex align-items-center mt-2 mb-2 ">
//           <div className="d-flex align-items-center">
//             <span className="Price text-g  ">$28.85</span>{" "}
//             <span className="OldPrice">
//               <s>$75.85</s>
//             </span>
//           </div>
//           <Button className=" transition ">
//             {" "}
//             <ShoppingCartIcon /> &nbsp; Add
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export { ProductCard };
