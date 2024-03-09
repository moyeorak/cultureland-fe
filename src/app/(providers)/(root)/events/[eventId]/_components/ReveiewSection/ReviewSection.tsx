function ReviewSection() {
  const count = 15;
  return (
    <div>
      <h6 className="text-center">평점</h6>
      <h5 className="text-fs-20 font-bold">{`리뷰 (${count})`}</h5>
    </div>
  );
}

export default ReviewSection;
