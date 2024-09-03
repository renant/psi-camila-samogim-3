import type { Metadata } from "next";
import "./globals.css";

import { Oxygen } from "next/font/google";

const oxygen = Oxygen({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Psi Camila Samogim - Psicóloga Infantil em Jundiaí",
	description:
		"Psicóloga Infantil em Jundiaí, atendimento para crianças e adolescentes, orientação de pais.",
	alternates: {
		canonical: "psicamilasamogim.com",
	},
	icons: {
		icon: "/icon.png",
	},
	manifest: "psicamilasamogim.com/manifest.json",
	keywords: [
		"psicóloga infantil",
		"psicóloga em jundiaí",
		"psicóloga infantil em jundiaí",
		"psicóloga para crianças",
		"psicóloga para adolescentes",
		"orientação de pais",
	],
	openGraph: {
		title: "Psi Camila Samogim - Psicóloga Infantil em Jundiaí",
		description:
			"Psicóloga Infantil em Jundiaí, atendimento para crianças e adolescentes, orientação de pais.",
		url: "psicamilasamogim.com",
		images: [
			{
				url: "/og-image.png",
				alt: "Psi Camila Samogim - Psicóloga Infantil em Jundiaí",
			},
		],

		locale: "pt_BR",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${oxygen.className}`}>{children}</body>
		</html>
	);
}
