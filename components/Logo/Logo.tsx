import {
  Group,
  Text,
  UnstyledButton,
  UnstyledButtonProps,
} from '@mantine/core';
import Link from 'next/link';
import classes from './Logo.module.css';

type LogoProps = {
  href?: string;
} & UnstyledButtonProps;

const Logo = ({ href, ...others }: LogoProps) => {
  return (
    <UnstyledButton
      className={classes.logo}
      component={Link}
      href={href || '/'}
      {...others}
    >
      <Group gap="xs">
        {/* <Image
          src="/logo.png"
          height={24}
          width={24}
          alt="design sparx logo"
        /> */}
        <Text fw={700}>Clarissen</Text>
      </Group>
    </UnstyledButton>
  );
};

export default Logo;
