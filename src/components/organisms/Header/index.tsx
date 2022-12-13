import Image from 'next/image';
import { Wrapper, Links, Link } from './styles';

import logo from '../../../../public/img/svg/logo-pokemon.svg';
import linkedin from '../../../../public/img/svg/linkedin.svg';
import github from '../../../../public/img/svg/github.svg';

export function Header() {
  return (
    <Wrapper>
      <Link href="/">
        <Image src={logo} alt="Logo Pokémon" width={153} height={56} />
      </Link>
      <Links>
        <Link href="https://www.linkedin.com/in/milealmeida/" target="_blank">
          <Image src={linkedin} alt="Logo LinkedIn" width={48} height={48} />
        </Link>
        <Link href="https://github.com/milealmeida" target="_blank">
          <Image src={github} alt="Logo Github" width={48} height={48} />
        </Link>
      </Links>
    </Wrapper>
  );
}
