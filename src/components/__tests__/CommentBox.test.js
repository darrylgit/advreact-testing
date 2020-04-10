import React from "react";
import { mount } from "enzyme";

import Root from "Root";
import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("text area", () => {
  let newComment;
  beforeEach(() => {
    newComment = "new comment";
    wrapped.find("textarea").simulate("change", {
      target: { value: newComment }
    });
    wrapped.update();
  });

  it("has a text area that users can type into", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual(newComment);
  });

  it("clears the text area on sumbit", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
