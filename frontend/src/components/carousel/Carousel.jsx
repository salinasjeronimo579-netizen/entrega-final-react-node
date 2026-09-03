import { useEffect, useState } from 'react'
import { featuredBooks } from '../../services/featuredBooks.js'

export function Carousel({ items = featuredBooks }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (items.length === 0) {
      return undefined
    }

    const intervalId = setInterval(() => {
      setIndex((current) => (current === items.length - 1 ? 0 : current + 1))
    }, 10000)

    return () => clearInterval(intervalId)
  }, [items.length])

  if (items.length === 0) {
    return null
  }

  const goPrev = () => {
    setIndex((current) => (current === 0 ? items.length - 1 : current - 1))
  }

  const goNext = () => {
    setIndex((current) => (current === items.length - 1 ? 0 : current + 1))
  }

  const current = items[index]

  return (
    <section className="relative w-full overflow-hidden">
      <div key={current.id} className="relative animate-fade-in">
        <img
          src={current.image}
          alt={current.title}
          className="h-[420px] w-full object-cover sm:h-[560px]"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent py-10">
          <div className="mx-auto max-w-7xl px-6">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              {current.title}
            </h3>
            {current.subtitle && (
              <p className="mt-1 text-white/80">{current.subtitle}</p>
            )}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/30 p-3 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-black/50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/30 p-3 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-black/50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Ir al elemento ${i + 1}`}
            className={`h-2 w-2 cursor-pointer rounded-full transition-all duration-200 hover:scale-125 ${
              i === index ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Carousel
