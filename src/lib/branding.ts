export const SITE_NAME = "이룸학원 LMS";
export const ACADEMY_NAME = "이룸학원";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://iroom-edu-app.vercel.app";
export const LOGIN_TAGLINE = "이룸학원 온라인 학습관에 오신 것을 환영합니다.";
export const SITE_DESCRIPTION = "이룸학원 전용 학습 관리 시스템";
export const ACADEMY_MOTTO =
  "아는 것은 더 철저하고 완벽하게 더 깊이있게!";

/** Academy logo at public/image/logo.png */
export const LOGO_SRC = "/image/logo.png";
/** SNS·카카오톡 미리보기용 절대 URL */
export const OG_IMAGE_URL = new URL(LOGO_SRC, SITE_URL).toString();
/** 원장님 소개 이미지 (로그인 화면, 흰 배경) */
export const DIRECTOR_IMAGE_SRC = "/image/director-white.png";
export const DIRECTOR_CAPTION = "- 이룸교육 대표 박우용 -";