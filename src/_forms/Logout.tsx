import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import headerLogo from "@/assets/logo.jpeg";
import { MyButton } from "@/_components/inputs";
import { useDispatch } from "react-redux";
import { logout } from "@/state/features/auth/authSlice";

const Logout = () => {
  const dispatch = useDispatch();

  return (
    <Dialog>
      <DialogTrigger>
        <img src={headerLogo} className="h-22" alt="" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>You are about to log out</DialogTitle>
          <DialogDescription>
            You can always log back in to your account.
            <MyButton
              onClickHandler={() => dispatch(logout())}
              className="flex w-full my-4"
              type="button"
            >
              Logout now
            </MyButton>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default Logout;
