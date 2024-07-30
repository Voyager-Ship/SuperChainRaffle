"use client";
import {
  type Dispatch,
  type SetStateAction,
  type ReactElement,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import {
  IconButton,
  MenuItem,
  Paper,
  Select,
  Stack,
  SvgIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import OptimisimIcon from "@/public/images/optimisim-icon.svg";
import BaseIcon from "@/public/images/base-icon.svg";
import ModeIcon from "@/public/images/mode-icon.svg";
import classnames from "classnames";
import css from "./styles.module.css";
import Link from "next/link";
import SuperChainEco from "@/public/images/common/superchain-eco.svg";
import WalletButton from "../WalletButton";
import styles from "./styles.module.css";

// import ConnectWallet from '../ConnectWallet';

type HeaderProps = {
  onMenuToggle?: Dispatch<SetStateAction<boolean>>;
  onBatchToggle?: Dispatch<SetStateAction<boolean>>;
};

const networkOptions = [
  {
    value: "Optimisim",
    icon: OptimisimIcon,
  },
  {
    value: "Base",
    icon: BaseIcon,
  },
  {
    value: "Mode",
    icon: ModeIcon,
  },
];

const Header = ({ onMenuToggle }: HeaderProps): ReactElement => {
  const router = useRouter();
  const logoHref = "/#";
  const [network, setNetwork] = useState<{ value: string; icon: ReactNode }>(
    networkOptions[0]
  );

  const handleMenuToggle = () => {
    if (onMenuToggle) {
      onMenuToggle((isOpen) => !isOpen);
    } else {
      router.push(logoHref);
    }
  };

  const handleNetworkClick = () => {};

  return (
    <Paper className={css.container}>
      <div
        className={classnames(
          css.element,
          css.menuButton,
          !onMenuToggle ? css.hideSidebarMobile : null
        )}
      >
        <IconButton
          onClick={handleMenuToggle}
          size="large"
          color="default"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </div>

      <div className={classnames(css.element, css.hideMobile, css.logo)}>
        <Link href={logoHref} passHref>
          <SvgIcon
            component={SuperChainEco}
            inheritViewBox
            style={{ width: "200px", height: "100px" }}
          />
        </Link>
      </div>

      <div className={classnames(css.element, css.networkSelector)}>
        <span
          data-testid="chain-logo"
          className={classnames(css.element, css.inline)}
          onClick={() => {}}
        >
          <Select
            className={styles["select--network"]}
            value={{ value: network.value, icon: network.icon }}
            onChange={(item) => {
              const findNetwork = networkOptions.find(
                (option) => option.value == item.target.value
              );
              setNetwork(findNetwork ? findNetwork : networkOptions[0]);
            }}
            renderValue={(selected) => (
              <div>
                <SvgIcon
                  inheritViewBox
                  component={
                    networkOptions.find(
                      (option) => option.value == selected.value
                    )?.icon
                  }
                />
              </div>
            )}
          >
            {networkOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                <Stack
                  className={styles["select--network--item"]}
                  direction="row"
                  gap={1}
                  paddingRight={2}
                >
                  <SvgIcon inheritViewBox component={option.icon} />
                  {option.value}
                </Stack>
              </MenuItem>
            ))}
          </Select>

          {/* <Image
            src="https://safe-transaction-assets.safe.global/chains/10/chain_logo.png"
            alt="Optimism Logo"
            width={24}
            height={24}
            loading="lazy"
          /> */}
        </span>
      </div>
      <div className={classnames(css.element, css.button)}>
        <WalletButton />
      </div>
    </Paper>
  );
};

export default Header;
