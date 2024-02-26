import { cva, VariantProps } from "class-variance-authority";

const inputVariants = cva("text-base px-4 py-2 rounded-md", {
  variants: {
    variant: {
      default:
        "border border-neutral-200 focus:outline-blue-600 outline-offset-2 w-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface InputProps
  extends React.HTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> { placeholder:string;}

export default function Input({ variant, className, ...props }: InputProps) {
  return (
  <input className={inputVariants({ variant, className })} {...props} />
  );
}

