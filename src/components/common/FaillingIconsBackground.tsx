import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import random from "lodash/random";

const iconData = [
  { icon: "mdi:react", label: "React Lover" },
  { icon: "mdi:vuejs", label: "Vue Master" },
  { icon: "mdi:nodejs", label: "NodeJS Ninja" },
  { icon: "mdi:language-typescript", label: "TS Fan" },
  { icon: "mdi:tailwind", label: "Tailwind Wizard" },
  { icon: "mdi:docker", label: "Docker Diver" },
  { icon: "mdi:git", label: "Git Addict" },
  { icon: "mdi:github", label: "Github Guru" },
  { icon: "mdi:angular", label: "Angular Ace" },
];

type IconProps = {
  id: number;
  icon: string;
  label: string;
  left: string;
  delay: string;
  duration: string;
  size: string;
};

export default function FallingIconsBackground() {
  const [items, setItems] = useState<IconProps[]>([]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const temp: IconProps[] = Array.from({ length: 40 }, (_, i) => {
      const { icon, label } = iconData[random(0, iconData.length - 1)];
      return {
        id: i,
        icon,
        label,
        left: `${random(0, 100)}vw`,
        delay: `${random(0, 5)}s`,
        duration: `${random(10, 20)}s`,
        size: `${random(18, 32)}px`,
      };
    });
    setItems(temp);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {items.map(({ id, icon, label, left, delay, duration, size }) => (
        <div
          key={id}
          className="absolute top-[-40px] group"
          style={{ left }}
          onMouseEnter={() => setHoveredId(id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <Icon
            icon={icon}
            className="animate-fall group-hover:paused"
            style={{
              animationDelay: delay,
              animationDuration: duration,
              fontSize: size,
              opacity: 0.3,
              color: "white",
              animationPlayState: hoveredId === id ? "paused" : "running",
            }}
          />
            {hoveredId === id && (
                <div className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2 bg-black text-white text-xs rounded-md px-2 py-1 shadow-lg whitespace-nowrap">
                    {label}
                </div>
            )}

        </div>
      ))}
    </div>
  );
}
