import React from "react"
import { Star } from "lucide-react"

export default function ReviewCard({
	content,
	creationDate,
	imageUrl,
	memberName,
	score,
}) {
	return (
		<>
			<div className="flex items-center justify-between border-t px-[20px] py-[16px]">
				<div>
					<div className="flex items-center gap-[6px]">
						{/* <img
							src={`${imageUrl}`}
							alt="profile"
							className="h-[16px] w-[16px] rounded-full object-cover object-center"
						/> */}
						<div className="h-[16px] w-[16px] rounded-full bg-[#E4E4E4]" />
						<p className="text-[12px] font-semibold text-[#252525]">
							{memberName}
						</p>
						<span className="font-regular text-[8px] text-[#b5b5b5]">
							후기 1 ꞏ {creationDate.slice(0, 10)}
						</span>
					</div>
					<ul className="font-regular mt-[6px] flex text-[10px]">
						{Array.from({ length: score }, (_, index) => (
							<Star
								key={index}
								className="h-3 w-3 fill-[#FFDD00] text-[#FFDD00]"
							/>
						))}
					</ul>
					<p className="font-regular mt-[2px] text-[10px] text-[#252525]">
						{content}
					</p>
				</div>

				{/* <img
					src={`${imageUrl}`}
					alt="profile"
					className="h-[48px] w-[48px] rounded-[5px] object-cover object-center"
				/> */}
			</div>
		</>
	)
}
