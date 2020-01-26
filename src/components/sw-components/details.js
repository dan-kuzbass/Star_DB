import React from "react";
import ItemDetails, { Record } from "../item-details";
import { withDataDetails } from "../hoc-helpers";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = swapiService;

const withChildFunction = (Wrapped, fields) => {
  console.log("props.children")
  return (props) => {
    return <Wrapped {...props}>
      {fields.map(({field, label}, index) => {
        return <Record field={field} label={label} />
      })}
    </Wrapped>
  }
}

const fieldsPerson = [
  {field: "gender", label: "Gender:"}, 
  {field: "eyeColor", label: "Eye color:"}
];

const fieldsPlanet = [
  {field: "population", label: "Population:"}, 
  {field: "rotationPeriod", label: "Rotation period:"},
  {field: "diameter", label: "Diameter:"}
];

const fieldsStarship = [
  {field: "model", label: "Model:"}, 
  {field: "length", label: "Length:"},
  {field: "costInCredits", label: "Cost:"}
];

const PersonDetails = withDataDetails(
  withChildFunction(ItemDetails, fieldsPerson),
  getPerson,
  getPersonImage
);

const PlanetDetails = withDataDetails(
  withChildFunction(ItemDetails, fieldsPlanet), 
  getPlanet, 
  getPlanetImage
);

const StarshipDetails = withDataDetails(
  withChildFunction(ItemDetails, fieldsStarship), 
  getStarship, 
  getStarshipImage
);

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}