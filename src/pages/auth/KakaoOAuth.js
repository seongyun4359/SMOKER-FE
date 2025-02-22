const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID
const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI

// 로그인 요청마다 state 동적 생성
const generateRandomState = () => Math.random().toString(36).substring(2, 15)

export const KAKAO_AUTH_URL = () =>
	`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&state=${generateRandomState()}`
