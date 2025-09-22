// components/stories-gallery.tsx
const first_STORY_URL =
  "https://uon.earth/earthflag/followflag/805524642021636097"
const second_STORY_URL =
  "https://uon.earth/earthflag/followflag/803868302379446273"
const third_STORY_URL =
  "https://uon.earth/earthflag/followflag/803866875166846977"
const fourth_STORY_URL =
  "https://uon.earth/earthflag/followflag/803864627909095425"
const fifth_STORY_URL =
  "https://uon.earth/earthflag/followflag/803863071520321537"
const sixth_STORY_URL =
  "https://uon.earth/earthflag/followflag/803858281893588993"

type StoryItem = {
  src: string
  alt: string
  href: string
}

const STORIES: StoryItem[] = [
  { src: "/1st.png", alt: "World Music", href: first_STORY_URL },
  { src: "/2nd.png", alt: "Flag in the wind", href: second_STORY_URL },
  { src: "/3rd.png", alt: "Flag in the sky", href: third_STORY_URL },
  { src: "/4th.png", alt: "Cyclist with flag", href: fourth_STORY_URL },
  { src: "/5th.png", alt: "Athlete with flag", href: fifth_STORY_URL },
  { src: "/6th.png", alt: "Mountain summit", href: sixth_STORY_URL },
]

export function StoriesGallery() {
  return (
    <section
      id="stories"
      className="py-20"
      style={{
        backgroundImage: "url('/stories-desert.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          {/* Gallery grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {STORIES.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg overflow-hidden shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/70"
              >
                <div className="relative aspect-[16/9]">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="absolute inset-0 h-full w-full object-cover transform transition duration-300 group-hover:scale-105 group-hover:brightness-110"
                  />
                  {/* Subtle overlay & lift on hover */}
                  <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
