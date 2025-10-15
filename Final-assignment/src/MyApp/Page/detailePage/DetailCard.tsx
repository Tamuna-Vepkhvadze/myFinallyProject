
import type { Photo } from "../../component/interface/interface"


interface DataProp {
  data: Photo 
}

const DetailCard: React.FC<DataProp> = ({ data }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex justify-center items-center py-12 px-4">
      <div className="max-w-4xl w-full">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
         
          <div className="relative group">
            <img
              src={data.urls?.regular}
              alt={data.alt_description || "Photo"}
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

 
          <div className="p-8 space-y-6">
        
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              {data.alt_description || "Untitled Masterpiece"}
            </h1>

            <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {data.user?.name?.charAt(0) || "?"}
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Created by</p>
                <p className="text-lg font-semibold text-gray-900">
                  {data.user?.name || "Unknown Artist"}
                </p>
              </div>
            </div>

            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-indigo-600">
                  {data.likes || "0"}
                </div>
                <div className="text-sm text-gray-600 mt-1">Likes</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {data.views || "0"}
                </div>
                <div className="text-sm text-gray-600 mt-1">Views</div>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-pink-600">
                  {data.downloads || "0"}
                </div>
                <div className="text-sm text-gray-600 mt-1">Downloads</div>
              </div>
            </div>

            
            {data.tags && data.tags.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {data.tags.slice(0, 6).map((tag: any, i: number) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
                    >
                      #{tag.title}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailCard