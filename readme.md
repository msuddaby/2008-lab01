#  Asynchronous Programming Assessment.
The following folder is configured with [Tailwind CSS](https://tailwindcss.com/) and the [Vite Bundler](https://tailwindcss.com/).

## 
When using ```Vite``` all of the image assets should be in the public folder. When using the image element ```Vite``` considers the public directory as the root of all static assets. So when creating a path to an image you can just use the following

```
    .
    ├── README.md
    ├── css
    ├── index.html
    ├── js
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    └── tailwind.config.js

```


## Development Build
```bash
   npm run dev
```

## Production Build
```bash
   npm run build
```


## Production Preview
```bash
   npm run preview
```