import React, { useState, useEffect } from "react"
import SearchBar from "@/components/common/SearchBar"
import Button from "@/components/common/button/ComButton"
import SmokingAreaList from "@/components/area-list/card-list/SmokingAreaList"
import Filter from "@/components/area-list/filter/Filter"
import { useNavigate } from "react-router-dom"
import { useSmokingAreas } from "@/utils/queries"

export default function SavedSmokingAreasPage() {
	const navigate = useNavigate()
	const userLat = 37.546 // 사용자 위도 // 임시 데이터
	const userLng = 127.071 // 사용자 경도 // 임시 데이터
	const FILTER_OPTIONS = {
		DISTANCE: "거리순",
		RATING: "평점순",
	}
	const [selectedFilter, setSelectedFilter] = useState(FILTER_OPTIONS.DISTANCE) // "거리순", "평점순"
	const [data, setData] = useState()

	const {
		data: apiData,
		error,
		isLoading,
	} = useSmokingAreas({
		userLat,
		userLng,
		selectedFilter,
	})
	useEffect(() => {
		if (apiData) {
			setData(apiData)
		}
	}, [apiData])

	const handleMoveToHome = () => {
		navigate("/")
	}

	if (isLoading) {
		return <div>로딩 중...</div>
	}

	if (error) {
		return <div>에러 발생: {error.message}</div>
	}

	return (
		<div className="relative h-[100vh] bg-white">
			{/* 상단 검색바 */}
			<div className="absolute left-0 top-[env(safe-area-inset-top)] z-50 w-full px-4">
				<SearchBar
					setData={setData}
					isList={true}
					placeholder="내 주변에 흡연구역을 검색해보세요 (예시) LG타워 사당역"
				/>
			</div>

			{/* 필터 버튼 */}
			<div className="fixed left-[20px] top-[92px]">
				<Filter
					FILTER_OPTIONS={FILTER_OPTIONS}
					selectedFilter={selectedFilter}
					setSelectedFilter={setSelectedFilter}
				/>
			</div>

			{/* 흡연 구역 목록 */}
			<div className="h-[calc(100%-84px)] w-full pt-32">
				<ul className="h-full w-full overflow-y-scroll pb-[11vh]">
					<SmokingAreaList
						selectedFilter={selectedFilter}
						smokingAreasData={data?.result?.smokingAreas || []}
						isBookmarked={true}
					/>
				</ul>
			</div>
		</div>
	)
}
