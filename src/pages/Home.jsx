import React, { useEffect, useState, useContext } from "react";
import {
  getRandomIngredient,
  fetchFood,
  fetchNextFood,
  fetchQueries,
} from "../controllers/HomeController";
import HomeContext from "../context/HomeContext";
import Card from "../Components/Card";
import { Button, Container, Form } from "react-bootstrap";
import { MDBCarousel, MDBCarouselItem, MDBSpinner } from "mdb-react-ui-kit";
import useOperation from "../Hook/useOperation";

const { FoodsContext } = HomeContext;
export const Home = () => {
  const { foods, addFood, setFoods } = useContext(FoodsContext);
  const [nextFoods, setNextFoods] = useState("");
  const [autcompletes, setAutoCompletes] = useState([]);
  const [query, setQuery] = useState("");
  const { getCurrentUserFromLocal } = useOperation();

  useEffect(() => {
    fetchQueries(setAutoCompletes, query);
  }, [query]);
  useEffect(() => {
    setFoods([]);
    fetchFood(getRandomIngredient(), addFood, setNextFoods);
    getCurrentUserFromLocal();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query !== "") {
      setFoods([]);
      fetchFood(query, addFood, setNextFoods);
      setQuery("");
    }
  };
  const handleQueryChange = (value) => {
    setQuery(value);
  };
  const handleQuerySearch = (e) => {
    setQuery(e.target.value);
    handleSubmit(e);
  };
  if (foods.length === 0) {
    return (
      <div className="position-relative " style={{ height: 570 }}>
        <MDBSpinner
          className="me-2 position-absolute top-50 start-50 "
          style={{ width: "5rem", height: "5rem" }}
        ></MDBSpinner>
      </div>
    );
  }

  return (
    <div>
      <MDBCarousel showControls showIndicators>
        <MDBCarouselItem
          style={{ height: "60vh" }}
          className="w-100 d-block"
          itemId={1}
          src="https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-black-chinese-steak-gourmet-meat-taobao-banner-image_175092.jpg"
          alt="..."
        ></MDBCarouselItem>
        <MDBCarouselItem
          style={{ height: "60vh" }}
          className="w-100 d-block"
          itemId={2}
          src="https://t4.ftcdn.net/jpg/03/54/72/63/360_F_354726339_wDkWbhZDjFvxYafghZ5lvEv5kRVsY35L.jpg"
          alt="..."
        ></MDBCarouselItem>
        <MDBCarouselItem
          style={{ height: "60vh" }}
          className="w-100 d-block"
          itemId={3}
          src="https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-black-meat-western-food-banner-background-image_194600.jpg"
          alt="..."
        ></MDBCarouselItem>
      </MDBCarousel>
      <Container style={{ position: "relative", top: "-200px", zIndex: 2 }}>
        <Form className="d-flex mt-5 col-6 mx-auto" onSubmit={handleSubmit}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            value={query}
            aria-label="Search"
            onChange={(e) => {
              handleQueryChange(e.target.value);
            }}
          />

          <Button
            type="submit"
            style={{
              textDecoration: "wavy !important",
              backgroundColor: "#61d400",
              border: "#61d400",
            }}
          >
            Search
          </Button>
        </Form>
        {query != "" ? (
          <div
            id="list"
            className="w-50 bg-light mx-auto rounded position-absolute  translate-middle "
            style={{ zIndex: 1, top: 240, right: 0 }}
          >
            {autcompletes?.map((item) => (
              <option
                key={item}
                value={item}
                className=" px-4 py-2"
                style={{ cursor: "pointer" }}
                onClick={(e) => handleQuerySearch(e)}
              >
                {item}
              </option>
            ))}
          </div>
        ) : (
          <div id="list" className="d-none">
            {autcompletes?.map((item) => (
              <option key={item} value={item} className="d-none px-4 py-2">
                {item}
              </option>
            ))}
          </div>
        )}
      </Container>
      <Container className="row justify-content-evenly mx-auto py-2">
        <h2 className="text-center mb-4"> Popular Recipes </h2>
        {foods.map((item, index) => (
          <Card item={item} key={index} fav={false} />
        ))}
      </Container>
    </div>
  );
};
