import MyImage from "@/assets/anand.jpg";
import Shinde from "@/assets/shinde.png";
import thackrey from "@/assets/thackrey.png";
import bow from "@/assets/bow.png";

export function Header() {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-orange-500 shadow-lg w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 items-center py-4 gap-4 w-full px-8">
        <div className="flex gap-8">
          <div className="flex items-center justify-center md:justify-end">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-3 border-white shadow-lg overflow-hidden bg-white">
                <img
                  src={thackrey || "/placeholder.svg"}
                  alt="Official Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-3 border-white shadow-lg overflow-hidden bg-white">
                <img
                  src={Shinde || "/placeholder.svg"}
                  alt="Official Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-24 justify-center col-span-2 items-center ">
          <div className="flex items-center justify-center md:justify-end">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-3 shadow-lg overflow-hidden">
                <img
                  src={bow || "/placeholder.svg"}
                  alt="Official Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* Portal Title */}
          <div className="flex items-center justify-center text-center">
            <div className="text-white">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold tracking-wide leading-tight">
                ठाणे शहर ऑनलाइन
              </h2>
              <h3 className="text-base md:text-lg font-medium text-orange-100">
                तक्रार पोर्टल
              </h3>
            </div>
          </div>
          <div className="text-2xl text-white font-extrabold">
            ई - जनता दरबार
          </div>
        </div>

        {/* Profile/Image Section */}
        <div className="flex items-center justify-center md:justify-end">
          <div className="flex items-center space-x-3">
            <div className="text-right text-white hidden sm:block">
              <p className="text-lg text-orange-100">
                धर्मवीर श्री आनंद दिघे साहेब
              </p>
            </div>
            <div className="relative">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-3 border-white shadow-lg overflow-hidden bg-white">
                <img
                  src={MyImage || "/placeholder.svg"}
                  alt="Official Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="h-1 bg-gradient-to-r from-orange-300 via-orange-200 to-orange-300"></div>
    </div>
  );
}
