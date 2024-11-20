import React, { useState, useEffect } from 'react';
import Heading from '../components/Heading';
import Spinner from '../components/Spinner';
import Img1 from '../assets/blogs/blog-1.jpg';
import Img2 from '../assets/blogs/blog-2.jpg';
import Img3 from '../assets/blogs/blog-3.jpg';

const BlogData = [
  {
    title: 'Skena Culture: Kekuatan Identitas Gen Z Masa Kini',
    subtitle:
      'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?',
    published: 'Jan 20, 2024 by Dilshad',
    image: Img1,
    aosDelay: '0',
  },
  {
    title: 'Outfit Skena: Ekspresi Identitas Budaya Anak Muda',
    subtitle:
      'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?',
    published: 'Jan 20, 2024 by Satya',
    image: Img2,
    aosDelay: '200',
  },
  {
    title: 'Fenomena Skena dan Polisi Skena di Tengah Kawula Muda',
    subtitle:
      'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?',
    published: 'Jan 20, 2024 by Sabir',
    image: Img3,
    aosDelay: '400',
  },
];

const Blogs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }); // 2-second delay to simulate loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="sm:my-6 lg:my-16">
      <div className="container">
        {/* Header section */}
        <Heading title="Recent News" subtitle={'Explore Our Blogs'} />

        {/* Show Spinner or Blog Section */}
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
            {BlogData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.title}
                className="shadow-lg rounded-lg backdrop-blur-sm"
              >
                {/* image section */}
                <div className="overflow-hidden rounded-2xl mb-2">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                  />
                </div>
                {/* content section */}
                <div className="space-y-2 p-2">
                  <p className="text-xs text-black dark:text-white duration-200">
                    {data.published}
                  </p>
                  <p className="font-bold line-clamp-1 duration-100">{data.title}</p>
                  <p className="line-clamp-2 text-sm text-black dark:text-white duration-200 italic">
                    {data.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
