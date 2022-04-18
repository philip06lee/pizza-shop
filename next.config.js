module.exports = {
  images:{
    domains:["res.cloudinary.com"]
  }
}

// next.config.js
module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://gogo-best-philip06lee.vercel.app/api/login/:path*',
        },
      ]
    },
};