import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { TbBrain, TbDiamond, TbUsersGroup, TbZoomCheck } from 'react-icons/tb';

const AboutMe = () => {

	const qualities = [
		{
			title: 'Quick Learner',
            Icon: TbBrain,
			description:
				'Can quickly learn new tech due to strong programming skills & fluency in various techs like MERN & Next.js',
		},
		{
			title: 'Collaborative',
            Icon: TbUsersGroup,
			description:
				'Thrived in fast-paced startup environments, showcasing strong teamwork & communication abilities and helping teammates',
		},
		{
			title: 'Determined',
            Icon: TbDiamond,
			description:
				'Passionate & Persistent enough to give one more try even after facing many failures to complete the task',
		},
		{
			title: 'Problem Solver',
            Icon: TbZoomCheck,
			description:
				'Possesses the ability to identify optimal solutions by leveraging comprehensive & in-depth research skills',
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			{qualities.map(({ title, Icon, description }, i) => (
				<Card
					key={i}
					className="
                        w-full
                        bg-[rgba(113,113,122,0.1)]
                        backdrop-blur-md
                    "
				>
                    <CardHeader className="justify-between">
                        <div className="flex gap-2">
                            <div className="p-2 rounded-full text-[#fc00ff] bg-[#301051cc]">
                                <Icon size="1.5rem" />
                            </div>
                            <div className="flex flex-col gap-1 items-start justify-center">
                                <h4 className="font-semibold leading-none text-default-600">
                                    {title}
                                </h4>
                            </div>
                        </div>
                    </CardHeader>
                    <CardBody className="px-3 pt-0 text-default-500">
                        <p>
                            {description}
                        </p>
                    </CardBody>
				</Card>
			))}
		</div>
	);
};

export default AboutMe;
