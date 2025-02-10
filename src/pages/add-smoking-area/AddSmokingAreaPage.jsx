// AddSmokingAreaPage.jsx
import React from "react"
import { useNavigate } from "react-router-dom"
import ComButton from "@/components/common/button/ComButton"

export default function AddSmokingAreaPage() {
	const navigate = useNavigate()
	const address = "서울 동작구 남부순환로 2089"

	const handleNext = () => {
		navigate("/add-smoking-area/details")
	}

	return (
		<div className="h-screen w-full bg-gray-100">
			<header className="bg-white p-4 shadow-md">
				<h1 className="text-lg font-bold">
					등록할 흡연 구역의 위치를 설정해주세요.
				</h1>
				<p className="text-sm text-gray-600">
					정확한 위치가 맞는지 확인해주세요.
				</p>
			</header>

			<div id="map" className="h-[60%] bg-gray-300"></div>
			<div className="absolute bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
				<p className="text-gray-800">{address}</p>
				<div className="flex w-full justify-center">
					<ComButton onClick={handleNext} size="xl">
						다음
					</ComButton>
				</div>
			</div>
		</div>
	)
}
