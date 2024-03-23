"use client";

import FileInput from "@/components/FileInput";
import Heading from "@/components/Heading/Heading";
import Page from "@/components/Page";
import { useState } from "react";

function BusinessPage() {
  const [image, setImage] = useState<File | null>();

  return (
    <Page>
      <Heading label="BusinessPage" />
      해당 파트너가 등록한 이벤트 전체 목록, 해당 파트너가 등록한 이벤트들의
      리뷰,
      <FileInput
        label="업로드"
        onChange={(e) => {
          const file = e.target.files?.[0] || null;
          setImage(file);
        }}
      />
    </Page>
  );
}

export default BusinessPage;
