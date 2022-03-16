/* eslint-disable max-len */
import React from "react";
import styled from "styled-components";
import { Comment as CommentType } from "./Comments.types";
import { LoadingIndicator } from "../";
import { StarRating } from "../StarRating/StarRating";

export interface CommentsProps {
  comments?: CommentType[];
  isLoading: boolean;
}

export const Comments: React.FC<CommentsProps> = ({ comments, isLoading }) => {
  if (isLoading) return <LoadingIndicator />;

  return (
    <Wrapper>
      {/* INFO: here I use index as key because I don't want to mock unique IDs myself, I know it's anti-pattern */}
      {comments ? comments.map((comment, idx) => <Comment key={idx}>
        <CommentName data-testid="CommentName">{comment.name}</CommentName>
        <StarRating rating={comment.rating} />
        <CommentDescription>{comment.comment}</CommentDescription>
      </Comment>): <>No data.</>}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 40px 0;
`;

const Comment = styled.li`
  margin-bottom: 25px;
`;

const CommentName = styled.span`
  display: block;
  font-weight: 700;
  color: var(--text-color-primary);
  padding-bottom: 10px;
`;

const CommentDescription = styled.p`
  color: var(--text-color-primary);
  padding-top: 10px;
  margin: 0;
`;
