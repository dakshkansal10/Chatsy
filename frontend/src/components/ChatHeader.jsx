import { X } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          {/* <div className="avatar">
            <div className="size-10 rounded-full relative">
              <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName} />
            </div>
          </div> */}
            <div className="avatar">
  <div className="w-10 h-10 rounded-full overflow-hidden bg-primary text-white flex items-center justify-center text-sm font-semibold uppercase">
    {selectedUser.profilePic ? (
      <img
        src={selectedUser.profilePic}
        alt={selectedUser.fullName}
        className="w-full h-full object-cover"
      />
    ) : (
      selectedUser.fullName
        ?.split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
    )}
  </div>
</div>


          {/* User info */}
          <div>
            <h3 className="font-medium">{selectedUser.fullName}</h3>
            <p className="text-sm text-base-content/70">
              {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
            </p> 
          </div>
        </div>

        {/* Close button */}
        <button onClick={() => setSelectedUser(null)}>
          <X />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
