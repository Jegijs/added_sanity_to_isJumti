import Image from 'next/image';

// Pievienojam width un height kā parametrus ar noklusējuma vērtībām (piem., 80x80)
export default function Logo({ width = 80, height = 80 }) {
    return (
        <Image
            src="/images/isjumti-logo.jpeg"
            alt="IsJumti Logo"
            width={width}
            height={height}
            priority
            style={{ objectFit: 'contain' }}
        />
    );
}