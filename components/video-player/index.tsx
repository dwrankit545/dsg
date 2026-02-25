'use client';

import dynamic from 'next/dynamic';
import { ReactElement } from 'react';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

interface Props {
  url: string;
  height?: string | number;
  width?: string | number;
  autoPlay?: boolean;
  fallBackImage?: ReactElement;
}

export function VideoPlayer({
  url,
  width,
  height,
  autoPlay,
  fallBackImage,
}: Props) {
  return (
    <ReactPlayer
      url={url}
      controls={!autoPlay}
      width={width}
      height={height}
      className="aspect-video"
      loop={autoPlay}
      playing={autoPlay}
      muted={autoPlay}
      fallback={fallBackImage}
    />
  );
}
