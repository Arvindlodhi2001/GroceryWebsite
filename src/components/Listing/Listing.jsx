import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Listing.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CottageIcon from "@mui/icons-material/Cottage";
import SideBar from "../SideBar/SideBar";
import { ProductCard } from "../Product/Product";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import GridViewIcon from "@mui/icons-material/GridView";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const Listing = () => {
  const [Size, setSize] = useState();
  const ShowProductSizeChange = (event) => {
    console.log("event.target.value--->", event.target.value);
    return setSize(event.target.value);
  };

  const [ShowSize, setShowSize] = useState("24%");

  const HandelRowSizeChange = (event) => {
    setShowSize(event.target.value);
  };

  const products = [
    {
      tag: "hot",
      title: "Encore Seafoods Stuffed Alaskan Arvind",
      category: "Snack",
      price: "28.85",
      oldPrice: "75.85",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-1-1.jpg",
      rating: 4.5,
      brand: "NestFood",
      color: ["red", "blue", "black"],
      issueDate: "2005-05-12T23:50:21.817Z",
      condition: "Used",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana 2",
      category: "Fruit",
      price: "1288.85",
      oldPrice: "25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-2-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
      color: ["red", "blue", "yellow"],
      issueDate: "2001-06-12T23:50:21.817Z",
      condition: "Used",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "1238.85",
      oldPrice: "25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-3-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
      color: ["red", "blue", "white"],
      issueDate: "2020-04-12T23:50:21.817Z",
      condition: "Used",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "1399.85",
      oldPrice: "25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-4-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
      color: ["orange", "blue", "black"],
      issueDate: "2020-03-12T23:50:21.817Z",
      condition: "Used",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "14.85",
      oldPrice: "25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-5-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
      color: ["white", "blue", "black"],
      issueDate: "2021-02-12T23:50:21.817Z",
      condition: "Used",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "15.85",
      oldPrice: "25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-6-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
      color: ["gray", "blue", "black"],
      issueDate: "2021-03-12T23:50:21.817Z",
      condition: "Used",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "16.85",
      oldPrice: "25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-7-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
      color: ["red", "blue", "black"],
      issueDate: "2021-04-12T23:50:21.817Z",
      condition: "Used",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "17.85",
      oldPrice: "25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-8-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
      color: ["red", "blue", "black"],
      issueDate: "2021-05-12T23:50:21.817Z",
      condition: "Used",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "18.85",
      oldPrice: "25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-9-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
      color: ["red", "blue", "black"],
      issueDate: "2021-06-12T23:50:21.817Z",
      condition: "Used",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "19.85",
      oldPrice: "25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-10-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
      color: ["red", "blue", "black"],
      issueDate: "2021-07-12T23:50:21.817Z",
      condition: "Used",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "120.85",
      oldPrice: "25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-11-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
      color: ["red", "blue", "black"],
      issueDate: "2021-08-12T23:50:21.817Z",
      condition: "Used",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "121.85",
      oldPrice: "25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-12-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
      color: ["red", "blue", "black"],
      issueDate: "2022-09-12T23:50:21.817Z",
      condition: "Used",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "122.85",
      oldPrice: "25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-13-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
      color: ["orange", "blue", "black"],
      issueDate: "2022-10-12T23:50:21.817Z",
      condition: "New",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "123.85",
      oldPrice: "25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-14-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
      color: ["white", "blue", "black"],
      issueDate: "2022-11-12T23:50:21.817Z",
      condition: "New",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "124.85",
      oldPrice: "25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-15-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
      color: ["orange", "blue", "black"],
      issueDate: "2022-12-12T23:50:21.817Z",
      condition: "New",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "125.85",
      oldPrice: "25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-16-1.jpg",

      rating: 4.0,
      brand: "GreenFood",
      color: ["yellow", "blue", "black"],
      issueDate: "2022-13-12T23:50:21.817Z",
      condition: "New",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "126.85",
      oldPrice: "25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-1-1.jpg",

      rating: 4.0,
      brand: "GreenFood",
      color: ["yellow", "blue", "black"],
      issueDate: "2023-14-12T23:50:21.817Z",
      condition: "New",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "127.85",
      oldPrice: "25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-2-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
      color: ["red", "blue", "black"],
      issueDate: "2023-15-12T23:50:21.817Z",
      condition: "New",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "128.85",
      oldPrice: "25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-3-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
      color: ["orange", "blue", "black"],
      issueDate: "2023-16-12T23:50:21.817Z",
      condition: "New",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "129.85",
      oldPrice: "25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-4-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
      color: ["yellow", "blue", "black"],
      issueDate: "2023-17-12T23:50:21.817Z",
      condition: "New",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "130.85",
      oldPrice: "25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-5-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
      color: ["yellow", "blue", "black"],
      issueDate: "2023-18-12T23:50:21.817Z",
      condition: "New",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "132.85",
      oldPrice: "25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-6-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
      color: ["yellow", "blue", "black"],
      issueDate: "2024-19-12T23:50:21.817Z",
      condition: "New",
    },
    {
      tag: "sale",
      title: "Fresh Organic Banana",
      category: "Fruit",
      price: "142.85",
      oldPrice: "25.00",
      image:
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-7-1.jpg",
      rating: 4.0,
      brand: "GreenFood",
      color: ["Red", "green", "black"],
      issueDate: "2024-20-12T23:50:21.817Z",
      condition: "New",
    },
  ];

  const [sortBy, setSortBy] = useState("featured");

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    console.log("sortBy--->", sortBy);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "priceLowToHigh") {
      return parseFloat(a.price) - parseFloat(b.price);
    } else if (sortBy === "priceHighToLow") {
      return parseFloat(b.price) - parseFloat(a.price);
    } else if (sortBy === "ratingLowToHigh") {
      return parseFloat(a.rating) - parseFloat(b.rating);
    } else if (sortBy === "ratingHighToLow") {
      return parseFloat(b.rating) - parseFloat(a.rating);
    } else if (sortBy === "releaseOldToNewDate") {
      return new Date(a.issueDate) - new Date(b.issueDate);
    } else if (sortBy === "releaseNewToOldDate") {
      return new Date(b.issueDate) - new Date(a.issueDate);
    } else {
      return 0;
    }
  });

  console.log(sortedProducts);

  const handleFilters = (filterData) => {
    console.log(filterData);
    // { price: [0, 960], color: ['Red', 'Green' , 'yellow], condition: ['New', 'Used'] }
    const { price, color, condition } = filterData;
    console.log("price, color, condition--->", price, color, condition);

    const filteredProducts = products
      .filter((product) => {
        const productPrice = parseFloat(product.price);

        return productPrice >= price[0] && productPrice <= price[1];
      })
      .filter((product) => {
        return (
          color.length === 0 ||
          color.some((userColor) =>
            product.color.some(
              (productColor) =>
                productColor.toLowerCase() === userColor.toLowerCase()
            )
          )
        );
      })
      .filter((product) => {
        return (
          condition.length === 0 ||
          condition.some(
            (userCondition) =>
              userCondition.toLowerCase() == product.condition.toLowerCase()
          )
        );
      })
      .sort((a, b) => {
        return parseFloat(b.price) - parseFloat(a.price);
      });

    console.log("filteredProducts --->", filteredProducts);

    console.log("Filtered and Sorted Products --->", filteredProducts);
  };

  return (
    <section className="listingPage">
      <div className="container-fluid">
        <div className="breadcrumb flex-column">
          <h1>Snack</h1>
          <ul className="list list-inline">
            <li className="list-inline-item mb-0">
              <Link to={""}>
                <CottageIcon className="mb-2" /> Home <ChevronRightIcon />{" "}
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to={""}>
                Shop <ChevronRightIcon />{" "}
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to={""}>Snack</Link>
            </li>
          </ul>
        </div>
        <div className="listingData">
          <div className="row">
            <div className="col-md-3 sidebarWrapper">
              <SideBar onFilterApply={handleFilters} />
            </div>
            {/* Right Content */}
            <div className="col-md-9 rightContent">
              <header className="d-flex justify-content-between">
                <p>We found {sortedProducts.length} items for you!</p>
                <div className="d-flex">
                  {/* Show Items */}
                  <div>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <Select
                        style={{ height: "40px" }}
                        value={Size}
                        onChange={ShowProductSizeChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without labe" }} // no label is shown
                      >
                        <MenuItem value="">
                          <em>
                            <GridViewIcon /> &nbsp; show: 50
                          </em>
                          {/* Displaying 'None' */}
                        </MenuItem>
                        <MenuItem value={10}>10 Items</MenuItem>
                        <MenuItem value={20}>20 Items</MenuItem>
                        <MenuItem value={25}>25 Items</MenuItem>
                        <MenuItem value={50}>50 Items</MenuItem>
                        <MenuItem value={75}>75 Items</MenuItem>
                        <MenuItem value={100}>100 Items</MenuItem>
                        <MenuItem value={125}>125 Items</MenuItem>
                        <MenuItem value={"All Items"}>All Items</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  {/* Show Filter Items */}
                  <div>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <Select
                        style={{ height: "40px" }}
                        value={sortBy}
                        onChange={handleSortChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without labe" }} // no label is shown
                      >
                        <MenuItem value={""}>
                          <em>
                            <FilterAltIcon /> &nbsp; short by: Featured
                          </em>
                          {/* Displaying 'None' */}
                        </MenuItem>
                        <MenuItem value={"priceLowToHigh"}>
                          Price: Low to High
                        </MenuItem>
                        <MenuItem value={"priceHighToLow"}>
                          Price: High to Low
                        </MenuItem>
                        <MenuItem value={"ratingLowToHigh"}>
                          Rating : Low to High
                        </MenuItem>
                        <MenuItem value={"ratingHighToLow"}>
                          Rating : High to Low
                        </MenuItem>
                        <MenuItem value={"releaseOldToNewDate"}>
                          Release : Old to New Date
                        </MenuItem>
                        <MenuItem value={"releaseNewToOldDate"}>
                          Release : New to Old Date
                        </MenuItem>
                        <MenuItem value={"All"}>All</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  {/* Show Item in Row */}
                  <div>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <Select
                        style={{ height: "40px" }}
                        value={ShowSize}
                        onChange={HandelRowSizeChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without labe" }} // no label is shown
                      >
                        <MenuItem value="">
                          <em>
                            <FilterAltIcon /> &nbsp; Show Item in Row
                          </em>
                          {/* Displaying 'None' */}
                        </MenuItem>
                        <MenuItem value={"40%"}>2 Items</MenuItem>
                        <MenuItem value={"30%"}>3 Items</MenuItem>
                        <MenuItem value={"24%"}>4 Items</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </header>
              <div className="ProductRow d-flex justify-content-between ">
                {sortedProducts.slice(0, Size).map((product, index) => (
                  <div className="item" style={{ width: ShowSize }} key={index}>
                    <ProductCard
                      tag={product.tag}
                      title={product.title}
                      category={product.category}
                      price={product.price}
                      oldPrice={product.oldPrice}
                      image={product.image}
                      rating={product.rating}
                      brand={product.brand}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
