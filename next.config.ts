import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691401.jpg?w=740
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.magnific.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};


export default nextConfig;
