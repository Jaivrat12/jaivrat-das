'use client';

import { Avatar, AvatarGroup } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import { Tooltip } from '@nextui-org/tooltip';
import { Project } from '@/types';
import { getTechIconUrl } from '@/utils/techIcons';

type TechIconGroupProps = {
    project: Project;
};

const TechIconGroup = ({ project }: TechIconGroupProps) => {
    return (
        <AvatarGroup
            size="sm"
            isGrid
            max={4}
            className="grid-cols-5 gap-[2px]"
            renderCount={(count) => (
                <Popover
                    backdrop="blur"
                    showArrow
                >
                    <PopoverTrigger>
                        <Button
                            size="sm"
                            radius="full"
                            isIconOnly
                        >
                            +{count}
                        </Button>
                    </PopoverTrigger>

                    <PopoverContent className="items-start gap-1.5 p-4">
                        <h6 className="text-lg mb-2">
                            Tech Stack used in{' '}
                            {project.title}
                        </h6>

                        <div className="grid sm:grid-cols-3 grid-cols-2 gap-3">
                            {project.techStack.map((tech, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 text-default-600"
                                >
                                    <Avatar
                                        src={getTechIconUrl(tech, 'transparent').url}
                                        alt={tech}
                                        className="[&>img]:!object-contain"
                                        style={getTechIconUrl(tech, 'transparent').styles}
                                    />
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </PopoverContent>
                </Popover>
            )}
        >
            {project.techStack.map((tech, i) => (
                <Tooltip
                    key={i}
                    content={tech}
                    color="foreground"
                    closeDelay={0}
                >
                    <Avatar
                        src={getTechIconUrl(tech, 'transparent').url}
                        alt={tech}
                        className="[&>img]:object-contain"
                        style={{
                            ...getTechIconUrl(tech, 'transparent').styles,
                            border: '2px solid #3338',
                        }}
                    />
                </Tooltip>
            ))}
        </AvatarGroup>
    );
}

export default TechIconGroup;