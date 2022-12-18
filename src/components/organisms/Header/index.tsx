import Image from 'next/image';

import { Wrapper, Link } from './styles';

export function Header() {
  return (
    <Wrapper>
      <Link href="/">
        <Image
          src="/img/svg/logo-pokemon.svg"
          alt="Logo Pokémon"
          width={153}
          height={56}
        />
      </Link>

      <nav>
        <Link href="https://www.linkedin.com/in/milealmeida/" target="_blank">
          <Image
            src="/img/svg/linkedin.svg"
            alt="Logo LinkedIn"
            width={48}
            height={48}
          />
        </Link>
        <Link href="https://github.com/milealmeida" target="_blank">
          <Image
            src="/img/svg/github.svg"
            alt="Logo Github"
            width={48}
            height={48}
          />
        </Link>
      </nav>
    </Wrapper>
  );
}
