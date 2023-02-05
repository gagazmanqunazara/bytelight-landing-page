import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import classNames from "classnames";

const buttonClasses = cva("rounded-full py-2 px-6", {
  variants: {
    type: {
      primary: "text-white bg-black",
      secondary: "border-[1.5px] border-black",
      link: "underline",
    },
    size: {
      xs: "!p-0",
      sm: "paragraph-small font-medium",
      md: "paragraph-regular font-semibold",
      lg: "paragraph-large",
      xl: "paragraph-extra-large",
    },
    withIcon: {
      true: "pl-4 pr-6 flex items-center gap-2",
    },
  },
});

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children?: ReactNode;
  icon?: () => JSX.Element;
  className?: string;
}

const Button = ({
  children,
  type,
  size,
  withIcon,
  icon,
  className,
}: ButtonProps) => {
  const Icon = icon;

  return (
    <button
      className={classNames(buttonClasses({ size, withIcon, type }), className)}
    >
      {children} {withIcon ? <Icon /> : null}
    </button>
  );
};

export default Button;
