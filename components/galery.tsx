"use client";

import { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Galery() {
	const [currentImage, setCurrentImage] = useState(0);
	const [isViewerOpen, setIsViewerOpen] = useState(false);
	const images = [
		"/espaco/1.jpeg",
		"/espaco/2.jpeg",
		"/espaco/3.jpeg",
		"/espaco/4.jpeg",
		"/espaco/5.jpeg",
		"/espaco/6.jpeg",
		"/espaco/7.jpeg",
		"/espaco/8.jpeg",
		"/espaco/9.jpg",
		"/espaco/10.jpeg",
		"/espaco/11.jpeg",
		"/espaco/12.jpeg",
	];

	const openImageViewer = useCallback((index: number) => {
		setCurrentImage(index);
		setIsViewerOpen(true);
	}, []);

	const closeImageViewer = () => {
		setCurrentImage(0);
		setIsViewerOpen(false);
	};

	return (
		<motion.div
			className="grid grid-cols-2 gap-3 md:gap-4"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			variants={{
				visible: {
					transition: { staggerChildren: 0.08 },
				},
			}}
		>
			{images.map((src, index) => (
				<motion.div
					key={src}
					className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
					onClick={() => openImageViewer(index)}
					variants={{
						hidden: { opacity: 0, y: 16 },
						visible: {
							opacity: 1,
							y: 0,
							transition: { duration: 0.5, ease: "easeOut" },
						},
					}}
				>
					<Image
						className="object-cover hover:scale-105 transition-transform duration-300"
						src={src}
						fill
						sizes="(max-width: 768px) 45vw, 280px"
						alt=""
					/>
				</motion.div>
			))}

			{isViewerOpen && (
				<ImageViewer
					src={images}
					currentIndex={currentImage}
					onClose={closeImageViewer}
					disableScroll={false}
					backgroundStyle={{
						backgroundColor: "rgba(0,0,0,0.9)",
					}}
					closeOnClickOutside={true}
				/>
			)}
		</motion.div>
	);
}
