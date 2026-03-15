import type { TCardProps } from "./features-data";

export default function FeatureCard({ icon: Icon, title, content }: TCardProps) {
  return (
    <div className='mx-auto flex w-full max-w-md flex-col items-center justify-center gap-5 md:max-w-[calc(50%-16px)] lg:max-w-[384px]'>
      <Icon />
      <div className='flex flex-col gap-2 text-center'>
        <span className='text-xl font-semibold text-neutral-900'>{title}</span>
        <p className='text-base text-neutral-600'>{content}</p>
      </div>
    </div>
  );
}
