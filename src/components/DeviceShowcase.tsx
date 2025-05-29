
import React from 'react';

export const DeviceShowcase: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-20 px-4 md:px-8">
      <div className="relative w-full max-w-4xl">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba64c6f28009c1465c5cccc0412f8d937aa120a2?placeholderIfAbsent=true"
          alt="Device shadow"
          className="w-full h-auto opacity-70"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/122eeb31653ad14e860bf564d71df5988924a297?placeholderIfAbsent=true"
          alt="Main device"
          className="absolute top-0 left-0 w-full h-auto"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e26bcb79b433172f508b1539c9590716c5672a9a?placeholderIfAbsent=true"
          alt="Device screen"
          className="absolute top-2 left-3 w-[calc(100%-24px)] h-auto rounded-[32px]"
        />
      </div>
    </section>
  );
};
