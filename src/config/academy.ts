/**
 * 학원별 브랜드·인증 설정 — 새 학원 복제 시 이 파일만 수정하세요.
 */
export const ACADEMY_ID = "iroom" as const;

export const academyConfig = {
  academyName: "이룸학원",
  lmsTitle: "이룸학원 LMS",
  loginSubtitle: "이룸학원 온라인 학습관에 오신 것을 환영합니다.",
  internalEmailDomain: "jslms.local",
  logoPath: "/image/logo.png",
  productionSiteUrl: "https://iroom-edu-app.vercel.app",
  primaryColor: "#2563EB",
  motto: "아는 것은 더 철저하고 완벽하게 더 깊이있게!",
  directorImagePath: "/image/director-white.png",
  directorCaption: "- 이룸교육 대표 박우용 -",
} as const;

export type AcademyConfig = typeof academyConfig;
