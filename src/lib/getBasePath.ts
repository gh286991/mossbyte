const isProd = process.env.NODE_ENV === 'production';
const repoName = 'mossbyte';

const getBasePath = (src: string) => {
    if (isProd) {
        return `/${repoName}${src}`;
    }
    return src;
};

export default getBasePath;
