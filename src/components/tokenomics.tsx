export default function Tokenomics() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm max-w-[67.5rem] mt-6 ">
      <h2 className="text-2xl font-bold text-gray-900">Tokenomics</h2>

      <div className="mt-4">
        <h3 className="text-lg  font-medium ">Initial Distribution</h3>

        <div className="mt-6 flex flex-col md:flex-row items-center gap-8">
          {/* Donut Chart */}
          <div className="relative w-48 h-48">
            <div className="absolute inset-0">
              <div
                className="w-full h-full rounded-full"
                style={{
                  background:
                    "conic-gradient(#007AFF 0% 70%, #FF9500 30% 100%)",
                }}
              >
                <div className="absolute inset-[15%] bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#007AFF]"></div>
              <span className="text-sm ">Crowdsale investors: 80%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF9500]"></div>
              <span className="text-sm ">Foundation: 20%</span>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm  leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
          vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
          amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
          eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse
          urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet
          bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel
          ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
          mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </div>
    </div>
  );
}
