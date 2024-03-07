"use client";

function LikeButton() {
  const count = 5;
  const handleClickLikeButton = () => {
    //api mutation
    console.log("좋아요");
  };
  return (
    <button onClick={handleClickLikeButton}>
      <span>👍🏻</span>
      <span>{count}</span>
    </button>
  );
}

export default LikeButton;
