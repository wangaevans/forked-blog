import Link from "@/components/Link";
import Tag from "@/components/Tag";
import { slug } from "github-slugger";
import tagData from "app/tag-data.json";
import { genPageMetadata } from "app/seo";

export const metadata = genPageMetadata({
    title: "Tags",
    description: "Things I blog about"
});

export default async function Page() {
    const tagCounts = tagData as Record<string, number>;
    const tagKeys = Object.keys(tagCounts);
    const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a]);
    return (
        <>
            <div className='flex flex-col items-start justify-start md:mt-24  md:items-center md:justify-center md:space-x-6'>
                <div className='space-x-2 pb-8 pt-6 md:space-y-5'>
                    <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:px-6 md:text-6xl md:leading-14'>
                      All  Tags
                    </h1>
                </div>
                <div className='flex max-w-lg flex-wrap'>
                    {tagKeys.length === 0 && "No tags found."}
                    {sortedTags.map((t) => {
                        return (
                            <div
                                key={t}
                                className='mb-2 mr-5 mt-2'>
                                <div className={`bg-gray-300/70 dark:bg-gray-700 py-2 px-5 rounded-lg text-lg`}>
                                    <Tag text={t} />
                                    <Link
                                        href={`/tags/${slug(t)}`}
                                        className='-ml-2 text-base font-semibold uppercase text-blue-600 dark:text-blue-500'
                                        aria-label={`View posts tagged ${t}`}>
                                        {` (${tagCounts[t]})`}
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
