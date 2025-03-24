import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex-1 flex justify-center items-center h-96">
      <Image alt="loading" height={60} src={'/loading.gif'} width={60} />
    </div>
  );
}
