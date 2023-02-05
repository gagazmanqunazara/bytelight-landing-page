import Link from "next/link";
import ChevronRight from "./icons/ChevronRight";
import ExpandMore from "./icons/ExpandMore";
import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import Button from "./Button";
import BurgerMenu from "./icons/BurgerMenu";

const navItems = [
  {
    label: "Products",
    withIcon: true,
    icon: ExpandMore,
  },
  {
    label: "Company",
  },
  {
    label: "Industries",
  },
];

const navItemClasses = cva("paragraph-regular font-medium", {
  variants: {
    withIcon: {
      true: "flex items-center gap-1",
    },
  },
  defaultVariants: {
    withIcon: false,
  },
});

interface NavItemProps extends VariantProps<typeof navItemClasses> {
  children?: ReactNode;
  icon?: () => JSX.Element;
}

const NavItem = ({ children, withIcon, icon }: NavItemProps) => {
  const Icon = icon;

  return (
    <li>
      <Link href="#">
        <p className={navItemClasses({ withIcon })}>
          {children}
          {withIcon ? <Icon /> : null}
        </p>
      </Link>
    </li>
  );
};

const Header = () => {
  return (
    <header className="h-[var(--navigation-height)] flex justify-between items-center px-8">
      <Link href="/">
        <img
          src="/images/bytelight-large.svg"
          alt="Bytelight Logo Large"
          className="hidden md:inline"
        />
        <img
          src="/images/bytelight-small.svg"
          alt="Bytelight Logo Large"
          className="md:hidden h-[5rem]"
        />
      </Link>

      <div className="flex items-center md:gap-10">
        <nav className="hidden sm:block">
          <ul className="flex gap-8">
            {navItems.map(({ label, withIcon, icon }) => {
              return (
                <NavItem withIcon={withIcon} icon={icon} key={label}>
                  {label}
                </NavItem>
              );
            })}
          </ul>
        </nav>

        <div className="text-black text-6xl sm:hidden">
          <BurgerMenu />
        </div>

        <Button
          type="primary"
          size="md"
          withIcon
          icon={ChevronRight}
          className="hidden lg:flex"
        >
          Contact Sales
        </Button>
      </div>
    </header>
  );
};

export default Header;
