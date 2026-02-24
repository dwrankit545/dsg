import { ICustomVideoPlayer } from './interface';

export function CustomVideoPlayer({
  videoUrl,
  autoPlay,
  height,
  posterImageUrl,
  width,
}: ICustomVideoPlayer) {
  return (
    <div
      style={{
        backgroundImage: `url("${videoUrl}")`,
      }}
      className="width-fit aspect-video"
    >
      <video
        poster={posterImageUrl}
        autoPlay={autoPlay}
        loop={autoPlay}
        muted={true}
        className="pointer-events-none mx-auto h-auto w-[90%] object-contain"
        height={height}
        width={width}
        controls={false}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
}
