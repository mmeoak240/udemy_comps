import Accordion from "../components/Accordion";

function AccordionPage() {
	const items = [
		{
			id: 1,
			label: "Can I use React on a project?",
			content:
				"You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.You can use react on any project you want. ",
		},
		{
			id: 2,
			label: "What day is it?",
			content:
				"You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.",
		},
		{
			id: 3,
			label: "Third accordion",
			content:
				"You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.You can use react on any project you want.",
		},
	];
	return <Accordion items={items} />;
}

export default AccordionPage;
