import SourceCodeCard from '@/shared/ui/SourceCodeCard';

export default function AiAnalysisDetail() {
  return (
    <>
      <p>업로드한 영상을 토대로 AI가 과실 비율을 분석합니다.</p>

      <SourceCodeCard
        filename="axiosInstance.js"
        title="Axios Interceptor — 토큰 자동 갱신"
        desc="401 응답 시 Refresh Token으로 Access Token을 자동 갱신"
      />
    </>
  );
}
