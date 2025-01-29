import Image, { StaticImageData } from "next/image";

interface ProfileProps {
  avatar: StaticImageData;
  username: string;
  items: number;
  collections: number;
}

export default function ProfileCard({ avatar, username, items, collections }: ProfileProps) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-transparent border border-gray-500 shadow-lg backdrop-blur-md">
      {/* Avatar */}
      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500">
        <Image src={avatar} alt={username} width={48} height={48} />
      </div>

      {/* User Info */}
      <div className="text-white">
        <h3 className="text-lg font-semibold">@{username}</h3>
        <p className="text-sm text-gray-400">Items: {items} | Collections: {collections}</p>
      </div>
    </div>
  );
}