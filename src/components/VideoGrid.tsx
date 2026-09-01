import VideoTile from "./VideoTile";

const MEMBERS = [
  { file: "integrante-1.mp4", label: "Integrante 1" },
  { file: "integrante-2.mp4", label: "Integrante 2" },
  { file: "integrante-3.mp4", label: "Integrante 3" },
  { file: "integrante-4.mp4", label: "Integrante 4" },
  { file: "integrante-5.mp4", label: "Integrante 5" },
  { file: "integrante-6.mp4", label: "Integrante 6" },
];

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {MEMBERS.map((member) => (
        <VideoTile
          key={member.file}
          src={`/videos/${member.file}`}
          label={member.label}
        />
      ))}
    </div>
  );
}
