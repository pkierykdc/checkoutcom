import { render, screen } from "@testing-library/react";
import React from "react";
import { Comments } from "./Comments";

const MOCK_DATA = [
  {
    "name": "Addison Walls",
    "email": "euismod.ac.fermentum@google.edu",
    "rating": 4,
    "comment": "sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis",
    "date": 1627333543000
  },
  {
    "name": "Joseph Dejesus",
    "email": "arcu.imperdiet.ullamcorper@yahoo.net",
    "rating": 5,
    "comment": "Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus",
    "date": 1641507578000
  },
  {
    "name": "Driscoll Hancock",
    "email": "sed.dictum@hotmail.com",
    "rating": 1,
    "comment": "velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque",
    "date": 1618150315000
  },
  {
    "name": "Carla Cox",
    "email": "fusce.dolor@google.edu",
    "rating": 2,
    "comment": "faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor",
    "date": 1636727933000
  },
  {
    "name": "Jelani Hobbs",
    "email": "interdum.feugiat.sed@protonmail.couk",
    "rating": 2,
    "comment": "amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat.",
    "date": 1631162755000
  },
  {
    "name": "Andrew Howe",
    "email": "mi.duis@icloud.net",
    "rating": 1,
    "comment": "justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate,",
    "date": 1617340433000
  },
  {
    "name": "Alan Joyce",
    "email": "orci.tincidunt@yahoo.net",
    "rating": 1,
    "comment": "Aliquam auctor, velit eget laoreet posuere, enim nisl elementum purus,",
    "date": 1640581620000
  },
  {
    "name": "Anne James",
    "email": "donec.consectetuer@icloud.org",
    "rating": 3,
    "comment": "sed dictum eleifend, nunc risus varius orci, in consequat enim",
    "date": 1629089552000
  },
  {
    "name": "Maya Ramos",
    "email": "libero.proin@outlook.net",
    "rating": 2,
    "comment": "ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo",
    "date": 1626701520000
  },
  {
    "name": "Caldwell Fuentes",
    "email": "luctus@icloud.couk",
    "rating": 3,
    "comment": "ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam",
    "date": 1642189840000
  }
];

describe("<Comments />", () => {
  it("renders correctly", () => {
    render(<Comments comments={MOCK_DATA}  isLoading={false} />);
    expect(screen.getByText(/addison walls/i)).toBeInTheDocument();
  });

  it("shows correct massage when no data", () => {
    render(<Comments isLoading={false} />);
    expect(screen.getByText(/no data/i)).toBeInTheDocument();
  });

  it("shows loader when data is loading", () => {
    render(<Comments isLoading={true} />);
    expect(screen.getByTestId("LoadingIndicatorComponent")).toBeInTheDocument();
  });
});
