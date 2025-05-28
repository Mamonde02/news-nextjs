export default function ArticleCard({ article }: { article: any }) {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-xl transition">
            {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
            )}
            <div className="p-4">
                <h2 className="font-semibold text-gray-700 text-lg">{article.title}</h2>
                <p className="mt-4 text-sm text-gray-600 my-2">{article.description}</p>
                <a
                    href={article.url}
                    target="_blank"
                    className="text-blue-500 hover:underline text-sm"
                >
                    Read more →
                </a>
            </div>
        </div>
    );
}
