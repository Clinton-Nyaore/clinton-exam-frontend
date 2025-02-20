import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { MyButton, StyledInput } from "@/_components/inputs";
import { useSignInMutation } from "@/state/features/auth/authApi";
import { toaster } from "@/_components/toaster";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email(),

  password: z.string().min(2, {
    message: "password must be at least 8 characters.",
  }),
});

const SignInForm = () => {
  const navigate = useNavigate();
  const [signIn] = useSignInMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await signIn(values).unwrap();
      toaster("Log in successful", "success");
      navigate("/");
    } catch (error) {
      toaster(
        "Log in failed. Please check you credentials then try again!",
        "error"
      );

      return error
    }
  }

  return (
    <Form {...form}>
      <div className="text-white font-bold my-2">
        <h2 className="text-2xl my-1">Log In</h2>
        <p className="text-xl my-2 font-light">
          Please log in to start an exam
        </p>
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full text-white"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Email</FormLabel>
              <FormControl>
                <StyledInput
                  type="email"
                  placeholder="johndoe@example.com"
                  className="placeholder:text-white"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Password</FormLabel>
              <FormControl>
                <StyledInput
                  type="password"
                  // placeholder="shadcn"
                  className="placeholder:text-white"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <MyButton
          type="submit"
          className="bg-blue-500 w-full hover:bg-blue-400"
        >
          Log in
        </MyButton>
      </form>
    </Form>
  );
};
export default SignInForm;
