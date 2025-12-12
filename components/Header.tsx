import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Image
            src="/header.png"
            alt="Injury Claim Connect"
            width={400}
            height={100}
            priority
            className="header-logo"
          />
        </div>
      </div>
    </header>
  );
}
