"use client";

function DisLikeButton() {
  const handleClickDislikeButton = () => {
    console.log("싫어요");
  };
  const count = 5;
  return (
    <button onClick={handleClickDislikeButton}>
      <span>👎🏻</span>
      <span>{count}</span>
    </button>
  );
}

export default DisLikeButton;
