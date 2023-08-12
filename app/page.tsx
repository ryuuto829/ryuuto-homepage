import Slider from '@/components/slider'

export default function Home() {
  return (
    <main>
      <p className="pt-[88px] text-3xl font-serif leading-[58px] w-[75vw]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        sollicitudin et nisl sed malesuada. Morbi nisl odio, ornare sit amet
        libero sollicitudin, ornare iaculis justo. Pellentesque consequat, ante
        et elementum porttitor, odio sem dapibus felis, at sollicitudin sapien
        mauris ac eros. Phasellus arcu mi, egestas ut ultricies id, maximus et
        libero.
      </p>
      <h2 className="uppercase font-sans font-medium">Select Project</h2>
      <Slider />
      <h2 className="uppercase font-sans font-medium">More Work</h2>
      <div className="flex flex-col">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="grid grid-cols-12 items-center py-4 border-t-2 border-black text-xl font-sans"
          >
            <div className="col-span-5 ">My personal site {i}</div>
            <div className="col-span-5">App / Next.js / Supabase</div>
            <div className="col-span-2 text-base">View Site</div>
          </div>
        ))}
      </div>
      <p className="pt-[88px] text-3xl font-serif leading-[58px] w-[75vw]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        sollicitudin et nisl sed malesuada. Morbi nisl odio, ornare sit amet
        libero sollicitudin, ornare iaculis justo. Pellentesque consequat, ante
        et elementum porttitor, odio sem dapibus felis, at sollicitudin sapien
        mauris ac eros. Phasellus arcu mi, egestas ut ultricies id, maximus et
        libero.
      </p>
    </main>
  )
}
