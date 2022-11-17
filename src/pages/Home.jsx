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
import { MDBSpinner } from "mdb-react-ui-kit";

const { FoodsContext } = HomeContext;
export const Home = () => {
  const { foods, addFood, setFoods } = useContext(FoodsContext);
  const [nextFoods, setNextFoods] = useState("");
  const [autcompletes, setAutoCompletes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchQueries(setAutoCompletes, query);
  }, [query]);
  useEffect(() => {
    setFoods([]);
    fetchFood(getRandomIngredient(), addFood, false, setNextFoods);
  }, []);
  console.log(foods);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFoods([]);
    fetchFood(query, addFood, null, setNextFoods);
    setQuery("");
  };
  const handleQueryChange = (value) => {
    setQuery(value);
    console.log(query);
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
      <Container>
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
            style={{ zIndex: 1, top: 345, right: 0 }}
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
      <Container className="row justify-content-evenly mx-auto py-5">
        {foods.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </Container>
    </div>
  );
};
