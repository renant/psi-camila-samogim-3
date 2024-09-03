const JsonLd = ({ data }) => (
	<script
		type="application/ld+json"
		// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
		dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
	/>
);

export default JsonLd;
