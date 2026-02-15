import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import toast from "react-hot-toast";
import { useLogoutMutation } from "../../api/apiSlice";
import { useNavigate } from "react-router-dom";

export function AvatarComp() {
  const navigate = useNavigate();
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      const response = await logout().unwrap();
      if (response.success) {
        toast.success(response?.message);
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
      toast.error(err?.data?.message || "Logout failed");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative right-5">
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => {
              navigate("/dashboard/profile");
            }}
          >
            Profile
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive" onClick={handleLogout}>
            {isLoading ? "Logging out..." : "Log out"}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
