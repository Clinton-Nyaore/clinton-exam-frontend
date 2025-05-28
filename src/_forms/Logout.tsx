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

  const setBgToIdValue = (e: React.MouseEvent<HTMLDivElement>) => {
    const selectedColor = (e.target as HTMLDivElement).id;

    localStorage.setItem("selectedBg", selectedColor);
  };

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

            <h3 className="my-2 text-lg">Select bg colors</h3>
            <div className="flex justify-between w-1/2">
              <div
                id="primary-1"
                onClick={setBgToIdValue}
                className="w-6 h-6 rounded-full hover:cursor-pointer primary-1"
              ></div>
              <div
                id="primary-2"
                onClick={setBgToIdValue}
                className="w-6 h-6 rounded-full hover:cursor-pointer primary-2"
              ></div>
              <div
                id="primary-3"
                onClick={setBgToIdValue}
                className="w-6 h-6 rounded-full hover:cursor-pointer primary-3"
              ></div>

              <div
                id="bg-white"
                onClick={setBgToIdValue}
                className="w-6 h-6 rounded-full hover:cursor-pointer bg-white"
              >default</div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default Logout;
