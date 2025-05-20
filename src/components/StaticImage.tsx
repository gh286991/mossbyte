import Image from 'next/image';
import getBasePath from '@/lib/getBasePath';


interface StaticImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

// 靜態圖片元件
const StaticImage = ({ src, alt, width, height }: StaticImageProps) => {
    return (
        <Image
            src={getBasePath(src)}
            alt={alt}
            width={width}
            height={height}
            unoptimized={true}
            priority
        />
    );
}

export default StaticImage;