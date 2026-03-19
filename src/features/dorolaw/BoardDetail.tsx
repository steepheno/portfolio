import SourceCodeCard from "@/shared/ui/SourceCodeCard";

export default function BoardDetail() {
  return (
    <>
      <p>게시판 구현</p>

      <SourceCodeCard
        filename="axiosInstance.js"
        title="Axios Interceptor — 토큰 자동 갱신"
        desc="401 응답 시 Refresh Token으로 Access Token을 자동 갱신"
      />
    </>
  );
}
