







const SkeletonLoader = () => {
    return (
        <ul className="overflow-auto bg-white">
            <li className="mb-6">

                <div className="flex items-center justify-between mb-3">
                    <span className="size-12 block bg-[#F5F5F5] rounded w-20 h-7 animate-pulse"></span>
                    <span className="size-12 block bg-[#F5F5F5] rounded w-13 h-7 animate-pulse"></span>
                </div>

                <ul className="flex flex-col gap-2">
                    <span className="size-12 block bg-[#F5F5F5] rounded w-full h-[76px] animate-pulse"></span>
                    <span className="size-12 block bg-[#F5F5F5] rounded w-full h-[76px] animate-pulse"></span>
                </ul>
            </li>

            <li className="mb-6">

                <div className="flex items-center justify-between mb-3">
                    <span className="size-12 block bg-[#F5F5F5] rounded w-20 h-7 animate-pulse"></span>
                    <span className="size-12 block bg-[#F5F5F5] rounded w-13 h-7 animate-pulse"></span>
                </div>

                <ul className="flex flex-col gap-2">
                    <span className="size-12 block bg-[#F5F5F5] rounded w-full h-[76px] animate-pulse"></span>
                    <span className="size-12 block bg-[#F5F5F5] rounded w-full h-[76px] animate-pulse"></span>
                </ul>
            </li>

        </ul>
    )
}

export default SkeletonLoader;