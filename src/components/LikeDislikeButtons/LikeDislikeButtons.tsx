import DisLikeButton from "./DislikeButton/DislikeButton";
import LikeButton from "./LikeButton";

function LikeDislikeButtons() {
  return (
    <div>
      좋아요 / 싫어요 둘 중 하나라도, 되어있는 상태라면 alert
      <LikeButton></LikeButton>
      <DisLikeButton></DisLikeButton>
    </div>
  );
}

export default LikeDislikeButtons;
