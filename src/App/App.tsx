import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { Chart, Comments, ReviewForm } from "../components";
import { QueryKeys } from "../services/queryKeys";
import { getReviews } from "../services/reviews.service";

export default function App() {
  const { isLoading, data: reviewsData } = useQuery(QueryKeys.REVIEWS, getReviews);

  return (
    <AppContainer>
      <ReviewSection>
        <div style={{ width: "50%" }}>
          <FormHeadline>New review request</FormHeadline>
          <ReviewForm />
        </div>
        <div style={{ width: "50%" }}>
          <Chart data={reviewsData} isLoading={isLoading} />
        </div>
      </ReviewSection>
      <section>
        <h2>Latest reviews: </h2>
        <Comments comments={reviewsData} isLoading={isLoading} />
      </section>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  padding: 40px;
`;

const ReviewSection = styled.section`
  display: flex;
`;

const FormHeadline = styled.h1`
  margin-top: 0;
  margin-bottom: 45px;
`;
