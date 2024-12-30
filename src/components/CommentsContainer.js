import React from "react";

const commentsData = [
  {
    name: "John Doe",
    text: "This is an amazing article! Thanks for sharing.",
    replies: [],
  },
  {
    name: "Jane Smith",
    text: "I found this very helpful. Can you elaborate more on point 3?",
    replies: [
      {
        name: "Author",
        text: "Sure! Point 3 focuses on optimizing performance by reducing re-renders.",
        replies: [],
      },
      {
        name: "Mark Lee",
        text: "Yes, I'd also love more examples on that topic.",
        replies: [
          {
            name: "Author",
            text: "I’ll add more examples in the next update. Thanks for the feedback!",
            replies: [
              {
                name: "Emily Clark",
                text: "Great! Looking forward to the update.",
                replies: [
                  {
                    name: "Author",
                    text: "The update should be out next week. Stay tuned!",
                    replies: [
                      {
                        name: "David Miller",
                        text: "Appreciate the effort you put into this!",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Sam Wilson",
                    text: "Can't wait for the update!",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Michael Brown",
    text: "This part was a bit confusing to me.",
    replies: [],
  },
  {
    name: "Sophia Davis",
    text: "Well written! Keep it up.",
    replies: [],
  },
  {
    name: "Ethan Taylor",
    text: "I disagree with the conclusion. Here's why...",
    replies: [],
  },
  {
    name: "Olivia Johnson",
    text: "Fantastic read! It clarified many doubts.",
    replies: [],
  },
];


const Comment = ({ data }) => {
  const { name, text} = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;